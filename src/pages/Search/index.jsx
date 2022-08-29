import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import SearchBar from "../../components/SearchBar"; 
import Cards from "../../components/Cards";
import store from "../../store";


const SearchResultCards = () => {
   
    const dispatch = useDispatch();
    const songs = useSelector(state => state.songs)
    const band = useSelector(state => state.band)
    const visibleRes = useSelector(state => state.visibleRes)
    console.log('songs in SearchResultCards: ', songs)
    // const [songs, setSongs] = useState([])

    // useEffect(() => {
    //     dispatch(loadSongsAction(band))
    // })

    // function handleSearch(userInput) {
    //     setBand(userInput)
    //     setVisibleRes(true)
    // }

    return <>
    
        <SearchBar />
        <div style={{display: visibleRes ? 'block' : 'none'}}>
        <h2>{songs ? 'Results for: '+ band.slice(0, 1).toUpperCase() + band.slice(1) : ''}</h2>
        <div id='result-container'>
            {songs ? songs.map(song => <Cards key={song.id} data={song}/>) : <h2>Searching...</h2>}
        </div>
        </div>
      
        
    </>

}

export default SearchResultCards;
