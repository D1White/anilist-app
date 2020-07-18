import React from "react";

import arrow from '../assets/img/icons/Arrow.svg';

function Filter() {
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

      <div className="season">
        <span className="filter__title">Season</span>
        <div className="sortBlock">
          <div className="filter__popupClose">
            <span>Any</span>
            <img src={arrow} alt="" />
          </div>
        </div>
        <div className="filter__popup popupSeason">
          <ul>
            <li className="filter__active">Winter</li>
            <li>Spring</li>
            <li>Summer</li>
            <li>Autumn</li>
          </ul>
        </div>
      </div>

      <div className="sort">
        <span className="filter__title">Sort by</span>
        <div className="sortBlock">
          <div className="filter__popupClose">
            <span>Name (a - z)</span>
            <img src={arrow} alt="" />
          </div>
        </div>
        <div className="filter__popup popupSort">
          <ul>
            <li className="filter__active">Name (a - z)</li>
            <li>Name (z - a)</li>
            <li>Date added</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Filter;
