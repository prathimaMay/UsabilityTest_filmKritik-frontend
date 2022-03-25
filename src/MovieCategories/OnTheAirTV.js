//File to fetch Tv shows from API for On The Air TV category

import React, { useEffect, useState } from "react";
import TvOnTheAirHome from './TvOnTheAirHome';
import {setCookieRate, getCookieRate } from '../Cookies';

const OnTheAirTV = () => {   

const [ movies, setMovies ] = useState([]);

    var RMovies = getCookieRate('ratedMovies');
    
if(RMovies)
{
    var new_rating = RMovies[RMovies.length-1];
    var movie_id = RMovies.substring(0,RMovies.length-1);
    var x = JSON.parse(new_rating);
}

useEffect(() => {
    fetch('https://api.themoviedb.org/3/tv/on_the_air?api_key=04c35731a5ee918f014970082a0088b1&language=en-US&page=1')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        setMovies(data.results);
    });
}, []);

return(    
  <div className='movie-container'>
     {movies.length > 0 && movies.slice(0,10).map((movie) => 
         <TvOnTheAirHome key={movie.id} {...movie} movie_id={movie_id} new_rating={new_rating} />)}
  </div>
);
}

export default OnTheAirTV;