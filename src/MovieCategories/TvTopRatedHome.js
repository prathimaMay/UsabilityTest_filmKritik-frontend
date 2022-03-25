//File to display rendered Tv shows from API for Top Rated TV category

import React from "react";
import { Link } from 'react-router-dom';

const Img_API = "https://image.tmdb.org/t/p/w1280";


const TvTopRatedHome = ({ id, name, poster_path, overview, vote_average, original_language, first_air_date, movie_id, new_rating}) => ( 
        
<div className='movie'>
<img src={Img_API + poster_path} alt={name} />   

<div className="movie-info">
  <h4>{name}</h4>
  {(movie_id == id) ? <span>{parseFloat(vote_average + (new_rating/10))}</span> : <span>{vote_average}</span>}
    
    &nbsp;&nbsp;    <span className="detail-button">
    <Link to={{
    pathname: "/home/tvshows/details",
    state: {id: id,
      name: name,
      poster_path: poster_path, 
      overview: overview,
      vote_average: vote_average,
      original_language: original_language,
      first_air_date: first_air_date}
  }}>
  <button>Details</button>
  </Link></span>
</div>
                    
</div>
);
    
export default TvTopRatedHome;