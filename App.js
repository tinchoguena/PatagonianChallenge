import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import LyricsNavigator from './src/navigation/lyricsNavigation';
import lyricsReducer from './src/store/reducers/lyricsReducer';

const store = createStore(
  lyricsReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

const App = () => {
  return (
    <Provider store={store}>
      <LyricsNavigator />
    </Provider>
  );
};

export default App;
