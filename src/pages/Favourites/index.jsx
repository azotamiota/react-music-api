import React from "react";
import { useSelector } from "react-redux";

import Cards from "../../components/Cards";
import './style.css'

const Favourites = () => {

    const favourites = useSelector(state => state.favourites)

    return <>
        <div  id='favourites'>
            <h3>Favourites</h3>
            <div id='result-container'>
                {favourites && favourites.map(song => <Cards key={song.id} data={song}/>)}
            </div>
        </div>
    </>
}

export default Favourites;
