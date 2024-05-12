import React,{useState,useEffect} from 'react'

export function Pokemon2() {

    const [selectedPokemon,setSelectedPokemon] = useState("")
    const [pokemonData,setPokemonData] = useState([])
    const [selectedPokemonDetails,setSelectedPokemonDetails] = useState({})
    const [loading,setLoading] = useState(true)
    const [cachedPokemondetails,setCachedPokemonDetails] = useState({})

    useEffect(() => {
        fetchData()
    },[])

    const fetchData = async () => {
        try {

            const response = await fetch('https://pokeapi.co/api/v2/pokemon/')
            const data  = await response.json()
            console.log(data)
            setPokemonData(data.results)
            setLoading(false)

        } catch(error) {
            console.log(error)

        }
    }


    const handlePokemonChnage = (event) => {
        const selectedPokemonName =  event.target.value;
        console.log(selectedPokemonName)

        if(selectedPokemonName in cachedPokemondetails) {
            setSelectedPokemonDetails(cachedPokemondetails[selectedPokemonName])            
        } else {

            fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPokemonName}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setCachedPokemonDetails({

                    ...cachedPokemondetails,
                    [selectedPokemonName]: data
                }
                )
                setSelectedPokemonDetails(data)
            })
            .catch((error) => console.error("Error fetching details",error))
        }

        setSelectedPokemon(selectedPokemonName)

    }

return(
    <>
    <h1>Pokemon</h1>
    {
        loading && <h4>Loading.....</h4>
    }
    <select value={selectedPokemon} onChange={handlePokemonChnage}>
        <option value="">Select a pokemon</option>
        {
            !loading && pokemonData.map((p) => (
                <option key={p.name} value={p.name}>{p.name}</option>
            ))
       
        }
    </select>
    {
        selectedPokemon && (
            <div>
                <h2>Selected Pokemon: {selectedPokemon}</h2>
                <h3>Name: {selectedPokemonDetails.name}</h3>
                <h3>Abilities: </h3>
                
                    {
                        selectedPokemonDetails && selectedPokemonDetails?.abilities?.map((a,i) => (
                            <div key={i}>{a.ability.name}</div>
                        ))
                    }
                
            </div>
        )
    }
    </>
)

}

//export default Pokemon2