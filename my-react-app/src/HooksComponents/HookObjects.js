import React, {useState} from 'react';


function HookObjects () {


    const [name, setName] = useState({firstName: '', lastName:''})

    return(
        <>
       <form>
        
        <input placeholder='First Name' value={name.firstName} onChange = {(e) => setName({ ...name, firstName: e.target.value})}></input>
        <input placeholder=' Last Name' value={name.lastName} onChange = {(e) => setName({...name ,lastName: e.target.value})}></input>
        <h1>Your First Name Is  - {name.firstName}</h1>
        <h1>Your Last Name Is  - {name.lastName}</h1>
        <h2>{JSON.stringify(name)}</h2>
       </form>
       </>
    )
}
 export default HookObjects