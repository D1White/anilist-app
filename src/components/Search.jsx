import React from "react";

import axios from "axios";

function Search() {
  const [searchValue, setSearchValue] = React.useState("");
  const [searchArr, setSearchArr] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(`https://api.anilibria.tv/v2/searchTitles?search=${searchValue}`)
      .then(({ data }) => {
        setSearchArr(data);
      });
  }, [searchValue]);

  return (
    <div className="search">
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        type="text"
        name="search"
        placeholder="Search anime"
        className="inpSearch"
      />
      <ul
        className={
          searchValue.length <= 2
            ? "search-popup"
            : "search-popup search-popup-active"
        }
      >
        {searchArr.map((obj) => (
          <li key={obj.id}>{obj.names.en}</li>
        ))}
      </ul>
    </div>
  );
}

export default Search;
