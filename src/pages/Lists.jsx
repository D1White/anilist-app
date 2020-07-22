import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Filter, AnimeBlock, LeftBar, AnimeLoadingBlock } from "../components";

import { setLists } from "../redux/actions/lists";
import { fetchUser } from "../redux/actions/user";

const listsNames = ["Current", "Planning", "Completed", "Paused", "Dropped"];

function Lists() {
  const dispatch = useDispatch();
  const user = useSelector(({ user }) => user.items);
  const isLoaded = useSelector(({ user }) => user.isLoaded);
  const list = useSelector(({ lists }) => lists.list);

  React.useEffect(() => {
    dispatch(fetchUser());
  }, [list]);

  const onSelectList = React.useCallback(
    (index) => {
      dispatch(setLists(index));
    },
    []
  );

  return (
    <div className="main">
      <div className="container">
        <div className="mainBlocks">
          <LeftBar
            activeList={list}
            onClickList={onSelectList}
            lists={listsNames}
            {...user}
          />
          <div className="listBlock">
            <Filter />
            {isLoaded
              ? user.current.map((obj) => (
                  <AnimeBlock
                    key={`${obj.animeId}_${obj.title}`}
                    isLoading={true}
                    {...obj}
                  />
                ))
              : Array(2)
                  .fill(0)
                  .map((_, index) => <AnimeLoadingBlock key={index} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lists;
