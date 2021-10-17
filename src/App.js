import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Country from './components/Country';
import Filterform from './components/Filterform';

function App() {
  const [refresh, setRefresh] = useState(false)
  const [countries, setCountries] = useState([])
  useEffect(() => axios
    .get(`https://restcountries.com/v3.1/all`)
    .then(response => {
      let newData = response.data;
      setCountries(newData)
      console.log()
    }),[refresh]
    )
    
  const handleChange = (e) => {
    if(e.target.value!==""){

    const countriesToShow = countries
    .filter(country => 
      country.name.common.toLowerCase()
      .startsWith(e.target.value.toLowerCase()));
    setCountries(countriesToShow)
    }else{
      setRefresh(!refresh)
  }
}

 if(countries){
  return (
    <div className="App">
      <h1>Where in the world?</h1>
      <Filterform onChange={handleChange}/>
      <Country list={countries}/>
    </div>
  )}else{
    return (<h1 style={{textAlign: "center"}}>...Loading</h1>)
  }
}

export default App;
