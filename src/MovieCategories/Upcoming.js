//File to fetch movies from API for Upcoming category

import React, { useEffect, useState } from "react";
import MovieUpcoming from './MovieUpcoming';
import {setCookieRate, getCookieRate } from '../Cookies';

const Upcoming = () => {   

const [ movies, setMovies ] = useState([]);

    var RMovies = getCookieRate('ratedMovies');
    
if(RMovies)
{
var new_rating = RMovies[RMovies.length-1];
var movie_id = RMovies.substring(0,RMovies.length-1);
var x = JSON.parse(new_rating);
}


useEffect(() => {
    fetch('http://localhost:8080/movie/upcomingMovies')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        setMovies(data.results);
    });
}, []);

return(    
  <div className='movie-container'>
     {movies.length > 0 && movies.slice(0,10).map((movie) => 
         <MovieUpcoming key={movie.id} {...movie} movie_id={movie_id} new_rating={new_rating} />)}
  </div>
);
}

export default Upcoming;