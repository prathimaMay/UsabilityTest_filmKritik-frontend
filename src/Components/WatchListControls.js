// logic for removing selected movie/tv show from watchlist

import React, {useContext} from 'react';
import WatchList from './WatchList';
import { GlobalContext } from './WatchList_State';

export const WatchListControls = ({location, type}) => {

    console.log(location.state.id);

    const {removeMovieFromWatchlist} = useContext(GlobalContext);
    return(
        <div>
            {type === 'watchlist' && (
                <div>
                {/* <button>
                    <i className="fa-fw far fa-eye"></i>Watched
                </button> */}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={() => removeMovieFromWatchlist(location.id)}>
                    <i className="fa-fw far fa-times"></i>Remove
                </button>
                </div>
            )}
        </div>
    )
}