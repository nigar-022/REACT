import React, { useState, useEffect } from 'react'
import axios from 'axios'

function TableData() {

    const [data, setData] = useState([])

    const fetchData = async () => {
        try {

            const result = await axios.get('https://jsonplaceholder.typicode.com/users')
            console.log(result.data)
            setData(result.data)
        } catch (error) {
            console.log(error)

        }
    }

    useEffect(() => {

        fetchData()
    }, [])

    return (
        <>
            <h1>Table</h1>
            <table className="userTable">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>CITY</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.address.city}</td>
                            </tr>
                        ))
                    }


                </tbody>

            </table>
        </>
    )
}

export default TableData