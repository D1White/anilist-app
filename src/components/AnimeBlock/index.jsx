import React from "react";
import { useDispatch } from "react-redux";
import {setAnimePage, setAnimePageDisplaed } from '../../redux/actions/animePage'

function AnimeBlock( { poster, names, season, genres, description, id } ) {

  const dispatch = useDispatch();

  const selectAnime = () => {
    dispatch(setAnimePage(id));
    dispatch(setAnimePageDisplaed(true));
  }

  return (
    <div>
      <div className="animeBlock" onClick={selectAnime}>
        <img
          src={`https://www.anilibria.tv/${poster.url}`}
          alt="Anime cover"
          className="anime__picture"
        />
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
