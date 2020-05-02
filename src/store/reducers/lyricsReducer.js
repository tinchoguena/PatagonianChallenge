import {
  ADD_LYRIC,
  ADD_SEARCH,
  ADD_LAST_SEARCH,
  SET_LOADING,
  SET_ERROR,
} from '../actions/lyricsActions';

const initialState = {
  lyric: {},
  search: {},
  lastSearch: {},
  loading: false,
  error: '',
};

const lyricsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LYRIC:
      return {
        ...state,
        lyric: action.lyric,
        loading: false,
      };
    case ADD_SEARCH:
      return {
        ...state,
        search: action.search,
        loading: false,
      };
    case ADD_LAST_SEARCH:
      return {
        ...state,
        lastSearch: action.lastSearch,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.bool,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
};

export default lyricsReducer;
