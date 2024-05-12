//use Effect
import React, { useState } from 'react'
import HookMouse from './HookMouse'

function MouseContainer () {

   const[display,setDisplay] = useState(true);

    return(
        <>
        <button onClick = {() => setDisplay(!display) }>Toggle Display Button</button>
        {display && <HookMouse />}
        </>
    )

}
 export default MouseContainer
