import React, { useEffect, useState } from 'react'
import './App.css';
import Movie from './components/Movie'

const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_IMDB_API_KEY}&page=1`

console.log(FEATURED_API)

function App() {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(FEATURED_API)
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        setMovies(data.results);
      })
  }, []);

  return (
    <div className='movie-container'>
      {movies.length > 0 && movies.map((movie) =>
        <Movie key={movie.id} {...movie} />)}
    </div>
  );
}

export default App;
