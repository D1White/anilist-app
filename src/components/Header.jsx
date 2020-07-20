import React from "react";

import logoSvg from "../assets/img/AL_logo.svg";
import ava from "../assets/img/zero_two.jpg";

import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="container">
        <div className="header">
          <Link to="/main">
            <div className="header__block">
              <div className="link">
                <img src={logoSvg} alt="logo" />
              </div>
              <span className="strongLogo">AniList</span>
            </div>
          </Link>

          <div className="header__block">
            <div className="search">
              <input
                type="text"
                name="search"
                placeholder="Search anime"
                className="inpSearch"
              />
            </div>
            <Link to="/">
              <div className="link">
                <img src={ava} alt="avatar" className="minAva" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
