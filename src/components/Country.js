import React from 'react';
const Country = ({list}) => {
    return <ul>
    {list.map((res, i) => {
        return <li key={i}>
            <p>{res.name}</p>
            <p>Capital: {res.capital}</p>
            <p>Currency: {res.currencies[0].name}</p>
            <p>Population: {res.population} people</p>
            <img src={res.flag} alt="flag" />
        </li>
    })}
    </ul>
}
 
export default Country;