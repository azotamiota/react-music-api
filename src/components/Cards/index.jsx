import React from "react";

const Cards = ({data}) => {
    return <>
        <img src={data.album.cover_medium} />
        <h2>Album: {data.album.title}</h2>
        <h3>{data.title}</h3>
    </>
}

export default Cards;
