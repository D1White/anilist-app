import React from "react";

import axios from "axios";

import { useDispatch } from "react-redux";

import { addAnime, getUser } from "../api/api";

import { fetchAnime } from "../redux/actions/anime";

import {setAnimePage, setAnimePageDisplaed } from '../redux/actions/animePage'



function Search() {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = React.useState("");
  const [searchArr, setSearchArr] = React.useState([]);
  const [animeChangedId, setanimeChangedId] = React.useState(null);
  const [animeList, setAnimeList] = React.useState({});

  /*const animePage = useSelector(({ animePage }) => animePage);*/

  

  

  React.useEffect(() => {
    axios
      .get(`https://api.anilibria.tv/v2/searchTitles?search=${searchValue}`)
      .then(({ data }) => {
        setSearchArr(data);
      });
  }, [searchValue]);



  React.useEffect(() => {
    if (animeChangedId) {
     /* addAnime("0", "0", animeChangedId);
      console.log(animeChangedId);
      getUser().then(setAnimeList);*/
      dispatch(setAnimePage(animeChangedId));
      dispatch(setAnimePageDisplaed(true));
      

    }
  }, [animeChangedId]);

  React.useEffect(() => {

    dispatch(fetchAnime(0, 0));

  }, [animeList]);


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
