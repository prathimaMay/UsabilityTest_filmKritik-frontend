//File to fetch movies from API for Popular category

import React, { useEffect, useState } from "react";
import Movie from './MoviePopular.js';
import MovieDetails from "../Components/Movie_Details";
import { Link } from 'react-router-dom';
import {setCookieRate, getCookieRate,eraseCookieRate } from '../Cookies';

const Popular = () => {   

const [ movies, setMovies ] = useState([]);

var RMovies = getCookieRate('ratedMovies');
if(RMovies)
{
console.log(typeof RMovies);
// var x = JSON.parse(RMovies);
var new_rating = RMovies[RMovies.length-1];
var movie_id = RMovies.substring(0,RMovies.length-1);
console.log(typeof x);
console.log(movie_id);
console.log(new_rating);
var x = JSON.parse(new_rating);
}

//     console.log(RMovies)
//     console.log(RMovies)

 // movieRateId = x.id;
// movieRating = x.rating;

useEffect(() => {
    fetch('http://localhost:8080/movie/popularMovies')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        setMovies(data.results);
    });
}, []);

return(    
  <div className='movie-container'>
    
     {movies.length > 0 && movies.slice(0,10).map((movie) => 
       
         <Movie key={movie.id} {...movie} movie_id={movie_id} new_rating={new_rating}/>)}
  </div>
);
}

export default Popular;