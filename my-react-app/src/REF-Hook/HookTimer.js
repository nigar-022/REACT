import React,{useEffect, useState, useRef} from 'react';


function HookTimer() {
    const [timer,setTimer] = useState(0);
    const intervalRef = useRef();


    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1)
        },1000)

        // interval is not defined error - interval is not accessible on event handler.
        //hence used useRef

        // const interval = setInterval(() => {
        //     setTimer(prevTimer => prevTimer + 1)
        // },1000)


        return () => {
            clearInterval(intervalRef.current)
        }
    })


    return(
        <>
        Timer - {timer}
        <button onClick = {() => clearInterval(intervalRef.current)}>Clear Timer</button>
        
        </>
    )
}

export default HookTimer