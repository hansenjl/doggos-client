import React from 'react'
import {connect} from 'react-redux'
import Dog from '../components/Dog'


class DogsContainer extends React.Component {


    render(){
        return(
            <div>
                {this.props.loading ? <p>LOADING PUPPERS...</p> : this.props.dogs.slice(0,30).map(d => <Dog url={d} />)}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
      dogs: state.dogReducer.dogs,
      loading: state.dogReducer.loading
    }
  }


export default connect(mapStateToProps)(DogsContainer)