import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import {ActivityIndicator} from 'react-native';
import {setError} from '../../store/actions/lyricsActions';

import {
  ScreenView,
  GoBack,
  PageWrapper,
  TitleWrapper,
  Label,
  LoadingWrapper,
  ItemHistoryWrapper,
  TitleBlack,
  TitleWhite,
  ScrollWrapper,
  ArtistSongWrapper,
} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../constants/Colors';
import {TouchableOpacity} from 'react-native-gesture-handler';

const HistoryScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);
  const [historyLocal, setHistoryLocal] = useState(undefined);

  const goBackHandler = () => {
    navigation.goBack();
    dispatch(setError(''));
  };

  const getHistoryData = async () => {
    try {
      const value = await AsyncStorage.getItem('historyArray');
      if (value !== null) {
      }
      setHistoryLocal(JSON.parse(value));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getHistoryData();
  }, []);

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
            {!historyLocal ? (
              <LoadingWrapper>
                <ActivityIndicator size="large" color={Colors.secondary} />
              </LoadingWrapper>
            ) : (
              <>
                <TitleWrapper>
                  <Label>History: </Label>
                </TitleWrapper>
                {historyLocal.length >= 1 ? (
                  <ScrollWrapper showsVerticalScrollIndicator={false}>
                    {historyLocal.map((item) => (
                      <TouchableOpacity
                        onPress={() => {
                          navigation.navigate('SongDetail', {
                            artist: item.artist,
                            title: item.title,
                            lyrics: item.lyrics.lyrics,
                          });
                        }}>
                        <ItemHistoryWrapper>
                          <ArtistSongWrapper>
                            <TitleBlack>Artist: </TitleBlack>
                            <TitleWhite>{item.artist}</TitleWhite>
                          </ArtistSongWrapper>
                          <ArtistSongWrapper>
                            <TitleBlack>Song: </TitleBlack>
                            <TitleWhite>{item.title}</TitleWhite>
                          </ArtistSongWrapper>
                        </ItemHistoryWrapper>
                      </TouchableOpacity>
                    ))}
                  </ScrollWrapper>
                ) : (
                  <LoadingWrapper>
                    <TitleBlack>There are no songs on history</TitleBlack>
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

HistoryScreen.navigationOptions = {
  header: null,
};

export default HistoryScreen;
