//File to fetch Tv shows from API for Popular TV category

import React, { useEffect, useState } from "react";
import TvPopularHome from './TvPopularHome';
import {setCookieRate, getCookieRate } from '../Cookies';

const PopularTv = () => {   

const [ movies, setMovies ] = useState([]);

    var RMovies = getCookieRate('ratedMovies');
    
if(RMovies)
{
var RMovies = getCookieRate('ratedMovies');
var new_rating = RMovies[RMovies.length-1];
var movie_id = RMovies.substring(0,RMovies.length-1);
var x = JSON.parse(new_rating);
}

useEffect(() => {
    fetch('http://localhost:8080/tv/popularTV')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        setMovies(data.results);
    });
}, []);

return(    
  <div className='movie-container'>
     {movies.length > 0 && movies.slice(0,10).map((movie) => 
         <TvPopularHome key={movie.id} {...movie} movie_id={movie_id} new_rating={new_rating} />)}
  </div>
);
}

export default PopularTv;