import React,{useState,useEffect} from 'react';


function SortProductData() {
    const [sorting,setSorting] = useState('asc');
    const [products,setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            try {

                const reponse = await fetch(`https://fakestoreapi.com/products?sort=${sorting}`)
                const data = await reponse.json();
                console.log(data)
                setProducts(data)
                
            }catch(error) {
                console.error(error)
            }
        }
        fetchProducts()
    },[sorting])

    const handleChange = (event) => {
        setSorting(event.target.value)
        console.log(event.target.value)
    }

    return(
        <>
        <h1>Product List</h1>
        <select value={sorting} onChange={handleChange}>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
        </select>
        <ul>
            {

            products && products.map((product) => (
                <li key={product.id}>
                    <h2>{product.title}</h2>
                    <p>{product.price}</p>
                    <img src={product.image} alt={product.title} />
                    </li>
            ))
            }
        </ul>
        </>
    )

}

export default SortProductData