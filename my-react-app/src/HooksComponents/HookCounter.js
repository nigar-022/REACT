import React, {useState} from 'react';


function HookCounter () {

    const [count,setCount] = useState(0);


    const handleClick = () => {
        // setCount(count + 1)

        setCount(prevSate => prevSate + 1)
    }


    return(
        <button onClick={handleClick}>Count: {count}</button>
    )
}

export default HookCounter