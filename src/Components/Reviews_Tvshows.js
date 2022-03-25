//Logic for the movie reviews page

import React, { useEffect, useState, useContext } from "react";
import { withRouter,useParams, useLocation, useHistory } from "react-router";
import Navbar from "./Navbar";
import ReviewCard from "./ReviewCard";
import Comments from "./Comments";

const Reviews_Tvshows = ({ props }) => {

    const location = useLocation();
    const [ reviews, setReviews ] = useState([]);
        console.log(location.state.id);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/tv/${location.state.id}/reviews?api_key=04c35731a5ee918f014970082a0088b1&language=en-US&page=1`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            console.log(location.state.id);
            setReviews(data.results);
        });
    }, []);

    return(    
        <div>
        <div>{<Navbar />}</div>
        <div>{<Comments />}</div>
        <div className='movie-container'>
        {reviews.length > 0 && reviews.slice(0,3).map((review) => 
            <ReviewCard key={review.id} {...review} />)}
     </div>
     </div>
    );

}

export default Reviews_Tvshows;