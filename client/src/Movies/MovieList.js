import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import MovieCard from './MovieCard';

export default class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/movies')
      .then(response => {
        this.setState(() => ({ movies: response.data }));
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }

  render(props) {
    // console.log(props)
    return (
      <div className="movie-list">
        <h1>All Movies</h1>
        {this.state.movies.map(movie => (
          <Link key={movie.id} to={`/movies/${movie.id}`}>
            <MovieDetails key={movie.id} movie={movie} />
          </Link>
        ))}
      </div>
    );
  }
}

function MovieDetails({ movie }) {
  // const { title, director, metascore, stars } = movie; 
  // console.log(movie)
  return (
    <div>
      <MovieCard movie={movie}/>
    </div>
  );
}
