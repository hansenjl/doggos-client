import React from 'react'
import {connect} from 'react-redux'
import Dog from '../components/Dog'
import {getFavoriteDogs} from "../actions/dogActions"


class FavDogsContainer extends React.Component {

    componentDidMount(){
        this.props.getFavoriteDogs()
        //fetch dogs and set laoding as true while fetching dogs
    }


    render(){
        return(
            <div>
                {this.props.loading ? <p>LOADING YOUR FAVORITE PUPPERS...</p> : this.props.dogs.map(d => <Dog url={d.url} likes={d.likes}/>)}
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return{
      dogs: state.dogReducer.favorites,
      loading: state.dogReducer.loading
    }
  }


export default connect(mapStateToProps, {getFavoriteDogs})(FavDogsContainer)