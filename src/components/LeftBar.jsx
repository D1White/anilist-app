import React from "react";

import ava from "../assets/img/zero_two.jpg";
/*import Current from "../assets/img/icons/CurrentIco.svg";
import PlanningIco from "../assets/img/icons/PlanningIco.svg";
import PausedIco from "../assets/img/icons/PausedIco.svg";
import CompletedIco from "../assets/img/icons/CompletedIco.svg";
import DroppedIco from "../assets/img/icons/DroppedIco.svg";*/
import logOutIco from "../assets/img/icons/LogOutIco.svg";

const LeftBar = React.memo(function LeftBar( { lists, onClickItem, avaImageUrl, name, mail } ) {
  const [activeItem, setActiveItem] = React.useState(0);

  const onSelectItem = (index) => {
    setActiveItem(index);
    onClickItem(index);
  };

  return (
    <div className="leftBar">
      <img src={ava} alt="avatar" className="leftBar__avatar" />
      <span className="userName">{name}</span>
      <span className="userMail">{mail}</span>
      <ul className="listNav">
        {lists &&
          lists.map((name, index) => (
            <li
              className={`liLink ${
                activeItem === index ? "liLink_active" : ""
              }`}
              onClick={() => onSelectItem(index)}
              key={`${name}_${index}`}
            >
              {name}
            </li>
          ))}
      </ul>
      <div className="logOut">
        <img src={logOutIco} alt="" />
        <span className="logOut__text">Log out</span>
      </div>
    </div>
  );
});

export default LeftBar;
