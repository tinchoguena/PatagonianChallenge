import styled from 'styled-components/native';
import Colors from '../../constants/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';

const StartView = styled.View`
  flex: 1;
  background-color: ${Colors.primary};
  align-items: center;
`;

const InputsWrapper = styled.View`
  flex: 1;
  background-color: ${Colors.primary};
  align-items: center;
  margin-top: 20%;
`;

const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

const Input = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-horizontal: 15px;
  border-radius: 10px;
  border: 1px solid #f5f5f5;
  background-color: #fff;
  width: 60%;
  height: 40px;
  margin-top: 4%;
`;

const InputText = styled.TextInput`
  flex: 1;
  width: 85%;
  margin-left: 13px;
`;

const TitleBlack = styled.Text`
  font-size: 24px;
  color: ${Colors.solid};
  font-weight: 600;
  flex-direction: row;
`;

const TitleWhite = styled.Text`
  font-size: 24px;
  color: ${Colors.secondary};
  font-weight: 400;
  flex-direction: row;
`;

const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-horizontal: 15px;
  border-radius: 10px;
  border: 1px solid #f5f5f5;
  background-color: #fff;
  width: 40%;
  height: 40px;
  margin-top: 6%;
`;

const LastSearchContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-horizontal: 5px;
  border-radius: 10px;
  border: 1px solid #f5f5f5;
  background-color: #fff;
  width: 80%;
  height: 40px;
  margin-bottom: 40%;
  margin-top: 3%;
`;

const SearchTextButton = styled.Button`
  font-size: 16px;
  font-weight: 400;
`;

const SearchIcon = styled(Icon)`
  padding-left: 10px;
`;

const HistoryButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  align-self: flex-end;
  margin-top: 11%;
  margin-right: 4%;
`;

export {
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
};
