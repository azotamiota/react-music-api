import React from "react";

const Cards = ({data}) => {
    return <>
        <div className="card">
            <img src={data.album.cover_medium} />
            <h2>Album: {data.album.title}</h2>
            <h3>{data.title}</h3>
        </div>
    </>
}

export default Cards;
