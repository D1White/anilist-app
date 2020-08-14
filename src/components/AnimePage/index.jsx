import React from "react";

import { useSelector, useDispatch } from "react-redux";

import axios from "axios";
import jikanjs from 'jikanjs'

import { AnimeLoadingPage } from "../index";
import { setAnimePageDisplaed } from "../../redux/actions/animePage";

import { getUser, transferAnime, addAnime, deleteAnime } from "../../api/api";

import { auth } from "../../firebase";

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

  const userId = useSelector(({ user }) => user.items.id);

  const onSelectList = React.useCallback((index) => {
    setActiveList(index);
  }, []);

  const HideBlock = () => {
    dispatch(setAnimePageDisplaed(false));
  };

  React.useEffect(() => {
    jikanjs.loadAnime(animePage.animeId)
      .then( (data) => {
        setAnimeInfo(data);
      });

      if (userId) {
        getUser(userId).then(setAnimeList);
      }else {
        setIsLoad(true);
      }

    
  }, []);

  React.useEffect(() => {
    for (const key in animeList) {
      if (Array.isArray(animeList[key])) {
        if (animeList[key].indexOf(animeInfo.mal_id) >= 0) {
          setActiveList(key);
        }
      }
      setIsLoad(true);

      //!Object.keys(animeInfo).length == 0 (для проверки ниже)
    }
  }, [animeList]);

  const listButton = (index) => {
    onSelectList(index);

    if (activeList === -1) {
      addAnime(index, animeInfo.mal_id, onList);
    } else {
      transferAnime(animeInfo.mal_id, +activeList, index);
    }
  };

  const genresFormation = () => {
    const genresArr = [];

    animeInfo.genres.map((obj) => {
      genresArr.push(obj.name)
    })

    return genresArr.join(', ')
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
                  src={animeInfo.image_url}
                  className="anime-popup__picture"
                  alt="Anime cover"
                />
                <div className="anime-popup__text">
                  <h1>{animeInfo.title}</h1>

                  <div className="anime-popup__miniblock">
                    <h4 className="anime-popup__subtitle">Season:</h4>
                    <span className="anime-popup__details">{animeInfo.aired.string}</span>
                  </div>
                  <div className="anime-popup__miniblock">
                    <h4 className="anime-popup__subtitle">Genre:</h4>
                    <span className="anime-popup__details">
                      {genresFormation()}
                    </span>
                  </div>
                  <span className="anime-popup__description">
                    {animeInfo.synopsis}
                  </span>
                </div>
              </div>

              {auth.currentUser && (
                <div>
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
                    <li className="list__button-del">
                      <img
                        className="del-button"
                        onClick={() => deleteAnime(animeInfo.mal_id, +activeList)}
                        src={delIco}
                        alt="delete icon"
                      />
                    </li>
                  </ul>
                </div>
              )}
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
