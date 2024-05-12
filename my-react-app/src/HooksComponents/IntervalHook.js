import React, {useState,useEffect} from 'react';

function IntervalHook (){

    const [count,setCount] = useState(0);

    const tick = () => {

        // setCount(prevCount => prevCount + 1)    // in thi case we dont need to specify dependency [count] in use UseEffect.
        setCount(count + 1)
    }

    useEffect(() => {

        const interval = setInterval(tick,1000);

        return () => {
            clearInterval(interval)
        }
    },[count])

    return(
        <div>
        {count}
        </div>
    )

}
export default IntervalHook

