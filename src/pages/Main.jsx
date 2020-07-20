import React from "react";
import { Link } from "react-router-dom";

import ZeroTwo from "../assets/img/zeroTwoMin.png";


function Main() {
  return (
    <div className="start-page">
      <div className="container">
        <div className="start-page__content">
          <div className="start-page__text">
            <h1>A new level of anime listings</h1>
            <h3>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              vitae accusantium neque explicabo eos quam fugiat sint earum
              molestiae, quo animi corporis eum, magni aliquid, ad recusandae.
              Placeat, excepturi ipsa!
            </h3>
            <Link to="/">
              <button className="start-page__button">Create a list</button>
            </Link>
          </div>
          <img src={ZeroTwo} alt="Zero Two" className="start-page__img" />
        </div>
      </div>
    </div>
  );
}

export default Main;
