import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleMovie } from '../mocks/movies';
//import { _videosService } from '../services/videosService';

const MovieDetail = () => {
  const params = useParams()
  const [movie, setMovie] = useState({})
  useEffect(function () {
    const getMovie = async (id) => {
      // const movie = await _videosService.getSingleVideo(id)
      const movie =  getSingleMovie(id)
      setMovie(movie)
    }
    getMovie(params.idMovie)
  }, [params.idMovie])

  if(movie.video_files) return (
    <div className="video-detail-container">
      
      <div>
      <p>Id: {movie.id}</p>
      <p>Name: {movie.user.name}</p>   
      <button>Añadir al carrito</button>
      </div>

      <video width="560" height="360" controls>
        <source src={movie.video_files[2].link} type="video/mp4"/>
      </video>
      
    </div>
  );
};

export default MovieDetail;