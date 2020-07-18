import React from "react";



import { Header, Filter, AnimeBlock, LeftBar } from "./components";

function App() {
  return (
    <div>
      <Header />
      <div className="main">
        <div className="container">
          <div className="mainBlocks">
           <LeftBar onClickItem={(name) => console.log(name)}
                    lists={['Current', 'Planning', 'Completed', 'Paused', 'Dropped']}
            />
            <div className="listBlock">
              <Filter />
              <AnimeBlock />
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
                    <span className="anime__details">
                      Shonen, Adventure, Fantasy, Demons, Action, Samurai,
                      Historical, Supernatural
                    </span>
                  </div>
                  <span className="anime__description">
                    Dororo, a young orphan thief, meets Hyakkimaru, a powerful
                    ronin. Hyakkimaru's father, a greedy feudal lord, had made a
                    pact with 12 demons, offering his yet-unborn son's body
                    parts in exchange for great power. Thus, Hyakkimaru - who
                    was born without arms, legs, eyes, ears, a nose or a mouth -
                    was abandoned in a river as a baby.
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
                    <span className="anime__details">
                      Shonen, Drama, Comedy, Sports, School Life
                    </span>
                  </div>
                  <span className="anime__description">
                    Inspired after watching a volleyball ace nicknamed "Little
                    Giant" in action, smallStatured Shouyou Hinata revives the
                    volleyball club at his middle school. The newly-formed team
                    even makes it to a tournament; however, their first match
                    turns out to be their last when they are brutally squashed
                    by the "King of the Court," Tobio Kageyama.
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
