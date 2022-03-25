//This file holds the logic of calling all Movie Genre components

import React from 'react';
import Navbar from '../Components/Navbar';
import MovieGenreAction from './MovieGenre_Action';
import MovieGenreAdventure from './MovieGenre_Adventure';
import MovieGenreThriller from './MovieGenre_Thriller';
import MovieGenreComedy from './MovieGenre_Comedy';
import MovieGenreHorror from './MovieGenre_Horror';
import MovieGenreRomance from './MovieGenre_Romance';

class MovieGenres extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div>
            <div className='navbar-style'>
        <Navbar />
            </div>
            <div>
                <h2>Action Movies</h2>
                <MovieGenreAction />
            </div>
            <div>
                <h2>Adventure Movies</h2>
                <MovieGenreAdventure />
            </div>
            <div>
                <h2>Thriller Movies</h2>
                <MovieGenreThriller />
            </div>
            <div>
                <h2>Comedy Movies</h2>
                <MovieGenreComedy />
            </div>
            <div>
                <h2>Horror Movies</h2>
                <MovieGenreHorror />
            </div>
            <div>
                <h2>Romance</h2>
                <MovieGenreRomance />
            </div>
            
        </div>
        );
    }
}

export default MovieGenres;