import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {ActivityIndicator} from 'react-native';
import {addLyric, setError} from '../../store/actions/lyricsActions';

import {
  ScreenView,
  GoBack,
  PageWrapper,
  TitleWrapper,
  Label,
  SearchText,
  LoadingWrapper,
  SongText,
  LyricsContainer,
} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../constants/Colors';

const SongDetailScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);

  const goBackHandler = () => {
    navigation.goBack();
    dispatch(addLyric({}));
    dispatch(setError(''));
  };

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
            <TitleWrapper>
              <Label>Artist: </Label>
              <SearchText>{navigation.getParam('artist')}</SearchText>
            </TitleWrapper>
            <TitleWrapper>
              <Label> SongTitle: </Label>
              <SearchText>{navigation.getParam('title')}</SearchText>
            </TitleWrapper>
            <LyricsContainer showsVerticalScrollIndicator={false}>
              <SongText>{navigation.getParam('lyrics')}</SongText>
            </LyricsContainer>
          </>
        </PageWrapper>
      )}
    </ScreenView>
  );
};

SongDetailScreen.navigationOptions = {
  header: null,
};

export default SongDetailScreen;
