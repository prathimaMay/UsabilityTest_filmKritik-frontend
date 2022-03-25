//This file provides details of the Tvshow selected when the user clicks on the Details button on the Tvshow tile

import React, { useEffect, useState, useContext } from "react";
import '../index.css';
import Navbar from "./Navbar";
import { GlobalContext } from "./WatchList_State";
import { withRouter,useParams, useLocation, useHistory } from "react-router";
import CastTvshow from "./Cast_Tvshow";

import { Container, Radio, Rating } from "./RatingStyles";
import {setCookie, getCookie } from '../Cookies.js';
import {setCookieRate, getCookieRate } from '../Cookies.js';
import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import { Button } from "antd";


const Img_API = "https://image.tmdb.org/t/p/w1280";


const TvShowDetails = (props) => {

    const [ isWatched , setWatchDisable] = useState(false);

const location = useLocation();
const [ isLiked , setLikeDisable] = useState(false);


const [ cred, setCred ] = useState([]);

const [rate, setRate] = useState(0);

const onLikeTvShowClick = (movie) => {
    var filterMovie = {
        id: movie.id,
        name: movie.title,
        imgPath: movie.poster_path
    }
    var lMovies = getCookie('likedTvShows');
    var x = JSON.parse(lMovies);
    if(x)
    {
        x.push(filterMovie);
    }
    else
    {
        x = [filterMovie]
    }
    setCookie('likedTvShows', JSON.stringify(x), 5);
    setLikeDisable(true);

    var hist  = getCookie('fhistory');
    var t = JSON.parse(hist);
    
    var hh = {
        id: movie.id,
        action_description: "User liked the TV show: " + movie.title,
        action_date: new Date(Date.now())
    }
    if(t)
    {
        t.push(hh)
    }
    else
    {
        t = [hh]
    }
    setCookie('fhistory', JSON.stringify(t), 5);

}

const onWatchClick = (movie) => {
    var filterMovie = {
        id: movie.id,
        name: movie.title,
        imgPath: movie.poster_path
    }
    var lMovies = getCookie('watchList');
    var x = JSON.parse(lMovies);
    if(x)
    {
        x.push(filterMovie);
    }
    else
    {
        x = [filterMovie]
    }
    setCookie('watchList', JSON.stringify(x), 5);
    setWatchDisable(true);

    var hist  = getCookie('fhistory');
    var t = JSON.parse(hist);
    var hh = {
        id: movie.id,
        action_description: "User added movie to watch list: " + movie.title,
        action_date: new Date(Date.now())
    }
    if(t)
    {
        t.push(hh)
    }
    else
    {
        t = [hh]
    }
    setCookie('fhistory', JSON.stringify(t), 5);

}

    
    useEffect(() => {
        // fetch('http://localhost:8080/movie/+{location.state.id}+?api_key=04c35731a5ee918f014970082a0088b1&append_to_response=credits')
        fetch(`https://api.themoviedb.org/3/tv/${location.state.id}/credits?api_key=04c35731a5ee918f014970082a0088b1&language=en-US`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setCred(data.cast);
        });

        var l = getCookie('likedTvShows');
        if(l)
        {
            var li = JSON.parse(l);
            var x = li.filter(function(p) { 
                return p.id == location.state.id 
              })
              if(x && x.length > 0)
              {
                  setLikeDisable(true);
              }
        }
    }, []);

    const { addMovieToWatchList, watchlist} = useContext(GlobalContext);

    let storedMovie = watchlist.find(o => o.id === location.state.id);
console.log(storedMovie);

const watchListDisabled = storedMovie ? true : false;
console.log(watchListDisabled);
  console.log(props);
    return (
        <div>
        <div>
            <Navbar />
        </div>
        <div >
            <div id="Menu" class="shortcut_bar_wrapper">
                {/* <ul className="MovieMenu">
                    <li >
                        <button className="MovieMenuButton">
                            overview
                        </button>
                        <button className="MovieMenuButton">
                            fandom
                        </button>
                        <button className="MovieMenuButton">
                            media
                        </button>
                        <button className="MovieMenuButton">
                            cast
                        </button>
                    </li>
                </ul> */}
            </div>
            <div className="MovieDetails">
                <div className="MoviePhoto">
                    {console.log("Hi")}
                    {console.log(location.state.name)}
                
                <img src={Img_API + location.state.poster_path} alt={location.state.name} />
                <div className="movie-info">
                <h3>Original Language: {location.state.original_language}</h3>  
                <span>{parseFloat(location.state.vote_average + (rate/10))}</span>                </div>
                <div>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<Button type="primary" className="like-button" onClick={() => onLikeTvShowClick(location.state)}
                disabled={isLiked}
                >
                            Like
                        </Button>
                </div>
                </div>
                <div >
                    <div style={{paddingLeft:"50px"}}>
                        <div>
                         <h2><label style={{fontWeight:"bolder"}}>{location.state.name}</label></h2>
                        </div>
                        <div>
                        <h3><b>Release Date:</b>  &nbsp;&nbsp;&nbsp;{location.state.first_air_date
                        }</h3>
                        </div>
                        <div class="shortcut_bar_wrapper" style={{display:"flex"}}>
                        <ul className="MovieMenu">
                    <li >

                    <Container>
	{[...Array(5)].map((item, index) => {
		const givenRating = index + 1;
		return (
		<label>
			<Radio
			type="radio"
			value={givenRating}
			onClick={() => {
				setRate(givenRating);
				alert(`Are you sure you want to give ${givenRating} stars ?`);
				console.log({givenRating});
                console.log(location.state.id);

                setCookieRate('ratedMovies', JSON.stringify(location.state.id), JSON.stringify(givenRating), 2);
			}
			}
			/>
			<Rating>
			<FaStar
				color={
				givenRating < rate || givenRating === rate
					? "rgb(255,215,0)"
					: "rgb(192,192,192)"
				}
			/>
			</Rating>
		</label>
		);
	})}
	</Container>
    <Button type="primary" className="like-button" onClick={() => onWatchClick(location.state)}
                disabled={isWatched}
                >
                            Add to WatchList
                        </Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to= {{
                            pathname: "/home/tvshows/details/reviews",
                            state: {id: location.state.id,
                            name: location.state.name,
                            poster_path: location.state.poster_path, 
                            vote_average: location.state.vote_average
                            }
                            }}>
                         <button>
                            Review
                        </button>
                        </Link>      
                    </li>
                </ul>
                </div>
                <div className="overview">
                    <p><h2>Overview</h2></p><br></br>
                    <p>{location.state.overview}</p>
                </div>
                <div>
                <h3>CAST:</h3><br></br>
                {/* <ul className="imag">
                    <li><img className="img" src=""></img></li>
                <li><img className="img" src=""></img></li>
                <li><img className="img" src=""></img></li>
                <li><img className="img" src=""></img></li>
                <li><img className="img" src=""></img></li>
                <li><img className="img" src=""></img></li>
                </ul> */}
                {cred.length >0 && cred.slice(0,5).map((casts) => 
                <CastTvshow key={casts.id} {...casts} />)}                 
                </div>
                    </div>
                    
                </div>
                
            </div>
            
            
        </div>
        </div>
        
    );
}

export default TvShowDetails;