import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleMovie } from '../mocks/movies';
// import { _videosService } from '../services/videosService';

const MovieDetail = () => {
  const params = useParams()
  const [movie, setMovie] = useState({})
  useEffect(function () {
    const getMovie = async (id) => {
      // const movie = await _videosService.getSingleVideo(id)
      const movie = getSingleMovie(id)
      setMovie(movie)
    }
    getMovie(params.idMovie)
  }, [params.idMovie])
  return (
    <div>
      {movie.id}
      <button>Añadir al carrito</button>
    </div>
  );
};

export default MovieDetail;