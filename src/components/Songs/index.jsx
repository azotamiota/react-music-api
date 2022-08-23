import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../SearchBar"; 
import Cards from "../Cards";

const Songs = () => {
   
    const [band, setBand] = useState('tankcsapda')
    const [songs, setSongs] = useState([])

    useEffect(() => {
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
                console.log('.env: ', import.meta.env.VITE_API_KEY)
                console.log('songs at line 25: ', songsResult)
                setSongs(songsResult)
            } catch (error) {
                console.log('Error while fetching data: ', error);
            }
            
        }
        searchBand()
    }, [band])

    function handleSearch(userInput) {
        setBand(userInput)
    }

    return <>
    
        <h3>Find a band</h3>
        <SearchBar handleUserInput={handleSearch}/>
        <div id='result-container'>
            {songs.map(song => <Cards key={song.id} data={song} />)}
        </div>
      
        
    </>

}

export default Songs;
