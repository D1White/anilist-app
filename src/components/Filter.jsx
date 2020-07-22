import React from "react";

import Popup from "./Popup";

const Filter = React.memo(function Filter() {
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
        items={[
          { name: "Name (a - z)", type: "name (a-z)" },
          { name: "Name (z - a)", type: "name (z-a)" },
          { name: "Date added", type: "date" },
        ]}
      />
    </div>
  );
});

export default Filter;
