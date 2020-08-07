const initialState = {
  animeId: null,
  isDisplayed: false,
};

const animePage = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ANIMEPAGE":
      return {
        ...state,
        animeId: action.payload,
      };
    case "SET_ANIMEPAGE_DISPLAYED":
      return {
        ...state,
        isDisplayed: action.payload,
      };
    default:
      return state;
  }
};

export default animePage;