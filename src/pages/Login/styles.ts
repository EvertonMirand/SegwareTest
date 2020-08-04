import styled from 'styled-components/native';

import { BUTTON, BUTTON_TEXT, ERROR_TEXT } from '../../utils/Colors';

export const Container = styled.TouchableOpacity`
  flex: 1;
`;

export const Form = styled.View`
  flex: 1;
  margin: 20px;
  margin-top: 50px;
  justify-content: center;
  align-items: center;
`;

export const LoginButton = styled.TouchableOpacity`
  z-index: 5;
  height: 80px;

  justify-content: center;
  align-items: center;
  background-color: ${BUTTON};
  bottom: 0;
  position: absolute;
  width: 100%;
`;

export const LoginButtonText = styled.Text`
  color: ${BUTTON_TEXT};
`;

export const ErrorText = styled.Text`
  color: ${ERROR_TEXT};
  margin-top: 5px;
`;
