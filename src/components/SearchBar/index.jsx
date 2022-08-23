import React, {useState} from "react";

const SearchBar = ({handleUserInput}) => {

    const [inputValue, setInputValue] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        handleUserInput(inputValue)
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
