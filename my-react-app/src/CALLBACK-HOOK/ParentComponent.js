import React,{useState,useCallback} from 'react'
import Title from './Title'
import Button from './Button'
import Count from './Count'

function ParentComponent() {

    const [age,setAge] = useState(0)
    const [salary,setSalary] = useState(50000)


    const handleAgeClick = useCallback( () => {
        setAge(age + 1)
    },[age])
   

    const handleSalaryCLick = useCallback(() => {
        setSalary(salary + 10000)
    },[salary])
    

    return(
        <>
        <Title />
        <Count text={"Age"} count={age} />
        <Button handleClick={handleAgeClick}>Increment Age</Button>
        <Count text="salary" count={salary}/>
        <Button handleClick = {handleSalaryCLick}>Increment Salary</Button>
        
        </>
    )

}

export default ParentComponent