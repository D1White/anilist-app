const initialState = {
  items: [],
  isLoaded: false,
};

const anime = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ANIME":
      return {
        ...state,
        items: action.payload,
        isLoaded: true,
      };
    case "SET_LOADED_ANIME":
      return {
        ...state,
        isLoaded: action.payload,
      };
    default:
      return state;
  }
};

export default anime;
