//File to fetch movies from API for TopRated category

import React, { useEffect, useState } from "react";
import MovieTopRated from './MovieTopRated';
import {setCookieRate, getCookieRate } from '../Cookies';

const TopRated = () => {   

const [ movies, setMovies ] = useState([]);


    var RMovies = getCookieRate('ratedMovies');
    
if(RMovies)
{
var new_rating = RMovies[RMovies.length-1];
var movie_id = RMovies.substring(0,RMovies.length-1);
var x = JSON.parse(new_rating);
}


useEffect(() => {
    fetch('http://localhost:8080/movie/topRatedMovies')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        setMovies(data.results);
    });
}, []);

return(    
  <div className='movie-container'>
     {movies.length > 0 && movies.slice(0,10).map((movie) => 
         <MovieTopRated key={movie.id} {...movie} movie_id={movie_id} new_rating={new_rating} />)}
  </div>
);
}

export default TopRated;