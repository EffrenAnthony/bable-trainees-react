import React, { Fragment } from 'react';

const Header = () => {
  return (
    <Fragment>
      <header>
        <div className="header">
          <div className="header__left">
            <h1>Algun titulo</h1>
            <button>Ver peli</button>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;