import React from "react";

import Popup from "./Popup";

function Filter() {
  const [visibleSeasonPopup, setvisibleSeasonPopup] = React.useState(false);

  const toggleSeasonPopup = () => {
    setvisibleSeasonPopup(!visibleSeasonPopup);
  };

  return (
    <div className="filter">
      <div className="filter__block">
        <span className="filter__title">Search</span>
        <input type="text" name="search in list" className="inpListSearch" />
      </div>
      <div className="filter__block">
        <span className="filter__title">Year</span>
        <input type="text" name="search in list" className="inpYear" />
      </div>

      <Popup
        title={"Season"}
        items={["Any", "Winter", "Spring", "Summer", "Autumn"]}
      />

      <Popup
        title={"Sort by"}
        items={["Name (a - z)", "Name (z - a)", "Date added"]}
      />
    </div>
  );
}

export default Filter;
