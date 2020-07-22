const initialState = {
  anime: [],
  isLoaded: false,
};

const anime = (state = initialState, action) => {
  if (action.type === 'SET_ANIME') {
    return {
      ...state,
      items: action.payload,
    };
  }
  return state;
};

export default anime;
