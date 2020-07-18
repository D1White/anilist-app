import React from 'react';

import logoSvg from '../assets/img/AL_logo.svg';
import ava from '../assets/img/zero_two.jpg';

function Header() {
  return(
    <header>
        <div className="container">
          <div className="header">
            <div className="header__block">
              <div className="link">
                <img src={logoSvg} alt="logo" />
              </div>
              <span className="strongLogo">AniList</span>
            </div>

            <div className="header__block">
              <div className="search">
                <input
                  type="text"
                  name="search"
                  placeholder="Search anime"
                  className="inpSearch"
                />
              </div>
              <div className="link">
                <img src={ava} alt="avatar" className="minAva" />
              </div>
            </div>
          </div>
        </div>
      </header>
  );
}


export default Header;