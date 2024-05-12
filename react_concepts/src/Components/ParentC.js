import React from 'react'
import Title from './Title'
import Count from './Count'
import Button from './Button';
import {useState,useCallback} from 'react'

function ParentC() {
    const [age,setAge] = useState(25);
    const [salary, setSalary] = useState(50000);

    const incrementAge = useCallback(() => {
      setAge(age + 1)

    },[age])

    const incrementSalary = useCallback(() => {
        setAge(age + 1)
    },[salary])
  return (
    <div>ParentC
        <Title />
        <Count text="age" count={age}/>
        <Button handleClick={incrementAge}>Increment Age</Button>
        <Count text="salary" count={salary}/>
        <Button handleClick={incrementSalary}>Increment salary</Button>
    </div>
  )
}

export default ParentC