import React from "react";

function AnimeBlock() {
  return (
    <div>
      <div className="animeBlock">
        <img
          src="https://yummyanime.club/img/posters/1570882231.jpg"
          alt="Anime Picture"
          className="anime__picture"
        />
        <div className="anime__info">
          <h3 className="anime__title">Haikyuu!!</h3>
          <div className="anime__miniblock">
            <h4 className="anime__subtitle">Season:</h4>
            <span className="anime__details">Spring 2014</span>
          </div>
          <div className="anime__miniblock">
            <h4 className="anime__subtitle">Genre:</h4>
            <span className="anime__details">
              Shonen, Drama, Comedy, Sports, School Life
            </span>
          </div>
          <span className="anime__description">
            Inspired after watching a volleyball ace nicknamed "Little Giant" in
            action, smallStatured Shouyou Hinata revives the volleyball club at
            his middle school. The newly-formed team even makes it to a
            tournament; however, their first match turns out to be their last
            when they are brutally squashed by the "King of the Court," Tobio
            Kageyama.
          </span>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default AnimeBlock;
