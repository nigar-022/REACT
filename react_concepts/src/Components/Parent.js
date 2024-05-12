import React,{useState} from 'react'
import Child from './Child'

export default function Parent() {

  const [counter,setCounter] = useState(0);


  const handleClick = () => {
    console.log('clicked')
    //setCounter(counter + 1)
    setCounter((prevCount) => prevCount + 1)
  }
  return (
    <>
    <div>Parent</div>
    <h1>Count - {counter}</h1>
    <Child handleClick = {handleClick}/>
    
    </>
  )
}
