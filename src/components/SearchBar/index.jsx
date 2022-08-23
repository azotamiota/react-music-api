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
        <input type='text' id='input-field' onChange={handleInput} value={inputValue}/>
        <input type='submit' value='Metal!'/>
    </form>
    
    </>

}

export default SearchBar
