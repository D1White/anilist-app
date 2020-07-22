import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Filter, AnimeBlock, LeftBar } from "../components";
import { setLists } from "../redux/actions/lists";

const listsNames = ["Current", "Planning", "Completed", "Paused", "Dropped"];

function Lists() {
  const dispatch = useDispatch();
  const user = useSelector(({ user }) => user.items);

  const onSelectList = React.useCallback((index) => {
    dispatch(setLists(index));
  }, []);

  return (
    <div className="main">
      <div className="container">
        <div className="mainBlocks">
          <LeftBar onClickItem={onSelectList} lists={listsNames} {...user} />
          <div className="listBlock">
            <Filter />
            {user.current &&
              user.current.map((obj) => (
                <AnimeBlock key={`${obj.animeId}_${obj.title}`} {...obj} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lists;
