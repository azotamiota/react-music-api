import React from "react";
import { useSelector } from "react-redux";

import Cards from "../../components/Cards";

const Favourites = () => {

    const favourites = useSelector(state => state.favourites)

    return <>
        <div id='favourites'>
        <h1>Favourites</h1>
            <div id='result-container'>
                {favourites && favourites.map(song => <Cards key={song.id} data={song}/>)}
            </div>
        </div>
    </>
}

export default Favourites;
