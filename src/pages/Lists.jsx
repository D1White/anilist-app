import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Filter, AnimeBlock, LeftBar, AnimeLoadingBlock } from "../components";

import { setLists } from "../redux/actions/lists";
import { fetchUser } from "../redux/actions/user";
import { fetchAnime } from "../redux/actions/anime";

const listsNames = ["Current", "Planning", "Completed", "Paused", "Dropped"];

function Lists() {
  const dispatch = useDispatch();
  const user = useSelector(({ user }) => user.items);
  const isLoaded = useSelector(({ user }) => user.isLoaded);

  const anime = useSelector(({ anime }) => anime.items);
  const animeIsLoaded = useSelector(({ anime }) => anime.isLoaded);

  const list = useSelector(({ lists }) => lists.list);
  const sortBy = useSelector(({ filters }) => filters.sortBy);

  



  React.useEffect(() => {
    dispatch(fetchUser(list, sortBy));
    dispatch(fetchAnime(list, sortBy));
  }, [list, sortBy]);

  const onSelectList = React.useCallback((index) => {
    dispatch(setLists(index));
  }, []);

  return (

    <div className="main">
      <div className="container">
        <div className="mainBlocks">
          <LeftBar
            activeList={list}
            onClickList={onSelectList}
            lists={listsNames}
            isLoaded={true}
            {...user}
          />
          <div className="listBlock">
            <Filter />
            {animeIsLoaded
              ? anime.map((obj) => (
                
                  <AnimeBlock
                    key={obj.code}
                    animeIsLoaded={true}
                    {...obj}
                  />
                ))
              : Array(3)
                  .fill(0)
                  .map((_, index) => <AnimeLoadingBlock key={index} />)}
          </div>
        </div>
      </div>
    </div>
  
  );
}

export default Lists;
