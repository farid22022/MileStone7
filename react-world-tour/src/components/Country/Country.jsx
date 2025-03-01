
import { useState } from 'react';
import './Country.css'
import CountryDetail from '../../CountryDetail/CountryDetail';
const Country = ({country,handleVisitedCountry,handleVisitedFlags}) => {
    console.log(country);
    const {name,flags,population,area,cca3} = country;

    const [visited,setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    }

    
    

    // console.log(handleVisitedCountry);
    return (
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
            <h3 style={{color:visited?'purple':'white'}}>Name:{name.common}</h3>
            <img src={flags.png}></img>
            <h3>Population : {population}</h3>
            <h3>Area : {area}</h3>
            <p><small>Code : {cca3}</small></p>
            <button onClick={() =>handleVisitedCountry(country)}>Mark visited</button>
            {/* <button onClick={() => handleVisitedFlags(country.flags.png)}>Add Flag</button>
             */}
             <button onClick={() => handleVisitedFlags(flags.svg)}>Add Flag</button>

            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            {visited ? 'I have visited this country.':'I want to visit'}
            <hr></hr>
            <CountryDetail
            country={country}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlags={handleVisitedFlags}></CountryDetail>

        </div>
    );
};

export default Country;