const initialState = {
  list: 0
};

const lists = (state = initialState, action) => {
  if (action.type === 'SET_LIST') {
    return {
      ...state,
      list: action.payload,
    };
  }
  return state;
};

export default lists;
