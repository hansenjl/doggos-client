import React from 'react';
import './App.css';
import {  Switch, Link, Route } from 'react-router-dom'
import DogsContainer from './containers/DogsContainer'
import FavDogsContainer from './containers/FavDogsContainer'
import {getAllDogs} from "./actions/dogActions"
import {connect} from 'react-redux'


class App extends React.Component {
  componentDidMount(){
    this.props.getAllDogs()
    //fetch dogs and set laoding as true while fetching dogs
  }

  render(){
    return (

        <div className="App">
          <header className="App-header">
            <p>
              <button><Link to="/faves">Favorite Doggos</Link></button>
              <button><Link to="/">All Doggos</Link></button>
            </p>
          </header>
          <Switch>
            <Route exact path="/faves"><FavDogsContainer/></Route>
            <Route exact path="/"><DogsContainer/></Route>
          </Switch>

        </div>

    );
  }
}





export default connect(null,{getAllDogs})(App);
