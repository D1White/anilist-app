const initialState = {
  items: [],
  isLoaded: false,
};

const user = (state = initialState, action) => {
  if (action.type === 'SET_USER') {
    return {
      ...state,
      items: action.payload,
    };
  }
  return state;
};

export default user;
