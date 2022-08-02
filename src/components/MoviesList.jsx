import React, { useEffect, useState } from 'react';
import { _videosService } from '../services/videosService';
import Movie from './Movie';

const MoviesList = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    async function getMovies() {
      const movies = await _videosService.getVideosAsyncAwait(20)
      setMovies(movies)
    }
    getMovies()
  }, [])
  return (
    <>
      {
        movies.map(movie => (
          <Movie {...movie} />
        ))
      }
    </>
  );
};

export default MoviesList;