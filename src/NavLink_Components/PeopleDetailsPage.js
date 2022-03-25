//When the user clicks on Details button on any Popular Person tile, this page renders display the person's details

import React from "react";
import { withRouter,useParams, useLocation, useHistory } from "react-router";

const Img_API = "https://image.tmdb.org/t/p/w600_and_h900_bestv2";


const PeopleDetailsPage = ({ id, name, profile_path, popularity, known_for_department }) => {

    const location = useLocation();

    return (
        <div >
            <div id="Menu" class="shortcut_bar_wrapper">
                {console.log(location.state.id)}
                {console.log(location.state.name)}
                {console.log(location)}
            </div>
            <div className="MovieDetails">
                <div className="MoviePhotoDiv">
                    <img className="MoviePhoto" src={Img_API + location.state.profile_path} alt={name}>
                    </img>
                </div>
                <div >
                    <div style={{paddingLeft:"50px"}}>
                        <div>
                         <h2><label style={{fontWeight:"bolder"}}>{location.state.name}</label></h2>
                        </div>
                        <div class="shortcut_bar_wrapper" style={{display:"flex"}}>
                        <ul className="MovieMenu"></ul>
                
                </div>
                <div className="overview">
                    <p><h2>Known for Department:</h2>&nbsp;{location.state.known_for_department}</p><br></br>

                </div>
                <div>
                <h3>Popularity:</h3><span>{location.state.popularity}</span>
                

                </div>
                    </div>
                    
                </div>
                
            </div>
            
            
        </div>
        
        
    );
}
    
export default PeopleDetailsPage;