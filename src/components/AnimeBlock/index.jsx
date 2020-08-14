import React from "react";
import { useDispatch } from "react-redux";
import {setAnimePage, setAnimePageDisplaed } from '../../redux/actions/animePage'

function AnimeBlock( { image_url, title, aired, genres, synopsis, mal_id } ) {

  const dispatch = useDispatch();

  const selectAnime = () => {
    dispatch(setAnimePage(mal_id));
    dispatch(setAnimePageDisplaed(true));
  }

  const descrLength = () => {
    let desc = synopsis;
    if (desc.length > 350) {
      /*desc = desc.slice(0, 350);
      desc = desc + '...';*/
      desc = desc.split(' ');
      desc.length = 57;
      desc = desc.join(' ')
      desc = desc + '...';
      return desc;
    }
    return synopsis;
  }

  /*const seasonCheck = () => {
   if (season.season_string === null || season.season_string === "вечный") {
     return '';
   }
   return season.season_string;
  }*/

  const genresFormation = () => {
    const genresArr = [];

    genres.map((obj) => {
      genresArr.push(obj.name)
    })

    return genresArr.join(', ')
  }

  const seasonFormation = () => {
    switch (aired.prop.from.month) {
      case 1:
      case 11:
      case 12:
        return `Winter ${aired.prop.from.year}` 
        break;
      case 2:
      case 3:
      case 4:
        return `Spring ${aired.prop.from.year}` 
        break; 
      case 5:
      case 6:
      case 7:
        return `Summer ${aired.prop.from.year}` 
        break;
      case 8:
      case 9:
      case 10:
        return `Autumn ${aired.prop.from.year}` 
         break;
      default:
        return aired.prop.from.year
        break;
    }
  }

  return (
    <div>
      <div className="animeBlock" onClick={selectAnime}>
        <img
          src={image_url}
          alt="Anime cover"
          className="anime__picture"
        />
        <div className="anime__info">
        <h3 className="anime__title">{title}</h3>
          <div className="anime__miniblock">
            <h4 className="anime__subtitle">Season:</h4>
            <span className="anime__details">{seasonFormation()}</span>
          </div>
          <div className="anime__miniblock">
            <h4 className="anime__subtitle">Genre:</h4>
            <span className="anime__details">
              {genresFormation()}
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
