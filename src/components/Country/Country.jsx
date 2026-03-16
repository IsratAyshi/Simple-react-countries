import React, { useState } from 'react';
import './Country.css'

const Country = ({country, handleVisitedCountries, handleVisitedFlags}) => {

    const { name, capital, flags, population, area} = country

    // const [visitStatus, setVisitStatus] = useState('Not Visited');
    // const handleVisited = () => {

    //     if (visitStatus === 'Not Visited') {
    //         setVisitStatus('Visited');
    //     }
    //     else {
    //         setVisitStatus('Not Visited');
    //     }
    // }

    const [visitStatus, setVisitStatus] = useState(false);

    const handleVisited = () => {
        // setVisitStatus(visitStatus? 'false' : 'true');

        // toggle the visit status
        setVisitStatus(!visitStatus);

        // add this country to visited countries too
        handleVisitedCountries(country);

    }

    return (
        // <div style={{display: 'flex',gap: '20px', alignItems: 'center', border: '1px solid gray', margin: '10px', padding: '10px', borderRadius: '10px'}}>

        <div className={`country ${visitStatus && 'country-visited'}`}>

        {/* nested ? diye dewa jay jodi data ache ki nei confused. Jodi thake use korbe */}
            <img src={flags?.flags?.png} alt={flags.flags.alt} />
            
            <h3 style={{color: 'lightsalmon'}}>Name: {name.common}</h3>
            <p>Capital: {capital.capital[0]}</p>
            <p>Population: {population.population}</p>
            <p>Area: {area.area} {
                area.area > 300000 ? "(Big Country)" : "(Small Country)"}
            </p>

            {/* <button onClick={handleVisited}> {visitStatus} </button> */}
            <button onClick={handleVisited}> 
                { visitStatus ? 'Visited' : 'Not Visited'} 
            </button>

            {/* <button onClick={handleVisitedFlags}>Add Visited Flag</button> kintu ebhabe hobe na karon etay parameter flag pass korte hobe, ar normally pass korle click er agei call houe boshe thakbe */}

            <button onClick={() => handleVisitedFlags(flags.flags?.png)}>Add Visited Flag</button>
        </div>
    );
};

export default Country;



/**
 * CSS add korte pari
 * 1. Inline CSS --> style={{color: 'red', fontSize: '20px'}}
 * 2. Internal CSS --> use style tag, {}, backtick ``
 *  <style>
 *        {` 
 *          p { 
 *              color: red; 
 *              font-size: 20px; 
 *             }, 
 *          .card { 
 *              border: 2px solid green;
 *              border-radius: 10px;
 *              } 
 *         `} 
 *   </style>
 * 
 * 3. External CSS --> import css file
 */