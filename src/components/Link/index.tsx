import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Text } from './styles';

interface LinkProps extends TouchableOpacityProps {
  text: string;
}

const Link = (props: LinkProps): JSX.Element => {
  const { text } = props;
  return (
    <Container {...props}>
      <Text>{text}</Text>
    </Container>
  );
};

export default Link;
