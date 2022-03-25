//File to fetch movies from API for NowPlaying category

import React, { useEffect, useState } from "react";
import MovieNowPlaying from './MovieNowPlaying';
import {setCookieRate, getCookieRate } from '../Cookies';

const NowPlaying = () => {   

const [ movies, setMovies ] = useState([]);


var RMovies = getCookieRate('ratedMovies');
if(RMovies)
{
var new_rating = RMovies[RMovies.length-1];
var movie_id = RMovies.substring(0,RMovies.length-1);
var x = JSON.parse(new_rating);
}


useEffect(() => {
    fetch('http://localhost:8080/movie/nowShowing')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        setMovies(data.results);
    });
}, []);

return(    
  <div className='movie-container'>
     {movies.length > 0 && movies.slice(0,10).map((movie) => 
         <MovieNowPlaying key={movie.id} {...movie} movie_id={movie_id} new_rating={new_rating} />)}
  </div>
);
}

export default NowPlaying;