import axios from 'axios';
import React,{useState,useEffect} from 'react';

function DataFetch(){
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState('')
    const [post,SetPost] = useState({})


    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            setLoading(false)
            setError('')
            SetPost(response.data)
        })
        .catch(error =>{
            setLoading(false)
            setError('Something went wrong')
            SetPost({})
        })
    })

    return(

        <>
        {
            loading ? loading : post.title
        }
        {
            error ? error : null 
        }
        </>
    )
}

export default DataFetch