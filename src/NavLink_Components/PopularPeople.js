//Fetching popular people from the API and passing the data to PopularPeopleDetails page for display

import React, { useEffect, useState } from "react";
import PopularPeopleDetails from './PopularPeople_Details';
import Navbar from '../Components/Navbar';

const PopularPeople = () => {   

const [ persons, setPersons ] = useState([]);

useEffect(() => {
    fetch('https://api.themoviedb.org/3/person/popular?api_key=04c35731a5ee918f014970082a0088b1&language=en-US&page=1')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        setPersons(data.results);
    });
}, []);

return(  
    <div>
    <div>
        <Navbar />
    </div>
    <div className='movie-container'>
     {persons.length > 0 && persons.map((person) => 
         <PopularPeopleDetails key={person.id} {...person} />)}
  </div>
  </div>
);
}

export default PopularPeople;