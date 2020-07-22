export const setSortBy = (sortName) => ({
  type: 'SET_SORT_BY',
  payload: sortName,
});

export const setSortSeason = (season) => ({
  type: 'SET_SORT_SEASON',
  payload: season,
});

export const setSortYear = (year) => ({
  type: 'SET_SORT_YEAR',
  payload: year,
});

export const setSortSearch = (searchRequest) => ({
  type: 'SET_SORT_SEARCH',
  payload: searchRequest,
});