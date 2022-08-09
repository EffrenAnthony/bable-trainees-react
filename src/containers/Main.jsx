import React from 'react';
import Header from '../components/Header';
import MoviesList from '../components/MoviesList';

const Main = () => {
  return (
    <div>
      <Header></Header>
      <section className="movies-type">
        <h2 className="movies-type__title">Documentales recientes</h2>
      </section>
      <section className="movies-collection">
        <MoviesList />
      </section>
      <section className="movies-type">
        <h2 className="movies-type__title">Ciencia y ficción</h2>
      </section>
      <section className="movies-collection">
        <MoviesList />
      </section>
      {/* <button onClick={incrementar}>Increase</button>
        <p style={{ color: 'white' }}>{amount}</p>
        <p style={{ color: 'white' }}>{amount + amount2}</p> */}
    </div>
  );
};

export default Main;