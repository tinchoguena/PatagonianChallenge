import styled from 'styled-components/native';
import Colors from '../../constants/Colors';

const ScreenView = styled.View`
  flex: 1;
  background-color: ${Colors.primary};
`;

const PageWrapper = styled.View`
  flex: 1;
  margin-top: 3%;
  margin-bottom: 3%;
  align-items: center;
  justify-content: center;
`;

const TitleWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 4%;
`;

const ErrorWrapper = styled.View`
  align-items: center;
  width: 70%;
`;

const LoadingWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const LyricsContainer = styled.ScrollView`
  width: 80%;
  margin-top: 6%;
`;

const Label = styled.Text`
  font-size: 22px;
  font-weight: 600;
`;

const SearchText = styled.Text`
  font-size: 22px;
  font-weight: 400;
`;

const SongText = styled.Text`
  font-size: 18px;
  font-weight: 400;
`;

const GoBack = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  align-self: flex-start;
  margin-top: 10%;
  margin-left: 4%;
`;

export {
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
};
