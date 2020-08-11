import React from "react";

import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import { AnimeLoadingPage } from "../index";
import { setAnimePageDisplaed } from "../../redux/actions/animePage";

import { getUser, transferAnime, addAnime, deleteAnime } from "../../api/api";

import delIco from "../../assets/img/icons/trashAlt.svg";

function AnimePage() {
  const dispatch = useDispatch();

  const animePage = useSelector(({ animePage }) => animePage);
  const onList = useSelector(({ lists }) => lists.list);
  const [animeInfo, setAnimeInfo] = React.useState({});

  const listsNames = ["Current", "Planning", "Completed", "Paused", "Dropped"];
  const [activeList, setActiveList] = React.useState(-1);

  const [animeList, setAnimeList] = React.useState({});
  const [isLoad, setIsLoad] = React.useState(false);

  const onSelectList = React.useCallback((index) => {
    setActiveList(index);
  }, []);

  const HideBlock = () => {
    dispatch(setAnimePageDisplaed(false));
  };

  React.useEffect(() => {
    axios
      .get(`https://api.anilibria.tv/v2/getTitle?id=${animePage.animeId}`)
      .then(({ data }) => {
        setAnimeInfo(data);
      });

    getUser().then(setAnimeList);

  }, []);

  React.useEffect(() => {
    for (const key in animeList) {
      if (Array.isArray(animeList[key])) {
        if (animeList[key].indexOf(animeInfo.id) >= 0) {
          setActiveList(key);
        }  
      }
      setIsLoad(true);

      //!Object.keys(animeInfo).length == 0 (для проверки ниже)
    }
  }, [animeList]);

  const listButton = (index) => {
    console.log("index" ,index);
    onSelectList(index);

    if (activeList === -1) {
      addAnime(index, animeInfo.id, onList);
    }else{
      transferAnime(animeInfo.id, +activeList, index);
    }

  }

  return (
    <div className="popup-blackout"> 
      <div className="container">
        <div className="anime-popup">
          <span className="popup__close anime-page__close" onClick={HideBlock}>
            &times;
          </span>
          {!Object.keys(animeInfo).length == 0 && isLoad ? (
            <div>
              <div className="anime-popup__content">
                <img
                  src={`https://www.anilibria.tv${animeInfo.poster.url}`}
                  className="anime-popup__picture"
                  alt="Anime cover"
                />
                <div className="anime-popup__text">
                  <h1>{animeInfo.names.ru}</h1>

                  <div className="anime-popup__miniblock">
                    <h4 className="anime-popup__subtitle">Season:</h4>
                    <span className="anime-popup__details">{`${animeInfo.season.season_string} ${animeInfo.season.year}`}</span>
                  </div>
                  <div className="anime-popup__miniblock">
                    <h4 className="anime-popup__subtitle">Genre:</h4>
                    <span className="anime-popup__details">
                      {animeInfo.genres.join(", ")}
                    </span>
                  </div>
                  <span className="anime-popup__description">
                    {animeInfo.description}
                  </span>
                </div>
              </div>
              <hr />
              <ul className="anime-popup__list">
                {listsNames &&
                  listsNames.map((name, index) => (
                    <li
                      className={`list__button ${
                        +activeList === index ? "list__button-active" : ""
                      }`}
                      onClick={() => listButton(index)}
                      key={`${name}_${index}`}
                    >
                      {name}
                    </li>
                  ))}
                <li className="list__button-del"><img className="del-button" onClick={() => deleteAnime(animeInfo.id, +activeList)} src={delIco} alt="delete icon"/></li>
              </ul>
            </div>
          ) : (
            <AnimeLoadingPage />
          )}
        </div>
      </div>
    </div>
  );
}

export default AnimePage;
