import React from "react";

import { getUser } from "../../api/api";

function AnimeBlock( { poster, names, season, genres, description } ) {

  const [visibleSubmenu, setVisibleSubmenu] = React.useState(false);
  const [animeUser, setAnimeUser] = React.useState([]);

  const aniblockRef = React.useRef();
  const toggleVisibleSubmenu = () => {
    setVisibleSubmenu(!visibleSubmenu);
  };

  const handleOutsideClick = (e) => {
    if (!e.path.includes(aniblockRef.current)) {
      setVisibleSubmenu(false);
    }
  };

  React.useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick);
  }, []);

  /*React.useEffect(() => {
    getUser().then(setAnimeUser);
    console.log(animeUser);
  }, []);*/

  return (
    <div>
      <div className="animeBlock">
        <img
          ref={aniblockRef}
          onClick={toggleVisibleSubmenu}
          src={`https://www.anilibria.tv/${poster.url}`}
          alt="Anime cover"
          className="anime__picture"
        />
        <ul className={`animeBlock-movie ${visibleSubmenu ? "animeBlock-movie-active" : ""}`}>
                <li>Planning</li>
                <li>Completed</li>
                <li>Paused</li>
                <li>Dropped</li>
                <li>Delete</li>
              </ul>
        <div className="anime__info">
        <h3 className="anime__title">{names.ru}</h3>
          <div className="anime__miniblock">
            <h4 className="anime__subtitle">Season:</h4>
            <span className="anime__details">{`${season.season_string} ${season.year}`}</span>
          </div>
          <div className="anime__miniblock">
            <h4 className="anime__subtitle">Genre:</h4>
            <span className="anime__details">
              {genres.join(', ')}
            </span>
          </div>
          <span className="anime__description">
            {description}
          </span>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default AnimeBlock;
