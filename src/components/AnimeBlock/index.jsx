import React from "react";
import { useDispatch } from "react-redux";
import {setAnimePage, setAnimePageDisplaed } from '../../redux/actions/animePage'

function AnimeBlock( { poster, names, season, genres, description, id } ) {

  const dispatch = useDispatch();

  const selectAnime = () => {
    dispatch(setAnimePage(id));
    dispatch(setAnimePageDisplaed(true));
  }

  const descrLength = () => {
    let desc = description;
    if (desc.length > 350) {
      /*desc = desc.slice(0, 350);
      desc = desc + '...';*/
      desc = desc.split(' ');
      desc.length = 61;
      desc = desc.join(' ')
      desc = desc + '...';
      return desc;
    }
    return description;
  }

  const seasonCheck = () => {
   if (season.season_string === null || season.season_string === "вечный") {
     return '';
   }
   return season.season_string;
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
            <span className="anime__details">{`${seasonCheck()} ${season.year}`}</span>
          </div>
          <div className="anime__miniblock">
            <h4 className="anime__subtitle">Genre:</h4>
            <span className="anime__details">
              {genres.join(', ')}
            </span>
          </div>
          <span className="anime__description">
            {descrLength()}
          </span>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default AnimeBlock;
