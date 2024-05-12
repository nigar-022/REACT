import axios from 'axios';
import React, {useEffect,useState} from 'react';


function DataFetchings () {

    const [post,setPost] = useState( {} );
    const [id,setId] = useState(1)
    const [idFromButtonCLick, setIdOnButtonClick] = useState(1)


    const handleClick = () => {
        setIdOnButtonClick(id)

    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonCLick}`)
        .then(response => {
            console.log(response)
            setPost(response.data)
        
        })
        .catch(error => console.log(error))
    },[idFromButtonCLick])

    return(
        <>
        <input type="text" value={id} onChange={e => setId(e.target.value)} />
        <button type="button" onClick={handleClick}>Fetch Post</button>
        <h2>{post.title}</h2>

        {/* {
            post.map((p) => (
                <li key={p.id}>{p.title}</li>
            ))
        } */}
        </>
    )

}

export default DataFetchings