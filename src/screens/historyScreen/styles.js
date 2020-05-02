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

const ItemHistoryWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 4%;
  width: 100%;
  height: 50px;
  border: 1px solid lightgray;
  border-radius: 8px;
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

const ScrollWrapper = styled.ScrollView`
  width: 80%;
  margin-top: 6%;
`;

const ArtistSongWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Label = styled.Text`
  font-size: 22px;
  font-weight: 600;
`;

const SearchText = styled.Text`
  font-size: 22px;
  font-weight: 400;
`;

const GoBack = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  align-self: flex-start;
  margin-top: 10%;
  margin-left: 4%;
`;

const TitleBlack = styled.Text`
  font-size: 18px;
  color: ${Colors.solid};
  font-weight: 600;
  flex-direction: row;
`;

const TitleWhite = styled.Text`
  font-size: 18px;
  color: ${Colors.secondary};
  font-weight: 400;
  flex-direction: row;
`;

export {
  ScreenView,
  GoBack,
  PageWrapper,
  TitleWrapper,
  Label,
  SearchText,
  LoadingWrapper,
  ErrorWrapper,
  TitleBlack,
  TitleWhite,
  ItemHistoryWrapper,
  ScrollWrapper,
  ArtistSongWrapper,
};
