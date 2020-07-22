import React from "react";

import arrow from "../assets/img/icons/Arrow.svg";

function Popup({ title, items }) {
  const [visiblePopup, setVisiblePopup] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState(0);
  const sortRef = React.useRef();
  const activeLabel = items[activeItem].name;

  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  };

  const handleOutsideClick = (e) => {
    if (!e.path.includes(sortRef.current)) {
      setVisiblePopup(false);
    }
  };

  const onSelectItem = (index) => {
    setActiveItem(index);
    setVisiblePopup(false);
  };

  React.useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick);
  }, []);

  return (
    <div ref={sortRef} className="sort">
      <span className="filter__title">{title}</span>
      <div onClick={toggleVisiblePopup} className="sortBlock">
        <div className="filter__popupClose">
          <span>{activeLabel}</span>
          <img className={visiblePopup ? "rotatedArrow" : ""} src={arrow} alt="" />
        </div>
      </div>
      {visiblePopup && (
        <div className="filter__popup">
          <ul>
            {items &&
              items.map((obj, index) => (
                <li
                  className={activeItem === index ? "filter__active" : ""}
                  onClick={() => onSelectItem(index)}
                  key={`${obj.type}_${index}`}
                >
                  {obj.name}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Popup;
