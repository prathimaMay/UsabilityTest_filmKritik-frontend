//Displays the movie or TV shows or People details searched from Searchbar

import React from "react";
import { Link } from 'react-router-dom';

const Img_API = "https://image.tmdb.org/t/p/w1280";
const People_API = "https://image.tmdb.org/t/p/w600_and_h900_bestv2";


const SearchMulti = ({ id, name, title, poster_path, overview, vote_average, original_language, popularity, known_for_department, release_date, profile_path, media_type, movie_id, new_rating }) => ( 

<div className='movie'>

{(media_type == "person") ? <img src={People_API + profile_path} alt={title} /> : <img src={Img_API + poster_path} alt={title} /> }  

<div className="movie-info">
  <h3>{title}</h3>
  <h3>{name}</h3>

  {(movie_id == id) ? <span>{parseFloat(vote_average + (new_rating/10))}</span> : <span>{vote_average}</span>}
    
    &nbsp;&nbsp;
    {
    (media_type == "movie") ? (
      <span className="detail-button">
      <Link to={{
      pathname: "/home/movies/details",
      state: {id: id,
        title: title,
        name: name,
        poster_path: poster_path, 
        overview: overview,
        vote_average: vote_average,
        original_language: original_language,
        release_date: release_date}
    }}>
    <button>Details</button>
    </Link></span> )
    : 
    (media_type == "tv") ? (
      <span className="detail-button">
      <Link to={{
      pathname: "/home/tvshows/details",
      state: {id: id,
        name: name,
        poster_path: poster_path, 
        overview: overview,
        vote_average: vote_average,
        original_language: original_language,
        release_date: release_date}
    }}>
    <button>Details</button>
    </Link></span> )
    : (
    <span className="detail-button">
    <Link to={{
    pathname: "/home/people/details",
    state: {id: id,
      name: name,
      profile_path: profile_path, 
      popularity: popularity,
      known_for_department: known_for_department}
  }}>
  <button>Details</button>
  </Link></span> )
  }
    </div>
                    
</div>
);
    
export default SearchMulti;