import React from "react";

import { auth } from '../firebase';
import { Redirect } from "react-router-dom";

import { SignInPopup } from "../components";

import ZeroTwo from "../assets/img/zeroTwoMin.png";



function Main() {

  const [signInVisible, setSignInVisible] = React.useState(false);

  const displaySignInPopup = () => {
      setSignInVisible(true); 
  }

  const closeSignInPopup = () => {
    setSignInVisible(false);
  }

  return (
    <div className="start-page">
      {signInVisible && auth.currentUser && <Redirect to={"/lists"} />}
      {signInVisible && <SignInPopup onClickClosePopup={closeSignInPopup} />}
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

            <button className="start-page__button" onClick={displaySignInPopup} >Create a list</button>
          </div>
          <img src={ZeroTwo} alt="Zero Two" className="start-page__img" />
        </div>
      </div>
    </div>
  );
}

export default Main;
