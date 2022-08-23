import React from "react";

const Cards = ({data}) => {
    return <>

    <div className="card" style={{width: '18rem'}}>
        <img src={data.album.cover_medium} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{data.title}</h5>
            <p className="card-text">{data.album.title}</p>
            <audio controls>
                {/* <source src="horse.ogg" type="audio/ogg" /> */}
                <source src={data.preview} type="audio/mpeg" />
                Your browser does not support the audio tag.
            </audio>
        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
        </div>
    </div>

        {/* <div className="card">
            <img src={data.album.cover_medium} /> 
            
            <h2>Album: {data.album.title}</h2>
            <h3>{data.title}</h3>
        </div> */}
    </>
}

export default Cards;
