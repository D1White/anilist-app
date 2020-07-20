import React from "react";

import { Filter, AnimeBlock, LeftBar } from "../components";


function Lists({ user }) {
  return (
    <div className="main">
      <div className="container">
        <div className="mainBlocks">
          <LeftBar
            onClickItem={(name) => console.log(name)}
            lists={["Current", "Planning", "Completed", "Paused", "Dropped"]}
          />
          <div className="listBlock">
            <Filter />
            {user.current &&
              user.current.map((obj) => (
                <AnimeBlock
                  key={`${obj.animeId}_${obj.title}`}
                  {...obj}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lists;
