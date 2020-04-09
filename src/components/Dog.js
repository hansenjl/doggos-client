import React from 'react'

function Dog(props){
    return(
        <div className="centering">
            <div className="dog-image">
                { props.likes ? <h3>Likes: {props.likes}</h3> : null}

            <img src={`http://random.dog/${props.url}`}></img>
            </div>
        </div>
    )

}


export default Dog