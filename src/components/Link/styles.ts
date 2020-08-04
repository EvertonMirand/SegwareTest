import styled from 'styled-components/native';
import { LINK } from '../../utils/Colors';

export const Container = styled.TouchableOpacity`
  padding-bottom: 5px;
  border-bottom-width: 1px;
  border-bottom-color: ${LINK};
`;

export const Text = styled.Text`
  color: ${LINK};
`;
