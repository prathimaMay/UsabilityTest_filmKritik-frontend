//fetching watchlist array based on the movies or TV shows added to watchlist and sending the data to WatchlistCard for display

import React, { useContext } from "react";
import { GlobalContext } from "./WatchList_State";
import { WatchListControls } from "./WatchListControls";
import { WatchlistCard } from "./WatchList_Card";

const Img_API = "https://image.tmdb.org/t/p/w1280";

const WatchList = () => {

console.log("HI watchlist")
const { watchlist } = useContext(GlobalContext);
console.log(watchlist);

    return (        
        <div>
            <div>
                {watchlist.length > 0 ? (
                    <div className='movie-container'>
                        {watchlist.map((location) => (
                        <WatchlistCard location={location} type="watchlist" />
                    ))}</div>
                ) : (
                    <h2>No movies in your watchlist!</h2>
                )}</div></div>
                );
            }
            


export default WatchList;