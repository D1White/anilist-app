import React from "react";

import arrow from "../assets/img/icons/Arrow.svg";

const Popup = React.memo(function Popup({
  title,
  items,
  activeSortType,
  onClickSortType,
}) {
  const [visiblePopup, setVisiblePopup] = React.useState(false);
  const sortRef = React.useRef();
  const activeLabel = items.find((obj) => obj.type === activeSortType).name;

  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  };

  const handleOutsideClick = (event) => { 
    const path = event.path || (event.composedPath && event.composedPath());
    if (!path.includes(sortRef.current)) {
      setVisiblePopup(false);
    }
  };

  const onSelectItem = (index) => {
    if (onClickSortType) {
      onClickSortType(index);
    }
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
          <img
            className={visiblePopup ? "rotatedArrow" : ""}
            src={arrow}
            alt=""
          />
        </div>
      </div>
      {visiblePopup && (
        <div className="filter__popup">
          <ul>
            {items &&
              items.map((obj, index) => (
                <li
                  onClick={() => onSelectItem(obj.type)}
                  className={
                    activeSortType === obj.type ? "filter__active" : ""
                  }
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
});


export default Popup;
