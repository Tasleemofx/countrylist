import React from 'react';
const Country = ({list}) => {
    return <ul>
        {list.map((res,i)=>{
            return <li key={i}>
                    <p>Country: {res.name.common}</p>
                    <p>Capital: {res.capital}</p>
                    <p>Continent: {res.continents[0]}</p>
                    <p>Population: {res.population} people</p>
                    <img src={res.flags.svg} alt="flag"/>                    
                </li>
        })}
    </ul>
}
 
export default Country;