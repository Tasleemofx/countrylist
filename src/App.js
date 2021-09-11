import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Country from './components/Country';
import Filterform from './components/Filterform';

function App() {
  const [countries, setCountries] = useState()

  let countrylist = useEffect(() => axios
    .get("https://restcountries.eu/rest/v2/all")
    .then(response => {
      setCountries(response.data)
      return response.data
    }),[]
    )
    
  const handleChange = (e) => {
    if(e.target.value){
    const countriesToShow = countries.filter(country => country.name.startsWith(e.target.value));
    setCountries(countriesToShow)
    }else{
      setCountries(countrylist)
    }
  }

 if(countries){
  return (
    <div className="App">
      <h1>Countries and Capitals</h1>
      <Filterform onChange={handleChange}/>
      <Country list={countries}/>
    </div>
  )}else{
    return (<h1 style={{textAlign: "center"}}>...Loading</h1>)
  }
}

export default App;
