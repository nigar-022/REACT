import React,{useState} from 'react'
import data from './apidata.json'
import './App.css'

function App() {
  const [inputSearchTerm, setInputSearchTerm] = useState('')
  const [users]= [data.users]

  const handleChange = (e) => {
    setInputSearchTerm(e.target.value)
    
  }
  

  const onSearch = (searchTerm) => {
    setInputSearchTerm(searchTerm)
    // api to fetch search result
    console.log(searchTerm)
    //console.log(data.users)

  }
  return (
    <div className="App">
      <h1>Search</h1>

      <div className='search-container'>
        <div className='search-inner'>
          <input type="text" value={inputSearchTerm} onChange={handleChange}/>
          <button onClick={() => onSearch(inputSearchTerm)}>Search</button>
        </div>
        <div className='dropdown  '>
          {users.filter((item) => {
            return inputSearchTerm && item.firstName.toLowerCase().startsWith(inputSearchTerm.toLowerCase()) && item.firstName !== inputSearchTerm
          }).slice(0,10)
          .map((d) => (
            <div className='dropdown-row' key={d.id} onClick={() => onSearch(d.firstName)}>{d.firstName}</div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default App;
