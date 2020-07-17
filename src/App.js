import React from 'react';

import logoSvg from './assets/img/AL_logo.svg';
import ava from './assets/img/zero_two.jpg';
import currentIco from './assets/img/icons/CurrentIco.svg';
import planningIco from './assets/img/icons/PlanningIco.svg';
import pausedIco from './assets/img/icons/PausedIco.svg';
import completedIco from './assets/img/icons/CompletedIco.svg';
import droppedIco from './assets/img/icons/DroppedIco.svg';
import logOutIco from './assets/img/icons/LogOutIco.svg';
import arrow from './assets/img/icons/Arrow.svg';

function App() {
  return (
    <div>
        <header>
        <div className="container">
          <div className="header">
            <div className="header__block">
              <div className="link">
                <img src={logoSvg} alt="logo" />
              </div>
              <span className="strongLogo">AniList</span>
            </div>

            <div className="header__block">
              <div className="search">
                <input
                  type="text"
                  name="search"
                  placeholder="Search anime"
                  className="inpSearch"
                />
              </div>
              <div className="link">
                <img src={ava} alt="avatar" className="minAva" />
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="main">
      <div className="container">
        <div className="mainBlocks">
          <div className="leftBar">
            <img
              src={ava}
              alt="avatar"
              className="leftBar__avatar"
            />
            <span className="userName">Makoto Shinkai</span>
            <span className="userMail">sanyapig@gmail.com</span>
            <ul className="listNav">
              <li className="listLink listLink_active">
                <div className="link">
                  <img src={currentIco} alt="" />
                  <span className="listLink__text">Current</span>
                </div>
              </li>
              <li className="listLink">
                <div className="link">
                  <img src={planningIco} alt="" />
                  <span className="listLink__text">Planning</span>
                </div>
              </li>
              <li className="listLink">
                <div className="link">
                  <img src={completedIco} alt="" />
                  <span className="listLink__text">Completed</span>
                </div>
              </li>
              <li className="listLink">
                <div className="link">
                  <img src={pausedIco} alt="" />
                  <span className="listLink__text">Paused</span>
                </div>
              </li>
              <li className="listLink">
                <div className="link">
                  <img src={droppedIco} alt="" />
                  <span className="listLink__text">Dropped</span>
                </div>
              </li>
            </ul>
            <div className="logOut">
              <div className="link">
                <img src={logOutIco} alt="" />
                <span className="logOut__text">Log out</span>
              </div>
            </div>
          </div>
          <div className="listBlock">
            <div className="filter">
              <div className="filter__block">
                <span className="filter__title">Search</span>
                <input
                  type="text"
                  name="search in list"
                  className="inpListSearch"
                />
              </div>
              <div className="filter__block">
                <span className="filter__title">Year</span>
                <input type="text" name="search in list" className="inpYear" />
              </div>

              <div className="season">
                <span className="filter__title">Season</span>
                <div className="sortBlock">
                  <div className="filter__popupClose">
                    <span>Any</span>
                    <img src={arrow} alt="" />
                  </div>
                </div>
                <div className="filter__popup popupSeason">
                  <ul>
                    <li className="filter__active">Winter</li>
                    <li>Spring</li>
                    <li>Summer</li>
                    <li>Autumn</li>
                  </ul>
                </div>
              </div>

              <div className="sort">
                <span className="filter__title">Sort by</span>
                <div className="sortBlock">
                  <div className="filter__popupClose">
                    <span>Name (a - z)</span>
                    <img src={arrow} alt="" />
                  </div>
                </div>
                <div className="filter__popup popupSort">
                  <ul>
                    <li className="filter__active">Name (a - z)</li>
                    <li>Name (z - a)</li>
                    <li>Date added</li>
                  </ul>
                </div>
              </div>
            </div>
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
                  <span className="anime__details"
                    >Shonen, Drama, Comedy, Sports, School Life
                  </span>
                </div>
                <span className="anime__description">
                  Inspired after watching a volleyball ace nicknamed "Little
                  Giant" in action, smallStatured Shouyou Hinata revives the
                  volleyball club at his middle school. The newly-formed team
                  even makes it to a tournament; however, their first match
                  turns out to be their last when they are brutally squashed by
                  the "King of the Court," Tobio Kageyama.
                </span>
              </div>
            </div>
            <hr />
            <div className="animeBlock">
              <img
                src="https:\/\/cdn.myanimelist.net\/images\/anime\/1026\/96247l.jpg"
                alt="Anime Picture"
                className="anime__picture"
              />
              <div className="anime__info">
                <h3 className="anime__title">Dororo</h3>
                <div className="anime__miniblock">
                  <h4 className="anime__subtitle">Season:</h4>
                  <span className="anime__details">Winter 2019</span>
                </div>
                <div className="anime__miniblock">
                  <h4 className="anime__subtitle">Genre:</h4>
                  <span className="anime__details"
                    >Shonen, Adventure, Fantasy, Demons, Action, Samurai,
                    Historical, Supernatural
                  </span>
                </div>
                <span className="anime__description">
                  Dororo, a young orphan thief, meets Hyakkimaru, a powerful
                  ronin. Hyakkimaru's father, a greedy feudal lord, had made a
                  pact with 12 demons, offering his yet-unborn son's body parts
                  in exchange for great power. Thus, Hyakkimaru - who was born
                  without arms, legs, eyes, ears, a nose or a mouth - was
                  abandoned in a river as a baby.
                </span>
              </div>
            </div>
            <hr />
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
                  <span className="anime__details"
                    >Shonen, Drama, Comedy, Sports, School Life
                  </span>
                </div>
                <span className="anime__description">
                  Inspired after watching a volleyball ace nicknamed "Little
                  Giant" in action, smallStatured Shouyou Hinata revives the
                  volleyball club at his middle school. The newly-formed team
                  even makes it to a tournament; however, their first match
                  turns out to be their last when they are brutally squashed by
                  the "King of the Court," Tobio Kageyama.
                </span>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
}

export default App;
