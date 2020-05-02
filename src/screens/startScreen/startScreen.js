import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

import {fetchLyrics} from '../../store/services/fetchLyrics';
import {addSearch} from '../../store/actions/lyricsActions';

import {
  StartView,
  TitleWhite,
  TitleBlack,
  TitleContainer,
  SearchTextButton,
  ButtonContainer,
  SearchIcon,
  Input,
  InputText,
  InputsWrapper,
  HistoryButton,
  LastSearchContainer,
} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../constants/Colors';

const StartScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const [artistState, setArtistState] = useState('');
  const [titleState, setTitleState] = useState('');
  const [histoyLocalInit, setHistoyLocalInit] = useState(undefined);
  const storeLastSearch = useSelector((state) => state.lastSearch);

  const fetchLyricsHandler = (artist, title) => {
    dispatch(fetchLyrics(artist, title));
    dispatch(addSearch({artist: artistState, title: titleState}));
    setArtistState('');
    setTitleState('');
    navigation.navigate({routeName: 'Lyrics'});
  };

  const storeHistoryDataInit = async () => {
    try {
      await AsyncStorage.setItem('historyArray', JSON.stringify([]));
    } catch (e) {
      console.log(e);
    }
  };

  const getHistoryDataInit = async () => {
    try {
      const value = await AsyncStorage.getItem('historyArray');
      if (value === null) {
        setHistoyLocalInit(JSON.parse(value));
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getHistoryDataInit();
    if (histoyLocalInit === null) {
      storeHistoryDataInit();
    }
  }, [histoyLocalInit]);

  return (
    <StartView>
      <HistoryButton
        onPress={() => {
          navigation.navigate({routeName: 'History'});
        }}>
        <Icon name="history" size={30} color={Colors.secondary} />
      </HistoryButton>
      <InputsWrapper>
        <Icon name="music" size={40} color={Colors.secondary} />
        <TitleContainer>
          <TitleBlack>Lyrics</TitleBlack>
          <TitleWhite>finder</TitleWhite>
        </TitleContainer>
        <Input>
          <InputText
            autoFocus={true}
            placeholder="Enter Artist Name"
            placeholderTextColor="#C7C7CD"
            onChangeText={(text) => {
              setArtistState(text);
            }}
            value={artistState}
          />
        </Input>
        <Input>
          <InputText
            placeholder="Enter Song Name"
            placeholderTextColor="#C7C7CD"
            onChangeText={(text) => {
              setTitleState(text);
            }}
            value={titleState}
          />
        </Input>
        <ButtonContainer>
          <SearchIcon name="search" size={16} color={Colors.solid} />
          <SearchTextButton
            color={Colors.solid}
            title="Let's Go!"
            onPress={() => {
              fetchLyricsHandler(artistState, titleState);
            }}
          />
        </ButtonContainer>
      </InputsWrapper>
      {!storeLastSearch.artist ? null : (
        <>
          <TitleWhite>Last Search</TitleWhite>
          <LastSearchContainer>
            <SearchTextButton
              color={Colors.solid}
              title={`Artist: ${storeLastSearch.artist} / Song: ${storeLastSearch.title}`}
              onPress={() => {
                setArtistState(storeLastSearch.artist);
                setTitleState(storeLastSearch.title);
              }}
            />
          </LastSearchContainer>
        </>
      )}
    </StartView>
  );
};

StartScreen.navigationOptions = {
  header: null,
};

export default StartScreen;
