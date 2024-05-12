import React from 'react'

// function Greet () {
//     return <h1>Hello Nigar</h1>
// }
 const Greet = (props) => {
    const {name, heroName} = props;

    return(
    <h1>Hello {name} a.k.a {heroName}</h1>
    )
    

 }

export default Greet