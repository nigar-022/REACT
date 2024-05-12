import React,{useReducer} from 'react'

const initialState = {
    age: 26,
    name: 'Nigar'
}


const reducer = (state,action) => {

    switch(action.type) {
        case 'increment_age': {
            return{
                name: state.name,
                age: state.age + 1
            };
        }
        case 'change_name': {
            return{
                name: action.nextName,
                age:state.age
            }
        }
            
    }

}

function PersonAge() {

    const [state,dispatch] = useReducer(reducer,initialState);

    const handleInputChange = (e) => {
        dispatch({  
            type: 'change_name',
            nextName: e.target.value
    })

    }


    return(
        <>
        <input value={state.name} onChange={handleInputChange}/>
        <button onClick = {() => dispatch({type: 'increment_age'})}>Increment Age</button>
        <h2>Hello! You are {state.age} old</h2>
        </>
    )
}

export default PersonAge