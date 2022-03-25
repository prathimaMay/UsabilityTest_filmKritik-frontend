//Home Page display after Login

import React from 'react';
//import userService from './UserService';
//import AuthenticationLogin from './AuthenticationLogin';
import Popular from '../MovieCategories/Popular';
import Navbar from './Navbar.js';
import Trending from '../MovieCategories/Trending';
import TopRated from '../MovieCategories/TopRated';
import Upcoming from '../MovieCategories/Upcoming';
import NowPlaying from '../MovieCategories/NowPlaying';
import TopRatedTV from '../MovieCategories/TopRatedTV';
import PopularTV from '../MovieCategories/PopularTV';
import AiringTodayTV from '../MovieCategories/AiringTodayTV';
import OnTheAirTV from '../MovieCategories/OnTheAirTV';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
/*
        this.state = {
            currentUser: AuthenticationLogin.currentUserValue,
            users: null
        };
*/
    }
/*
    componentDidMount() {
        userService.getAll().then(users => this.setState({ users }));
    }
*/
    render() {
        //const { currentUser, users } = this.state;
        return (
        <div>
            <div className='navbar-style'>
        <Navbar />
            </div>
            <div>
                <p>You're logged into FilmKritik!!</p>     
            </div>
            <div>
                <h2>Popular Movies</h2>
                <Popular />
            </div>
            <div>
                <h2>Trending Movies</h2>
                <Trending />
            </div>
            <div>
                <h2>Top Rated Movies</h2>
                <TopRated />
            </div>
            <div>
                <h2>Upcoming Movies</h2>
                <Upcoming />
            </div>
            <div>
                <h2>Now Playing Movies</h2>
                <NowPlaying />
            </div>
            <div>
                <h2>Top Rated TV Shows</h2>
                <TopRatedTV />
            </div>
            <div>
                <h2>Popular TV Shows</h2>
                <PopularTV />
            </div>
            <div>
                <h2>On the Air TV Shows</h2>
                <OnTheAirTV />
            </div>
            <div>
                <h2>Airing Today TV Shows</h2>
                <AiringTodayTV />
            </div>
        </div>
        );
    }
}

export default HomePage;