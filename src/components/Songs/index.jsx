import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../SearchBar"; 
import Cards from "../Cards";

const Songs = () => {
   
    const [band, setBand] = useState('')
    const [songs, setSongs] = useState([])
    const [visibleRes, setVisibleRes] = useState(false)

    useEffect(() => {
        if (band) {
        const searchBand = async () => {
            const options = {
                method: 'GET',
                 url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
                params: {q: `${band}`},
                headers: {
                    'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
                    'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
                }
            };

            try {
                const bands = await axios.request(options)
                const songsResult = await bands.data.data
                await console.log('songs at line 25: ', bands.data.data)
                
                setSongs(songsResult)
                
            } catch (error) {
                console.log('Error while fetching data: ', error);
            }
            
        }
        searchBand()
    }
}, [band])

function handleSearch(userInput) {
        setBand(userInput)
        setVisibleRes(true)
    }

    return <>
    
        <SearchBar handleUserInput={handleSearch}/>
        <div style={{display: visibleRes ? 'block' : 'none'}}>
        <h2>{songs.length ? 'Results for: '+ band.slice(0, 1).toUpperCase() + band.slice(1) : ''}</h2>
        <div id='result-container'>
            {/* {songs[0] == 'i' && <h2>Searching...</h2>} */}
            {songs.length ? songs.map(song => <Cards key={song.id} data={song}/>) : <h2>Searching...</h2>}
        </div>
        </div>
      
        
    </>

}

export default Songs;
