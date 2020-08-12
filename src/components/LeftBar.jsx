import React from "react";

import { auth } from '../firebase';
import { Redirect } from "react-router-dom";

import ava from "../assets/img/zero_two.jpg";
/*import Current from "../assets/img/icons/CurrentIco.svg";
import PlanningIco from "../assets/img/icons/PlanningIco.svg";
import PausedIco from "../assets/img/icons/PausedIco.svg";
import CompletedIco from "../assets/img/icons/CompletedIco.svg";
import DroppedIco from "../assets/img/icons/DroppedIco.svg";*/
import logOutIco from "../assets/img/icons/LogOutIco.svg";

const LeftBar = React.memo(function LeftBar( { activeList ,lists, onClickList, avaImageUrl, name, mail } ) {

  const [signedOut, setSignedOut] = React.useState(false)

  const signOut = () => {
    auth.signOut();
    setSignedOut(true);

  }


  return (
    <div className="leftBar">
      {signedOut  && <Redirect to={"/"} />}
      <img src={avaImageUrl ? avaImageUrl : ava} alt="avatar" className="leftBar__avatar" />
      <span className="userName">{name === null ? name : 'Anime Lover'}</span>
      <span className="userMail">{mail}</span>
      <ul className="listNav">
        {lists &&
          lists.map((name, index) => (
            <li
              className={`liLink ${
                activeList === index ? "liLink_active" : ""
              }`}
              onClick={() => onClickList(index)}
              key={`${name}_${index}`}
            >
              {name}
            </li>
          ))}
      </ul>
      <div className="logOut" onClick={signOut}>
        <img src={logOutIco} alt="Log Out" />
        <span className="logOut__text">Log out</span>
      </div>
    </div>
  );
});

export default LeftBar;
