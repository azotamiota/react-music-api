import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

export const loadSongsAction = (band) => {

    // console.log('band in loadSongsAction prop: ', band)

    return async (dispatch) => {
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
                // console.log('songResults in async loadSongAction fn: ', songsResult)
                dispatch({type: "LOAD_RESULTS", payload: songsResult})
                
            } catch (error) {
                dispatch({type: "SET_ERROR", payload: err})

            }
            
        }

}

