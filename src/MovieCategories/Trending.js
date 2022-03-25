//File to fetch movies from API for Trending category

import React, { useEffect, useState } from "react";
import MovieTrending from './MovieTrending.js';
import {setCookieRate, getCookieRate, eraseCookieRate } from '../Cookies';

const BaseURL = "https://api.themoviedb.org/3";
const Search_API = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
const APIKEY = '04c35731a5ee918f014970082a0088b1'

const Trending = () => {   

const [ movies, setMovies ] = useState([]);

var RMovies = getCookieRate('ratedMovies');

if(RMovies)
{
var new_rating = RMovies[RMovies.length-1];
var movie_id = RMovies.substring(0,RMovies.length-1);
var x = JSON.parse(new_rating);
console.log(movie_id);
console.log(new_rating);
}


useEffect(() => {
    fetch(''.concat(BaseURL, '/trending/all/day?api_key=', APIKEY))
    .then(res => res.json())
    .then(data => {
        console.log(data);
        setMovies(data.results);
    });
}, []);

return(    
  <div className='movie-container'>
     {movies.length > 0 && movies.slice(0,10).map((movie) => 
         <MovieTrending key={movie.id} {...movie} movie_id={movie_id} new_rating={new_rating} />)}
  </div>
);
}

export default Trending;