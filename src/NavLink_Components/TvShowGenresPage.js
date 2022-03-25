//This file holds the logic of calling all TV shows Genre components

import React from 'react';
import Navbar from '../Components/Navbar';
import TvGenreAct_Adv from './TvGenre_Action_Adv';
import TvGenreAnime from './TvGenre_Animation';
import TvGenreCrime from './TvGenre_Crime';
import TvGenreComedy from './TvGenre_Comedy';
import TvGenre_SciFi_Fant from './TvGenre_SciFi_Fantasy';
import TvGenreKids from './TvGenre_Kids';

class TvShowGenres extends React.Component {
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
                <h2>Action and Adventure</h2>
                <TvGenreAct_Adv />
            </div>
            <div>
                <h2>Animation</h2>
                <TvGenreAnime />
            </div>
            <div>
                <h2>Crime</h2>
                <TvGenreCrime />
            </div>
            <div>
                <h2>Comedy</h2>
                <TvGenreComedy />
            </div>
            <div>
                <h2>Sci-Fi and Fantasy</h2>
                <TvGenre_SciFi_Fant />
            </div>
            <div>
                <h2>Kids</h2>
                <TvGenreKids />
            </div>
            
        </div>
        );
    }
}

export default TvShowGenres;