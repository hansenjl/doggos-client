// Action Creators sent to the reducer

const setFavoriteDogs = dogs => {
    return {
        type: 'FAVORITE_DOGS_LOADED',
        payload: dogs
    }
}

const setAllDogs = dogs => {
    return {
        type: 'ALL_DOGS_LOADED',
        payload: dogs
    }
}


// Async Actions

export const getAllDogs = () => {
    return (dispatch) => {
        dispatch({type: 'FETCHING_DOGS'})
        return fetch('https://random.dog/doggos')
        .then(res => res.json())
        .then(dogs => dispatch(setAllDogs(dogs.filter(d => d.toLowerCase().endsWith('.jpg')))))
    }
}

export const getFavoriteDogs = () => {
    return (dispatch) => {
        dispatch({type: 'FETCHING_DOGS'})
        return fetch('http://localhost:3001/dogs.json')
        .then(res => res.json())
        .then(dogs => dispatch(setFavoriteDogs(dogs)))
    }
}







