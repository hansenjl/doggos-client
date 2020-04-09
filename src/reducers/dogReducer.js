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
        case 'ADDED_DOG':
            let idx = state.dogs.findIndex((dog) => {return action.payload.url === dog.url})

            return{
                ...state,
                favorites: state.favorites.concat(action.payload),
                dogs: [...state.dogs.slice(0,idx), ...state.dogs.slice(idx+1, state.dogs.length+1)]
            }
        case 'REMOVED_DOG':
            let id = state.favorites.findIndex((dog) => {return action.payload.id === dog.id})
            return {
                ...state,
                dogs: state.dogs.concat(action.payload),
                favorites: [...state.favorites.slice(0,id), ...state.favorites.slice(id+1, state.favorites.length+1)]
            }
        default:
            return state
    }
}
 
export default dogReducer


