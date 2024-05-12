import React,{useReducer,useEffect} from 'react';
import axios from 'axios';


const initialState = {
    loading: true,
    error:'',
    post: {}
}


const reducer = (state,action) => {

    switch(action.type){
        case 'FETCH_SUCESS':
            return {
                loading: false,
                error: '',
                post: action.payload
            }
        case 'FETCH_ERROR':
            return{
                loading:false,
                error: 'Something Went Wrongs',
                post: {}
            }
        default:
            return state
          
    }
}
function DataFetchR() {

    const [state,dispatch] = useReducer(reducer,initialState)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            dispatch({type: 'FETCH_SUCESS', payload: response.data})
        })
        .catch(error => {
            console.log(error)
            dispatch({type: 'FETCH_ERROR'})
        })
    },[])

    return(
        <>
        {
            state.loading ? state.loading : state.post.title 
        }
        {
            state.error ? state.error : null
        }
        </>
    )
}

export default DataFetchR