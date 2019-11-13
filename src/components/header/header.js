import React from 'react';

import './header.css';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div className="header">
      <div className="header__inner">
        <div className='logo-name'>
          <Link to="/" className='header__link link'>StarDB</Link>

        </div>
        <nav className="menu-top">
          <span className="menu-top__item">
            <Link to="/people" className="menu-top__link link">People</Link>
          </span>
          <span className="menu-top__item">
             <Link to="/planets" className="menu-top__link link">Planets</Link>
          </span>
          <span className="menu-top__item">
             <Link to="/starships" className="menu-top__link link">Starships</Link>
        </span>
        </nav>
      </div>
    </div>
  );
};

export default Header;