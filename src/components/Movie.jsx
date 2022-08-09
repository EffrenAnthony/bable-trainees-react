import React from 'react';
import { Link } from 'react-router-dom';

const Movie = ({ id, image, user: { name }, duration }) => {
  return (
    <div className="movies-collection__card">
      <img
        alt="movie"
        className="movies-collection__card--image"
        src={image}
      />
      <div className="movies-collection__card--info">
        <p className="movies-collection__card--info-title" style={{ marginBottom: '0px' }}>{id}</p>
        <p className="movies-collection__card--info-prota" style={{ marginBottom: '0px' }}>{name}</p>
        <p className="movies-collection__card--info-duration" style={{ marginBottom: '0px' }}>{duration} seg</p>
        <div className="movies-collection__card--info-actions">
          <a href="#1" target='_blank' data-bs-toggle="modal" data-bs-target={`#modal${id}`}><i className="fa-solid fa-play"></i></a>
          <Link to={`/movie/${id}`}>
            <i className="fa-solid fa-thumbs-up"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Movie;