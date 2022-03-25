//Logic for Glocal context in local storage

import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';

//initial state

//localStorage.getItem('watchlist') ? JSON.parse(localStorage.getItem('watchlist')) :

const initialState = {
    watchlist: localStorage.getItem('watchlist') ? JSON.parse(localStorage.getItem('watchlist')) : [],
    watched: localStorage.getItem('watched') ? JSON.parse(localStorage.getItem('watched')) : [],
};

//create context

export const GlobalContext = createContext(initialState);

//provider components
export const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // useEffect(() => {
    //     localStorage.clear();
    // }, [state])

useEffect(() => {
    localStorage.setItem('watchlist', JSON.stringify(state.watchlist));
    localStorage.setItem('watched', JSON.stringify(state.watched));
}, [state]);


    //actions
    const addMovieToWatchList = (movie) => {
        dispatch({type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
        alert('Movie added to your watchlist');
    }

    const removeMovieFromWatchlist = (id) => {
        dispatch({type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id});
    }

    return(
        <GlobalContext.Provider value={{watchlist: state.watchlist, watched: state.watched, 
        addMovieToWatchList, removeMovieFromWatchlist,}}>
            {props.children}
        </GlobalContext.Provider>
    );
}