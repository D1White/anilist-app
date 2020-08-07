import React from "react";

import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import { AnimeLoadingPage } from "../index";
import { setAnimePageDisplaed } from "../../redux/actions/animePage";

function AnimePage() {
  const dispatch = useDispatch();

  const animePage = useSelector(({ animePage }) => animePage);
  const [animeInfo, setAnimeInfo] = React.useState({});

  const listsNames = ["Current", "Planning", "Completed", "Paused", "Dropped"];
  const [activeList, setActiveList] = React.useState(null);

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
  }, []);

  return (
    <div className="popup-blackout">
      <div className="container">
        <div className="anime-popup">
          <span className="anime-popup__close" onClick={HideBlock}>
            &times;
          </span>
          {!Object.keys(animeInfo).length == 0 ? (
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
          ) : (
            <AnimeLoadingPage />
          )}

          <hr />

          <ul className="anime-popup__list">
            {listsNames && listsNames.map((name, index) => (
              <li className={`list__button ${
                activeList === index ? "list__button-active" : ""
              }`}
              onClick={() => onSelectList(index)}
              key={`${name}_${index}`}>
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AnimePage;
