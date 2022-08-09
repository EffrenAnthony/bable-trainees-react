import React, { useEffect, useState } from 'react';
import { movies as moviesList } from '../mocks/movies';
import Movie from './Movie';

const MoviesList = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    async function getMovies() {
      // const movies = await _videosService.getVideosAsyncAwait(20)
      const moviesMock = moviesList.videos
      setMovies(moviesMock)
    }
    getMovies()
  }, [movies.videos])
  return (
    <>
      {
        movies.map((movie, key) => (
          <Movie {...movie} key={key} />
        ))
      }
    </>
  );
};

export default MoviesList;