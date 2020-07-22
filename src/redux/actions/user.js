import axios from "axios";

const activeUser = 0;

export const setLoaded = (payload) => ({
  type: "SET_LOADED",
  payload,
});



export const fetchUser = () => (dispatch) => {
  dispatch(setLoaded(false));
  axios.get("http://localhost:3001/user").then(({ data }) => {
    dispatch(setUser(data[activeUser]));
  });
};

export const setUser = (user) => ({
  type: "SET_USER",
  payload: user,
});
