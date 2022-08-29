
const initialStore = {
    inputValue: '',
    band: '',
    songs: [],
    visibleRes: false,
    favourites: [],
    error: ''
    
}

const reducer = (state = initialStore, action) => {
    if (action.type === "UPDATE_INPUT") {
        return {
            ...state,
            inputValue: action.payload
        }
    }

    if (action.type === "SUBMIT_INPUT") {
        return {
            ...state,
            band: action.payload
        }
    }

    if (action.type === "LOAD_RESULTS") {
        return {
            ...state,
            songs: action.payload
        }
    }

    if (action.type === 'SET_ERROR') {

        return {
           ...state,
           error: action.payload
        }
    }

    if (action.type === "SEARCHBOX_VISIBILITY_ON") {
        return {
            ...state,
            visibleRes: true
        }
    }


    return state
}

export default reducer
