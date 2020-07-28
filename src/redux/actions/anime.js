import axios from "axios";

export const setLoadedAnime = (payload) => ({
  type: "SET_LOADED_ANIME",
  payload,
});

export const fetchAnime = (list, sortBy) => (dispatch) => {
  let arr = [];
  let oldAnime = [];

  dispatch(setLoadedAnime(false));
  axios.get(`http://localhost:3001/${list}`).then(({ data }) => {
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
  });
};

export const setAnime = (anime) => ({
  type: "SET_ANIME",
  payload: anime,
});
