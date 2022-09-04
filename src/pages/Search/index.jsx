import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import SearchBar from "../../components/SearchBar"; 
import Cards from "../../components/Cards";
import { loadSongsAction } from "../../actions";

const SearchResultCards = () => {
   
    const songs = useSelector(state => state.songs)
    const band = useSelector(state => state.band)
    const visibleRes = useSelector(state => state.visibleRes)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadSongsAction(band))
    },[visibleRes])


    return <>
    
        <SearchBar />
        <div style={{display: visibleRes ? 'block' : 'none'}}>
            <h2>{songs ? 'Results for: '+ band.slice(0, 1).toUpperCase() + band.slice(1) : ''}</h2>
            <div className='result-container'>
                {songs ? songs.map(song => <Cards key={song.id} data={song}/>) : <h2>Searching...</h2>}
            </div>
        </div>
      
        
    </>

}

export default SearchResultCards;
