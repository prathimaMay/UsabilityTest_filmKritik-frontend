//Logic for SearchBar button in the application Navbar 

import React, { useEffect, useState, Component } from "react";
import { Button, Input, Space } from 'antd';
import PopularPeople from '../NavLink_Components/PopularPeople';
import { Link } from 'react-router-dom';
import MovieGenres from "../NavLink_Components/MovieGenresPage";
import TvShowGenres from "../NavLink_Components/TvShowGenresPage";
import SearchMulti from "./SearchMulti";
import Navbar from "../Components/Navbar";
import { withRouter,useParams, useLocation, useHistory } from "react-router";
import {setCookieRate, getCookieRate } from '../Cookies';


const SEARCH_API = "https://api.themoviedb.org/3/search/multi?api_key=04c35731a5ee918f014970082a0088b1&language=en-US&page=1&include_adult=false&query=";

function SearchBar() {
      
    //const location = useLocation();
    // const history = useHistory();
    // // props.history.replace(props.location.pathname, state)

    const { Search } = Input;
    const onSearch = value => console.log(value);
    const [searchTerm, setSearchTerm]= useState('');
    const [movies, setMovies]= useState([]);

 
        var RMovies = getCookieRate('ratedMovies');
        if(RMovies)
        {
var new_rating = RMovies[RMovies.length-1];
var movie_id = RMovies.substring(0,RMovies.length-1);
var x = JSON.parse(new_rating);
    }


      const handleOnSubmit = (e) => {
        //e.preventDefault();
        if(searchTerm) {

        fetch(SEARCH_API + searchTerm)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setMovies(data.results);
           console.log(data.results.length);
           if (data.results.length==0) {
            alert("No results found");
        }
        });
        
        // setSearchTerm('');
        }

        else {
            alert("Enter the Search Term");
        }
    };

    const handleOnChange = (e) => {
        setSearchTerm(e.target.value);
    };
    

    return (
        <div>
        {/* <div>
            <Navbar />
        </div> */}

<div className="topnav-right"> 
                    
                    <Space direction="vertical">
                       
                        <Search className="search-bar1" placeholder="Search for a movie, tv show, person..." value={searchTerm} 
                                onChange={handleOnChange}
                                onSearch={handleOnSubmit}
                                enterButton/> 
                                 
                        </Space>

                        <Link to="/home">
                        <Button type="button" className="home-button">Back to Home</Button>
                        </Link>
                
                        </div> 
                        <div className='movie-container'>
                        {movies.length > 0 && movies.slice(0,10).map((movie) => 
                    <SearchMulti key={movie.id} {...movie} movie_id={movie_id} new_rating={new_rating} />)}       
             </div></div>
    );
    }

export default SearchBar;