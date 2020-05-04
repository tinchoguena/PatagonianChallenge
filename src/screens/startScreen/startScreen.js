import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import {Platform, KeyboardAvoidingView} from 'react-native';

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
  TitleButton,
  LastSearchWrapper,
  KeyboardWrapper,
  SearchTextButtonLast,
  ErrorMsj,
} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../constants/Colors';

const StartScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const [artistState, setArtistState] = useState('');
  const [titleState, setTitleState] = useState('');
  const [histoyLocalInit, setHistoyLocalInit] = useState(undefined);
  const [searchErrorMsj, setSearchErrorMsj] = useState('');
  const storeLastSearch = useSelector((state) => state.lastSearch);

  console.log('artist state', artistState);
  console.log('title state', titleState);

  const fetchLyricsHandler = (artist, title) => {
    if (!artistState || !titleState) {
      setSearchErrorMsj('The inputs can not be empty');
      return;
    }
    dispatch(fetchLyrics(artist, title));
    dispatch(addSearch({artist: artistState, title: titleState}));
    setArtistState('');
    setTitleState('');
    setSearchErrorMsj('');
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
      <KeyboardWrapper behavior={Platform.OS === 'ios' ? 'height' : null}>
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
          <ButtonContainer
            onPress={() => {
              fetchLyricsHandler(artistState, titleState);
            }}>
            <SearchIcon name="search" size={16} color={Colors.solid} />
            <SearchTextButton
              color={
                Platform.OS === 'android' ? Colors.secondary : Colors.solid
              }>
              <TitleButton>Let's Go!</TitleButton>
            </SearchTextButton>
          </ButtonContainer>
          {searchErrorMsj ? <ErrorMsj>{searchErrorMsj}</ErrorMsj> : null}
        </InputsWrapper>
        {!storeLastSearch.artist ? null : (
          <LastSearchWrapper>
            <TitleWhite>Last Search</TitleWhite>
            <LastSearchContainer>
              <SearchTextButtonLast
                color={
                  Platform.OS === 'android' ? Colors.secondary : Colors.solid
                }
                onPress={() => {
                  setArtistState(storeLastSearch.artist);
                  setTitleState(storeLastSearch.title);
                }}>
                <TitleButton>{`Artist: ${storeLastSearch.artist} / Song: ${storeLastSearch.title}`}</TitleButton>
              </SearchTextButtonLast>
            </LastSearchContainer>
          </LastSearchWrapper>
        )}
      </KeyboardWrapper>
    </StartView>
  );
};

StartScreen.navigationOptions = {
  header: null,
};

export default StartScreen;
