import React from 'react';

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
            <li className="navbar__item">{inicio}</li>
            <li className="navbar__item">{contactanos}</li>
            <li className="navbar__item">{perfil}</li>
          </ul>
        </nav>
      </menu>
    </>
  );
};

export default MenuBar;

