export const setAnimePage = (animeId) => ({
  type: 'SET_ANIMEPAGE',
  payload: animeId,
});

export const setAnimePageDisplaed = (isDisplayed) => ({
  type: 'SET_ANIMEPAGE_DISPLAYED',
  payload: isDisplayed,
});
