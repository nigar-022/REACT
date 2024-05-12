//use Effect
import React, { useState, useEffect } from 'react'

function HookCounterOne () {

    const [count,setCount] = useState(0);
    const [name, setName] = useState('') ;

    useEffect(() => {
        console.log('updating.....')
        document.title = `Clicked ${count} times`
    },[count])

    return(
        <>
        <input type="text"  value={name} onChange = {(e) => setName( e.target.value)}></input>
        <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
        </>
    )

}
 export default HookCounterOne
