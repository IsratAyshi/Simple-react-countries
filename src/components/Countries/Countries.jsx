
import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({countriesPromise}) => {

    const countriesData = use(countriesPromise);
    // console.log(countriesData);

    const countries = countriesData.countries;

    // to count and store visited countries pass the handler as props from parent to child
    const [visitedCountries, setVisitedCountries] = useState([]);
    const handleVisitedCountries = (country) => {
        console.log('handle visited countires clicked', country);

        // visitedCountries.push(country);
        // setVisitedCountries(visitedCountries); 
        // // wrong way, wont bother to re-render the state

        // when a country is already in visitedCountries, remove it if button is toggled  back to 'not visited' again
        if (visitedCountries.includes(country)) {
            const newVisitedCountries = visitedCountries.filter(uniqueCountry => uniqueCountry.cca3.cca3 !== country.cca3.cca3);
            setVisitedCountries(newVisitedCountries);
        }
        else{
            const newVisitedCountries = [...visitedCountries, country];
            setVisitedCountries(newVisitedCountries);
        }
    }

    const [visitedFlags, setVivisitedFlags] = useState([]);
    const handleVisitedFlags = (flag) => {
        // console.log('flag needs to be added', flag);

        // if the flag is already in visitedFlags, dont add it again
        if (visitedFlags.includes(flag)) {
            return;
        }
        
        const newVisitedFlags = [...visitedFlags, flag];
        setVivisitedFlags(newVisitedFlags);

    }


    return (
        <div>
            <h1>All the countries: {countries.length}</h1>
            <h3>Total Visited countries: {visitedCountries.length}</h3>
            <h3>Total Visited flags: {visitedFlags.length}</h3>

            <ol>
                {
                    visitedCountries.map(country => <li key={country.cca3.cca3}>{country.name.common}</li>)
                }
            </ol>

            <div className='visited-flags-container'> 
                {
                    visitedFlags.map((flag, index) => <img key={index} src={flag} alt="" />)
                    // another way to add unique key, ekhane index hoche map er default indexing system. tao key DITE HOBEI 
                }
            </div>

            <div className='countries'>
            {
                countries.map(country => 
                <Country 
                    key={country.cca3.cca3} 
                    country= {country}
                    // props hishebe function child a pass kore dei
                    handleVisitedCountries={handleVisitedCountries}
                    handleVisitedFlags={handleVisitedFlags}
                    ></Country>)
            }
            </div>
        </div>
    );
};

export default Countries; 




// react cant compare array/ non-primitive values if they are of the same reference
// so we need to create a new reference then compare with original
const numbers = [1,2,3,4,5];
const newNumbers = [numbers]; // [ [1,2,3,4,5] ] is not what we want
const newNumbersRight = [...numbers]; // [1,2,3,4,5,6] is the perfect way to copy an array to a new reference