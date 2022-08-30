import React, {useEffect, useState, useRef} from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Cards = ({data}) => {

    const dispatch = useDispatch()

    const liked = useRef(false)
    const [isPlaying, setIsPlaying] = useState(false)
    const [background, setBackground] = useState({})
    const [backgroundEffect, setBackgroundEffect] = useState('')

    // const saved = useSelector(state => state.favourites.some(song => song.id == data.id))

    
    useEffect(() => {
      
        if (isPlaying) {
            setBackgroundEffect(setInterval(() => {
                setBackground({backgroundColor: `rgb(${[Math.ceil(Math.random() * 255), Math.ceil(Math.random() * 255), Math.ceil(Math.random() * 255)]})`})
            }, 1000))

        } else {
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
          
        <Link to={data.artist.link} target='blank' className="btn btn-secondary">{data.artist.name}</Link>
        </div>
        <button onClick={() => {
            liked.current = !liked;
            console.log('data that will be sent to dispath ADD FAVOURITEs: ', data)
            dispatch({type: "ADD_FAVOURITES", payload: data})
        }} className="like-btn">{liked ? '❤️' : '🖤'}</button>
    </div>

    </>
}

export default Cards;
