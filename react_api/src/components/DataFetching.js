import React, { useState, useEffect } from 'react';
import axios from 'axios'

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

function DataFetching() {
    const [posts, setPosts] = useState([])
    const [id,setId] = useState(1)


    const fetchdata =  async () => {
        try{
            //const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            const response = await axios.get(BASE_URL)
            setPosts(response.data)
        } catch (error){
            console.log(error)
        }
       

    }
    useEffect(() => {
        fetchdata()

        // fetch('https://jsonplaceholder.typicode.com/posts')
        // .then((res) => res.json())
        // .then(json => setPosts(json))
        // .catch((err) => console.log(err))


        // axios.get('https://jsonplaceholder.typicode.com/posts')
        //     .then((response) => {
        //         console.log(response.data)
        //         setPosts(response.data)
        //     })
        //     .catch((error) => console.log(error))
    }, [id])

    return (
        <>
        <input type="text"  value={id} onChange={(e) => setId(e.target.value)}/>
        {/* <h5>{posts.title}</h5> */}

            <ul>
                {
                    posts.map((post) => (
                        <li key={post.id}>{post.title}</li>
                    ))
                }
            </ul>
        </>
    )
}


export default DataFetching