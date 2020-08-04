import React from "react";

import axios from "axios";

import { addAnime } from "../api/api";

import { fetchAnime } from "../redux/actions/anime";
import { useDispatch } from "react-redux";


function Search() {
  const [searchValue, setSearchValue] = React.useState("");
  const [searchArr, setSearchArr] = React.useState([]);
  const [animeChangedId, setanimeChangedId] = React.useState(null);

  const dispatch = useDispatch();

  React.useEffect(() => {
    axios
      .get(`https://api.anilibria.tv/v2/searchTitles?search=${searchValue}`)
      .then(({ data }) => {
        setSearchArr(data);
      });
  }, [searchValue]);


  React.useEffect(() => {
    if (animeChangedId) {
      addAnime("0", "0", animeChangedId);
      console.log(animeChangedId);
      setTimeout(() => {
        console.log('Time');
        dispatch(fetchAnime(0, 0));
      }, 100);
      
      
    }
  }, [animeChangedId]);


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
          <li
            key={obj.id}
            onClick={ () => {
              setanimeChangedId(obj.id);
              setSearchValue("");
            }}>
            {obj.names.en}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Search;
