import React,{useEffect, useRef} from 'react'


function FocusInput(){

    const inputRef = useRef(null)


    useEffect(() => {
        //focus input elememnt

        inputRef.current.focus()
    },[])
    return(
        <>

        <input ref= {inputRef} type="text" />
        </>
    )
}


export default FocusInput