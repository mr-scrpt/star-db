import React from 'react';

import './header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="header__inner">
                <div className='logo-name'>
                    <a href="#/" className='header__link link'>
                        StarDB
                    </a>
                </div>
                <nav className="menu-top">
                    <span className="menu-top__item">
                        <a href="#/people" className="menu-top__link link">People</a>
                    </span>
                    <span className="menu-top__item">
                        <a href="#/planets" className="menu-top__link link">Planets</a>
                    </span>
                    <span className="menu-top__item">
                        <a href="#/starships" className="menu-top__link link">Starships</a>
                    </span>
                </nav>
            </div>
        </div>
    );
};

export default Header;