import React from 'react'
import {connect} from 'react-redux'
import {addDog, removeDog} from '../actions/dogActions'

function Dog(props){

    const unFav = (e) => {

        let dog = {
            id: props.id,
            url: props.url
        }
        
        props.removeDog(dog)
    }

    const addFav = (e) => {
        let dog = {url: props.url}
        props.addDog(dog)
    }



    return(
        <div className="centering">
            <div className="dog-image">
                <img onClick={props.fav ? unFav : addFav} id={`dog-${props.id}`} src={`http://random.dog/${props.url}`} alt="cute doggo"></img>
            </div>
        </div>
    )

}


export default connect(null, {addDog, removeDog})(Dog)