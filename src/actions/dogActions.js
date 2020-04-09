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

const removedDog = dog => {
    return {
        type: 'REMOVED_DOG',
        payload: dog
    }
}

const addedDog = dog => {
    return {
        type: 'ADDED_DOG',
        payload: dog
    }
}


// Async Actions

export const getAllDogs = () => {
    return (dispatch) => {
        dispatch({type: 'FETCHING_DOGS'})
        return fetch('https://random.dog/doggos')
        .then(res => res.json())
        .then(dogs => {
            let mutatedDogs = dogs.filter(d => d.toLowerCase().endsWith('.jpg')).map((d,idx) => ({url: d, id: idx }))
            return dispatch(setAllDogs(mutatedDogs))
        })
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

export const addDog = (dog) =>{
    return (dispatch) => {
        return fetch('http://localhost:3001/dogs', {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({dog: dog})
          })
        .then(res => res.json())
        .then(dog => dispatch(addedDog(dog)))
    }

}

export const removeDog = (dog) =>{
    return (dispatch) => {
        return fetch(`http://localhost:3001/dogs/${dog.id}`, {method: 'delete'})
        .then(res => res.json())
        .then(dispatch(removedDog(dog)))
    }

}






