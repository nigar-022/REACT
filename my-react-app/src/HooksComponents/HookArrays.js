import React,{useState} from 'react';


function HookArrays() {

    const [items,setItems] = useState([]);


    const addItems = () => {
        setItems([...items,{
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }


    return(
        <div>
            <button onClick = {addItems}>Add a number</button>
            <ul>
                {

                    items.map((i) => (
                        <li key={i.id}>{i.value}</li>
                    ))
                }
                
            </ul>
        </div>
    )
}

export default HookArrays