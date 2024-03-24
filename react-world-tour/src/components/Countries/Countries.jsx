import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countries.css'


const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries , setVisitedCountries] = useState([]);
    const [visitedFlags , setVisitedFlags] = useState([]);

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])


    const handleVisitedCountry = (country)=>{
        console.log('add this to your visited countries')
        console.log(country);

        const newVisitedCountries =[...visitedCountries,country];
        setVisitedCountries(newVisitedCountries);
    }

    const handleVisitedFlags = flag =>{
        const newVisitedFlags =[...visitedFlags,flag];
        setVisitedFlags(newVisitedFlags);
        console.log('adding',flag);
    }
    // remove item from an array in a state
    // use filter to select all the elements except the you want to remove 

    return (
        <div >
             <h3>Countries </h3>
             {/* Visited Countries */}
             <div>
                <h5>Visited Countries : {visitedCountries.length}</h5>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3} >{country.name.common}</li>)
                    }
                </ul>
            </div>
             {/* Display Country */}
            <div className="country-container">
                {
                    countries.map(country => <Country
                    key={country.ccn3}
                    handleVisitedCountry={handleVisitedCountry}
                    handleVisitedFlags={handleVisitedFlags}
                    country={country}></Country>)
                }
            </div>
            <div >
                {
                    visitedFlags.map((flag , idx) => <img key={idx} src={flag}></img>)
                }
            </div>
        </div>
    );
};

export default Countries;