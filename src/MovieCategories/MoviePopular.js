//File to display rendered movies from API for Popular category

import React from "react";
import MovieDetails from "../Components/Movie_Details";
import { Link } from 'react-router-dom';
import {setCookieRate, getCookieRate } from '../Cookies';

const Img_API = "https://image.tmdb.org/t/p/w1280";

const Movie = ({ id, title, poster_path, overview, vote_average, original_language, release_date, movie_id, new_rating}) => ( 


<div className='movie'>
{/* {console.log(movie_id)}
{console.log(id)} */}
<img src={Img_API + poster_path} alt={title} />   

<div className="movie-info">
  <h4>{title}</h4>  
  {(movie_id == id) ? <span>{parseFloat(vote_average + (new_rating/10))}</span> : <span>{vote_average}</span>}
    
  &nbsp;&nbsp;
    <span className="detail-button">
    <Link to={{
    pathname: "/home/movies/details",
    state: {id: id,
      title: title,
      poster_path: poster_path, 
      overview: overview,
      vote_average: vote_average,
      original_language: original_language,
      release_date: release_date}
  }}>
  <button>Details</button>
  </Link></span>
</div>
                   
</div>
);
    
export default Movie;