//import axios from "axios";

import { getUser } from "../../api/api";

import { auth } from "../../firebase";

//const activeUser = 0;

export const setLoaded = (payload) => ({
  type: "SET_LOADED",
  payload,
});

export const fetchUser = (list, sortBy) => (dispatch) => {
  dispatch(setLoaded(false));

  auth.onAuthStateChanged((user) =>{

    if (user) {
      getUser().then(data => {
      
        dispatch(setUser(data.userInfo));
      });
    }

  })

  /*axios.get(`http://localhost:3001/user`).then(({ data }) => {
    dispatch(setUser(data[activeUser]));
    console.log(data[activeUser]);
  });*/
};

export const setUser = (user) => ({
  type: "SET_USER",
  payload: user,
});
