import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { setSortBy } from "../redux/actions/filters";
import Popup from "./Popup";

const Filter = React.memo(function Filter() {
  const dispatch = useDispatch();
  const sortBy = useSelector(({ filters }) => filters.sortBy);

  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  const sortByItems = [
    { name: "Name (a - z)", type: "name (a-z)" },
    { name: "Name (z - a)", type: "name (z-a)" },
    { name: "Date added", type: "date" },
  ];

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
        activeSortType={sortBy}
        title={"Sort by"}
        items={sortByItems}
        onClickSortType={onSelectSortType}
      />
    </div>
  );
});

export default Filter;
