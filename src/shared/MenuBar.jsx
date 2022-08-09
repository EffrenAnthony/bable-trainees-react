import React from 'react';
import { Link } from 'react-router-dom';

const MenuBar = ({ inicio, contactanos, perfil, lang, toggleLang }) => {
  return (
    <>
      <menu>
        <nav className="navbar">
          <img
            alt='alt text'
            src="https://static.rfstat.com/renderforest/images/v2/landing-pics/logo-animation/banner-video.png" className="navbar__logo" />
          <ul>
            <li className="navbar__item">
              <button onClick={toggleLang}>{lang === 'EN' ? 'EN' : 'ES'}</button>
            </li>
            <Link className="navbar__item" to='/'>{inicio}</Link>
            <Link className="navbar__item" to='/contact'>{contactanos}</Link>
            <Link className="navbar__item" to='/profile'>{perfil}</Link>
          </ul>
        </nav>
      </menu>
    </>
  );
};

export default MenuBar;

