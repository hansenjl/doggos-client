const dogReducer = (state = {dogs:[], favorites: [], loading: false}, action) => {
    switch(action.type){
        case 'FETCHING_DOGS':
            return {...state, loading: true}

        case 'FAVORITE_DOGS_LOADED':
            return {
                ...state,
                favorites: action.payload,
                loading: false
            }
        case 'ALL_DOGS_LOADED':
            return {
                ...state,
                dogs: action.payload,
                loading: false
            }
        default:
            return state
    }
}

export default dogReducer


