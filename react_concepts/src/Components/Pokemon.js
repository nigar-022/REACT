import React, { useState, useEffect } from 'react';


function Pokemon() {
    const [pokemonName, setPokemonName] = useState('')
    const [pokemon, setPokemon] = useState([])
    const [pokemonChosen, setPokemonChosen] = useState(false)

    const searchPokemon = () => {
        if (pokemonName) {

            fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
                .then((response) => response.json())
                .then((data) => {

                    console.log(data);
                    setPokemon(data)
                    setPokemonChosen(true)
                })
                .catch((error) => console.log(error, `${pokemonName} is not present in the database`))
        }

    }

    return (

        <>
            <h1>Pokemon Stats</h1>
            <input type="text" defaultValue={pokemonName} placeholder='Enter Pokemon name' onChange={(e) => setPokemonName(e.target.value)} />
            <h2>{pokemonName}</h2>
            <button onClick={searchPokemon}>Search Pokemon</button>
            <div>
                {!pokemonChosen ? (<h1>Please choose a pokemon</h1>) : (
                    <div>
                        {
                            pokemon && (
                                <>
                                    {/* <h1>{pokemon.name}</h1>
                                <h1>{pokemon.order}</h1>
                                <img src = {pokemon.sprites.front_default} alt={pokemon.name}/>
                                <div>
                                    {
                                        pokemon.abilities.map((p,i) => (
                                            <h1 key={i}>{p.ability.name}</h1>
                                        ))
                                    }
                                </div> */}
                                    <table>
                                        <thead>
                                            <tr>

                                                <th>Name</th>
                                                <th>Abilities</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                <tr>
                                                    <td>{pokemon.name}</td>
                                                    <td>
                                                        {
                                                            pokemon && pokemon?.abilities?.map((p) => (
                                                                <span key={p.ability.name}>{p.ability.name} </span>
                                                            ))
                                                        }
                                                    </td>
                                                </tr>
                                            }
                                            
                                        </tbody>
                                    </table>
                                </>
                            )
                        }
                    </div>

                )
                }

            </div>
        </>
    )

}

export default Pokemon