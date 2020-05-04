import {addLyric, setLoading, setError} from '../actions/lyricsActions';

export const fetchLyrics = (artist, title) => {
  return (dispatch) => {
    dispatch(setLoading(true));

    fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`)
      .then((response) => {
        if (!response.ok) {
          dispatch(setError('There are not results for this artist or song'));
        }
        dispatch(setLoading(false));
        return response;
      })
      .then((response) => response.json())
      .then((response) => dispatch(addLyric(response)))
      .catch(() => {
        dispatch(
          setError('There was an error getting your lyrics, try again, please'),
        );
      });
  };
};
