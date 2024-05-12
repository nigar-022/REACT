import React,{useState} from 'react'
import {people} from './data'
import { getImageUrl } from './utils';

function SimpleJsxEx() {
    const [showBtn,setShowBtn] = useState(true);
    const [value,setValue] = useState('')

   


    const users = [
        { name: 'Nigar', lastName: 'shaikh', id: 1, age: 20 },
        { name: 'ABC', lastName: 'XYZ', id: 2, age: 25 },
        { name: 'ABCD', lastName: 'XYZD', id: 3, age: 10 }
    ];

    //const usersData = users.map((item) => <li key={item.id}>{item.name}</li>)


    const filteredData = users.filter((i) => i.age > 10)
    const filtered = filteredData.map((item) => 
    <li key={item.id}>{item.name}</li>
    )


    const chemistes = people.filter((p) => p.profession === 'chemist')

    const listItems = chemistes.map((p) => <li>
        <img 
        src = {getImageUrl(p)}
        alt={p.name}
        />
        <p>
            <strong>{p.name}:</strong>
            {
                    ' ' + p.profession + ''
            }
            known for {p.accomplishment}
        </p>
    </li>)

    return (
        <>
            <h1>JSX is cool</h1>
            {/* <ul>
                {filtered}
            </ul> */}


            <ul>
                {
                    users
                    .filter((i) => i.age > 20)
                    .map((el) => <li key={el.id}>{el.name}</li>)
                }
            </ul>

            <ul>{listItems}</ul>

            <div>Toggle Challenge</div>
            <button onClick={() => setShowBtn(!showBtn)}>{showBtn ? "Show Element" : "Hide Element"}</button>
            <input
            type="text"
            value={value}
            onChange={(e) => {
                setValue(e.target.value);
             
            }}
            placeholder='Enter text'
            />
            <p>{value}</p>
            <button disabled={value.length < 1}>Submit</button>

           
        </>
    )
}

export default SimpleJsxEx