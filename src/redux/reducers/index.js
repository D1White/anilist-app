import { combineReducers } from 'redux';

import filtersReducer from './filters';
import listsReducer from './lists';
import animeReducer from './anime';
import userReducer from './user';

const rootReducer = combineReducers({
  filters: filtersReducer,
  lists: listsReducer,
  anime: animeReducer,
  user: userReducer,
});

export default rootReducer;