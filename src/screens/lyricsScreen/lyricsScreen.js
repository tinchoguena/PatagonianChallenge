import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import {
  addLyric,
  setError,
  addLastSearch,
} from '../../store/actions/lyricsActions';

import {
  ScreenView,
  GoBack,
  PageWrapper,
  TitleWrapper,
  Label,
  SearchText,
  LoadingWrapper,
  SongText,
  ErrorWrapper,
  LyricsContainer,
} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../constants/Colors';

const LyricsScreen = ({navigation: {goBack}}) => {
  const dispatch = useDispatch();

  const storeLyrics = useSelector((state) => state.lyric);
  const storeSearch = useSelector((state) => state.search);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  const [historyLocal, setHistoryLocal] = useState(undefined);

  console.log('store lyrics', storeLyrics);
  console.log('history local ', historyLocal);

  const goBackHandler = () => {
    goBack();
    dispatch(addLyric({}));
    dispatch(setError(''));
  };

  // const dispatchLastSearch = () => {
  //   if (storeLyrics.lyrics) {
  //     dispatch(
  //       addLastSearch({artist: storeSearch.artist, title: storeSearch.title}),
  //     );
  //     if (historyLocal.length <= 10) {
  //       let storeObj = {
  //         artist: storeSearch.artist,
  //         title: storeSearch.title,
  //         lyrics: storeLyrics,
  //       };
  //       let index = historyLocal.findIndex(
  //         (x) => x.lyrics.lyrics === storeObj.lyrics.lyrics,
  //       );
  //       if (index === -1) {
  //         storeHistoryData(storeObj);
  //       }
  //     }
  //   }
  // };

  // const storeHistoryData = async (obj) => {
  //   try {
  //     await AsyncStorage.setItem(
  //       'historyArray',
  //       JSON.stringify([...historyLocal, obj]),
  //     );
  //   } catch (e) {
  //     // saving error
  //   }
  // };

  const getHistoryData = async () => {
    try {
      const value = await AsyncStorage.getItem('historyArray');
      if (value !== null) {
        setHistoryLocal(JSON.parse(value));
      }
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    getHistoryData();
  }, []);

  useEffect(() => {
    const storeHistoryData = async (obj) => {
      try {
        await AsyncStorage.setItem(
          'historyArray',
          JSON.stringify([...historyLocal, obj]),
        );
      } catch (e) {
        // saving error
      }
    };
    if (storeLyrics.lyrics) {
      dispatch(
        addLastSearch({artist: storeSearch.artist, title: storeSearch.title}),
      );
      if (historyLocal.length <= 10) {
        let storeObj = {
          artist: storeSearch.artist,
          title: storeSearch.title,
          lyrics: storeLyrics,
        };
        let index = historyLocal.findIndex(
          (x) => x.lyrics.lyrics === storeObj.lyrics.lyrics,
        );
        if (index === -1) {
          storeHistoryData(storeObj);
        }
      }
    }
  }, [
    dispatch,
    historyLocal,
    storeLyrics,
    storeSearch.artist,
    storeSearch.title,
  ]);

  return (
    <ScreenView>
      <GoBack
        onPress={() => {
          goBackHandler();
        }}>
        <Icon name="chevron-left" size={20} color={Colors.secondary} />
      </GoBack>
      {loading ? (
        <LoadingWrapper>
          <ActivityIndicator size="large" color={Colors.secondary} />
        </LoadingWrapper>
      ) : (
        <PageWrapper>
          <>
            {error ? (
              <ErrorWrapper>
                <Label>An error occured: </Label>
                <SearchText>{error}</SearchText>
              </ErrorWrapper>
            ) : (
              <>
                <TitleWrapper>
                  <Label>Artist: </Label>
                  <SearchText>{storeSearch.artist}</SearchText>
                </TitleWrapper>
                <TitleWrapper>
                  <Label> SongTitle: </Label>
                  <SearchText>{storeSearch.title}</SearchText>
                </TitleWrapper>
                {storeLyrics.lyrics ? (
                  <LyricsContainer showsVerticalScrollIndicator={false}>
                    <SongText>{storeLyrics.lyrics}</SongText>
                  </LyricsContainer>
                ) : (
                  <LoadingWrapper>
                    <ActivityIndicator size="large" color={Colors.secondary} />
                  </LoadingWrapper>
                )}
              </>
            )}
          </>
        </PageWrapper>
      )}
    </ScreenView>
  );
};

LyricsScreen.navigationOptions = {
  header: null,
};

export default LyricsScreen;
