//Logic for fetching movies list by Action and Adventure genre and passing the array to TvGenreAct_Adv_Details page

import React, { useEffect, useState } from "react";
import TvGenreAct_Adv_Details from "./TvGenreAct_Adv_Details";
import {setCookieRate, getCookieRate } from '../Cookies';

const TvGenreAct_Adv = () => {   

const [ movies, setMovies ] = useState([]);


var RMovies = getCookieRate('ratedMovies');
if(RMovies)
{
var new_rating = RMovies[RMovies.length-1];
var movie_id = RMovies.substring(0,RMovies.length-1);
var x = JSON.parse(new_rating);
}

useEffect(() => {
    fetch('https://api.themoviedb.org/3/discover/tv?api_key=04c35731a5ee918f014970082a0088b1&with_genres=10759')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        setMovies(data.results);
    });
}, []);

return(    
    <div className='movie-container'>
    {movies.length > 0 && movies.slice(0,10).map((movie) => 
        <TvGenreAct_Adv_Details key={movie.id} {...movie} movie_id={movie_id} new_rating={new_rating} />)}
 </div>
);
}

export default TvGenreAct_Adv;