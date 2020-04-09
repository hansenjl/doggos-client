import React from 'react'

function Dog(props){
    return(
        <div className="centering">
            <div className="dog-image">
            <img src={`http://random.dog/${props.url}`}></img>
            </div>
        </div>
    )

}


export default Dog