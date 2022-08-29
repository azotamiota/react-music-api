import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";

import { loadSongsAction } from "../../actions";

const SearchBar = () => {


    const inputValue = useSelector(state => state.inputValue)
    const band = useSelector(state => state.band)
    const state = useSelector(state => {console.log('state print 1: ', state); return state})
    const dispatch = useDispatch();
    
    useEffect(() => {
        console.log('band before dispatch loadSongsAction: ', band)
        dispatch(loadSongsAction(band))
    },[inputValue])


    function handleSubmit(e) {
        e.preventDefault()
        console.log('state before dispatching anything in loadSongsAction: ', state)
        dispatch({type: "SUBMIT_INPUT", payload: inputValue})
        dispatch({type: "SEARCHBOX_VISIBILITY_ON"})
    }

    function handleInput(e) {
        const newInput = e.target.value
        dispatch({type: "UPDATE_INPUT", payload: newInput})
    }

    return <>
    <form onSubmit={handleSubmit}>
    <label><h3>Find an artist</h3></label><br></br>
        <input type='text' id='input-field' onChange={handleInput} value={inputValue}/>
        <input type='submit' value='Go!'/>
    </form>
    
    </>

}

export default SearchBar
