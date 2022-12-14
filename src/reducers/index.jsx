
const initialStore = {
    band: '',
    songs: [],
    visibleRes: false,
    favourites: [],
    error: ''
    
}

const reducer = (state = initialStore, action) => {
    if (action.type === "CLEAR_RESULTS") {
        return {
            ...state,
            songs: []
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
            songs: action.payload ? action.payload : []
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

    if (action.type === "ADD_FAVOURITES") {
        return {
            ...state,
            favourites: [...state.favourites, action.payload]
        }
    }

    if (action.type === "REMOVE_FAVOURITES") {
        return {
            ...state,
            favourites: state.favourites.filter(song => song.id !== action.payload)
        }
    }


    return state
}

export default reducer
