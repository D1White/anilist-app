import React from "react";

import { useDispatch } from "react-redux";

import { addAnime, getUser } from "../api/api";

import { fetchAnime } from "../redux/actions/anime";

import {setAnimePage, setAnimePageDisplaed } from '../redux/actions/animePage'

import jikanjs from 'jikanjs'




function Search() {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = React.useState("");
  const [searchArr, setSearchArr] = React.useState([]);
  const [animeChangedId, setanimeChangedId] = React.useState(null);
  const [animeList, setAnimeList] = React.useState({});

  /*const animePage = useSelector(({ animePage }) => animePage);*/

  

  

  React.useEffect(() => {
    if (searchValue.length > 2) {
      jikanjs.search('anime', searchValue)
      .then(( data ) => {
        if (data.results.length > 5) {
          data.results.length = 5;
        }
        setSearchArr(data.results);
      });
    }
  }, [searchValue]);



  React.useEffect(() => {
    if (animeChangedId) {
     /* addAnime("0", "0", animeChangedId);
      console.log(animeChangedId);
      getUser().then(setAnimeList);*/
      dispatch(setAnimePage(animeChangedId));
      dispatch(setAnimePageDisplaed(true));
      setanimeChangedId(null);
      

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
          searchValue.length < 3
            ? "search-popup"
            : "search-popup search-popup-active"
        }
      >
        {searchArr.map((obj) => (
          <li
            key={obj.mal_id}
            onClick={ () => {
              setanimeChangedId(obj.mal_id);
              setSearchValue("");
            }}>
            {obj.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Search;
