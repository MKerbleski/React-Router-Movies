import React, { Component } from 'react';
import {  Route } from "react-router-dom";


import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    savedList.push(movie);
    this.setState({ savedList });
  };

  render() {
    // console.log(this.addToSavedList)
    return (
      <div>
        <SavedList list={this.state.savedList}  />
        <Route path="/movies/:id" 
        // component={Movie} 
        render={(props) => <Movie {...props} addToSavedList={this.addToSavedList} /> }
      />
        
        <Route exact path="/" component={MovieList} />
      </div>
    );
  }
}
