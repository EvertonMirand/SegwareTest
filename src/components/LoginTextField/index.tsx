import React, { memo } from 'react';

import { ErrorText, Container } from './styles';

import TextField, { TextFieldProps } from '../TextField';

interface LoginTextFieldProps extends TextFieldProps {
  errorMessage?: string;
}

const LoginTextField = (props: LoginTextFieldProps): JSX.Element => {
  const { errorMessage, style } = props;
  return (
    <Container style={style}>
      <TextField {...props} />
      <ErrorText>{errorMessage}</ErrorText>
    </Container>
  );
};

export default memo(LoginTextField);
