import styled from 'styled-components/native';
import { ERROR_TEXT } from '../../utils/Colors';

export const Container = styled.View`
  margin-top: 10px;
  width: 80%;
`;

export const ErrorText = styled.Text`
  color: ${ERROR_TEXT};
  margin-top: 10px;
`;
