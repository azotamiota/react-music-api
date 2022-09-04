import React, { useState } from "react";
import { useDispatch } from "react-redux";

const SearchBar = () => {


    const [inputValue, setInputValue] = useState('')
    const dispatch = useDispatch();
    
    function handleSubmit(e) {
        e.preventDefault()
        dispatch({type: "CLEAR_RESULTS"})
        dispatch({type: "SUBMIT_INPUT", payload: inputValue})
        dispatch({type: "SEARCHBOX_VISIBILITY_ON"})
        setInputValue('')
    }

    function handleInput(e) {
        const newInput = e.target.value
       setInputValue(newInput)
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
