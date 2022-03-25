//Displaying details of Popular people when the user clicks on People link in Navbar

import React from "react";
import { Link } from 'react-router-dom';

const Img_API = "https://image.tmdb.org/t/p/w600_and_h900_bestv2";


const PopularPeopleDetails = ({ id, name, profile_path, popularity, known_for_department }) => ( 
        
<div className='movie'>
<img src={Img_API + profile_path} alt={name} />   
<div className="movie-info">
  <h3>{name}</h3>
  <span>{popularity}</span>
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
    </Link></span>
    </div></div>
);
    
export default PopularPeopleDetails;