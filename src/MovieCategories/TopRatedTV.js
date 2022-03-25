//File to fetch Tv shows from API for Airting TopRated TV category

import React, { useEffect, useState } from "react";
import TvTopRatedHome from './TvTopRatedHome';
import {setCookieRate, getCookieRate } from '../Cookies';

const TopRatedTV = () => {   

const [ movies, setMovies ] = useState([]);

    var RMovies = getCookieRate('ratedMovies');
    if(RMovies)
{
var new_rating = RMovies[RMovies.length-1];
var movie_id = RMovies.substring(0,RMovies.length-1);
var x = JSON.parse(new_rating);

}

useEffect(() => {
    fetch('http://localhost:8080/tv/topRatedTV')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        setMovies(data.results);
    });
}, []);

return(    
  <div className='movie-container'>
     {movies.length > 0 && movies.slice(0,10).map((movie) => 
         <TvTopRatedHome key={movie.id} {...movie} movie_id={movie_id} new_rating={new_rating} />)}
  </div>
);
}

export default TopRatedTV;