const initialState = {
  list: 0
};

const lists = (state = initialState, action) => {
  if (action.type === 'SET_LIST') {
    return {
      ...state,
      items: action.payload,
    };
  }
  return state;
};

export default lists;
