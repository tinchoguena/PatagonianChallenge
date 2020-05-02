export const ADD_LYRIC = 'ADD_LYRIC';
export const ADD_SEARCH = 'ADD_SEARCH';
export const ADD_LAST_SEARCH = 'ADD_LAST_SEARCH';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';

export const addLyric = (lyric) => {
  return {
    type: ADD_LYRIC,
    lyric,
  };
};
export const addSearch = (search) => {
  return {
    type: ADD_SEARCH,
    search,
  };
};
export const addLastSearch = (lastSearch) => {
  return {
    type: ADD_LAST_SEARCH,
    lastSearch,
  };
};
export const setLoading = (bool) => {
  return {
    type: SET_LOADING,
    bool,
  };
};
export const setError = (error) => {
  return {
    type: SET_ERROR,
    error,
  };
};
