const initialState = {
  sortBy: 'name (a-z)',
  sortSeason:'any',
  sortYear:'',
  sortSearch:''
};

const filters = (state = initialState, action) => {
  if (action.type === 'SET_SORT_BY') {
    return {
      ...state,
      sortBy: action.payload,
    };
  }
  if (action.type === 'SET_SORT_SEASON') {
    return {
      ...state,
      sortSeason: action.payload,
    };
  }
  if (action.type === 'SET_SORT_YEAR') {
    return {
      ...state,
      sortYear: action.payload,
    };
  }
  if (action.type === 'SET_SORT_SEARCH') {
    return {
      ...state,
      sortSearch  : action.payload,
    };
  }
  return state;
};

export default filters;