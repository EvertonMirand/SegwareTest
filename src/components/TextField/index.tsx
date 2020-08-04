import React, { useState } from 'react';
import { TextInputProps } from 'react-native';

import { Field, ActivePlaceholderText } from './styles';
import { TEXT_FIELD } from '../../utils/Colors';

export interface TextFieldProps extends TextInputProps {
  color?: string;
}

const TextField = (props: TextFieldProps): JSX.Element => {
  const { onBlur, onFocus, placeholder, color = TEXT_FIELD } = props;
  const [isFocused, setFocused] = useState(false);
  return (
    <>
      {isFocused && (
        <ActivePlaceholderText color={color}>
          {placeholder}
        </ActivePlaceholderText>
      )}
      <Field
        {...props}
        color={color}
        active={isFocused}
        onFocus={(e) => {
          setFocused(true);
          onFocus && onFocus(e);
        }}
        onBlur={(e) => {
          setFocused(false);
          onBlur && onBlur(e);
        }}
      />
    </>
  );
};

export default TextField;
