
import axios from "axios";

import { getUser } from "../../api/api";

import { auth } from "../../firebase";



export const setLoadedAnime = (payload) => ({
  type: "SET_LOADED_ANIME",
  payload,
});



export const fetchAnime = (list, sortBy) => (dispatch) => {
  let arr = [];
  let oldAnime = [];

  dispatch(setLoadedAnime(false));

  auth.onAuthStateChanged((user) => {

    if (user) {

      getUser(user.uid).then(data => {
   
        if (data) {
          oldAnime = data[list];
        }

       if (oldAnime.length > 0) {
        oldAnime.map((obj) => {
          axios
            .get(`https://api.anilibria.tv/v2/getTitle?id=${obj}`)
            .then(({ data }) => {
              arr.push(data);
              
              if (oldAnime.length === arr.length) {
                dispatch(setAnime(arr));
              }
            });
        });
       }else {
        dispatch(setAnime([]));
       }
      });
    }

  })

  

  /*axios.get(`http://localhost:3001/${list}`).then(({ data }) => {
    oldAnime = data;

    oldAnime.map((obj) => {
      axios
        .get(`https://api.anilibria.tv/v2/getTitle?id=${obj}`)
        .then(({ data }) => {
          arr.push(data);
          if (oldAnime.length === arr.length) {
            dispatch(setAnime(arr));
          }
        });
    });
  });*/
};

export const setAnime = (anime) => ({
  type: "SET_ANIME",
  payload: anime,
});
