import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import StartScreen from '../screens/startScreen/startScreen';
import LyricsScreen from '../screens/lyricsScreen/lyricsScreen';
import HistoryScreen from '../screens/historyScreen/historyScreen';
import SongDetailScreen from '../screens/songDetailScreen/songDetailScreen';

const LyricsNavigator = createStackNavigator({
  Start: StartScreen,
  Lyrics: LyricsScreen,
  History: HistoryScreen,
  SongDetail: SongDetailScreen,
});

export default createAppContainer(LyricsNavigator);
