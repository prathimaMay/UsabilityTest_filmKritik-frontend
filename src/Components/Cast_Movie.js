//To retrieve Cast and Crew of the selected movie

import React from "react";

//const Img_API = "https://image.tmdb.org/t/p/w1280";
const Img_API = "https://image.tmdb.org/t/p/w600_and_h900_bestv2";

const CastMovie = ({ id, name, gender, profile_path, character}) => ( 

<div className='cast'>
<img src={Img_API + profile_path} alt={name} />  

<div className="cast-info">
  <h4>{name}</h4>
  <span>{character}</span>  
</div>
<div></div>
</div>     
);
    
export default CastMovie;