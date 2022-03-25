import React, { useEffect, useState } from "react";
import TvGenre_SciFi_Fant_Details from "./TvGenre_SciFi_Fant_Details";
import {setCookieRate, getCookieRate } from '../Cookies';

const TvGenre_SciFi_Fant = () => {   

const [ movies, setMovies ] = useState([]);


var RMovies = getCookieRate('ratedMovies');
if(RMovies)
{
var new_rating = RMovies[RMovies.length-1];
var movie_id = RMovies.substring(0,RMovies.length-1);
var x = JSON.parse(new_rating);
}

useEffect(() => {
    fetch('https://api.themoviedb.org/3/discover/tv?api_key=04c35731a5ee918f014970082a0088b1&with_genres=10765')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        setMovies(data.results);
    });
}, []);

return(    
    <div className='movie-container'>
    {movies.length > 0 && movies.slice(0,10).map((movie) => 
        <TvGenre_SciFi_Fant_Details key={movie.id} {...movie} movie_id={movie_id} new_rating={new_rating} />)}
 </div>
);
}

export default TvGenre_SciFi_Fant;