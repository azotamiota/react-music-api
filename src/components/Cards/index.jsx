import React, {useEffect, useState} from "react";

const Cards = ({data}) => {

    const [liked, setLiked] = useState(false)
    const [isPlaying, setIsPlaying] = useState(false)
    const [background, setBackground] = useState({})
    const [backgroundEffect, setBackgroundEffect] = useState('')
    
    useEffect(() => {
      
        if (isPlaying) {
            console.log('isPlaying should be true: ', isPlaying)
            setBackgroundEffect(setInterval(() => {
                setBackground({backgroundColor: `rgb(${[Math.ceil(Math.random() * 255), Math.ceil(Math.random() * 255), Math.ceil(Math.random() * 255)]})`})
            }, 1000))

        } else {
            console.log('isPlaying shoudl be false: ', isPlaying)
            clearInterval(backgroundEffect)
            setBackground({backgroundColor: "white"})
        }

    }, [isPlaying])


    return <>

    <div className="card" style={{width: '18rem'}}>
        <img src={data.album.cover_medium} className="card-img-top" alt="..." />
            <h5 className="card-title">Album: {data.album.title}</h5>
        <div className="card-body" style={background}>
            <p className="card-text">{data.title}</p>
            
                <audio controls 
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}>
                    <source src={data.preview} type="audio/mpeg" />
                    Your browser does not support the audio tag.
                </audio>
          
        <a href={data.artist.link} target='blank' className="btn btn-secondary">{data.artist.name}</a>
        </div>
        <a onClick={() => {liked ? setLiked(false) : setLiked(true)}} className="like-btn">{liked ? '❤️' : '🖤'}</a>
    </div>

    </>
}

export default Cards;
