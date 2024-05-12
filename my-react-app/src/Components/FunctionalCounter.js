import React, {useState} from 'react'


const FunctionalCounter = () => {

    const [count, setCount] = useState(0)

    const incrementCount = () => {
        setCount(count + 1)
        console.log(count)
    }

    return(
        <>
        <h1>Count - {count}</h1>
        <button onClick = {incrementCount}>Increment</button>
        </>
    )
}

export default FunctionalCounter