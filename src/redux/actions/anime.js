import axios from "axios";


export const setLoadedAnime = (payload) => ({
  type: "SET_LOADED_ANIME",
  payload,
});

export const fetchAnime = (list, sortBy) => (dispatch) => {
  dispatch(setLoadedAnime(false));
  axios.get(`http://localhost:3001/${list}`).then(({ data }) => {
    dispatch(setAnime(data));
  });
};

export const setAnime = (anime) => ({
  type: "SET_ANIME",
  payload: anime,
});