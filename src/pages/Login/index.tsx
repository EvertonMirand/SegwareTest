import React, { useEffect, useState, useCallback } from 'react';

import { useNavigation, Link } from '@react-navigation/native';

import Orientation from 'react-native-orientation';
import { ActivityIndicator, Alert, Keyboard } from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { Formik, FormikHelpers } from 'formik';

import * as Yup from 'yup';

import { Container, LoginButton, LoginButtonText, Form } from './styles';

import LoginTextField from '../../components/LoginTextField';

import api from '../../services/api';

import { SIGN_UP } from '../../routes/RoutesContants';

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Nescessario informar o usuario.'),
  password: Yup.string().min(6, 'A senha deve ser maior que 6 caracteres.'),
});

interface LoginFormData {
  username: string;
  password: string;
}

const Login: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();

  const dismissKeyboard = useCallback(() => {
    Keyboard.dismiss();
  }, []);

  const loginSuccess = (): void => {};

  const loginFail = (): void => {
    Alert.alert('Login invalido!', 'Usuario ou senha não cadastrado.');
  };

  const login = (
    { password, username }: LoginFormData,
    successCallback: () => void
  ): void => {
    api
      .post('sign-in', { password, username })
      .then((result) => {
        console.warn(result);

        successCallback();
        loginSuccess();
      })
      .catch((err) => {
        console.warn(err);

        loginFail();
      })
      .finally(() => setIsLoading(false));
  };

  const onSubmit = (
    data: LoginFormData,
    { resetForm }: FormikHelpers<LoginFormData>
  ): void => {
    setIsLoading(true);

    login(data, () => resetForm({}));
  };

  useEffect(() => {
    Orientation.lockToPortrait();
  }, []);

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{ username: '', password: '' }}
      onSubmit={onSubmit}
    >
      {({
        handleChange,
        handleSubmit,
        values: { username, password },
        errors,
      }) => (
        <>
          <Container onPress={dismissKeyboard}>
            <Form>
              <LoginTextField
                placeholder="Usuario"
                onChangeText={handleChange('username')}
                value={username}
                errorMessage={errors?.username}
              />

              <LoginTextField
                placeholder="Senha"
                textContentType="password"
                onChangeText={handleChange('password')}
                value={password}
                secureTextEntry
                errorMessage={errors?.password}
              />
              <Link to={`/${SIGN_UP}`}>Não é cadastrado?</Link>
              <KeyboardSpacer topSpacing={100} />
            </Form>
          </Container>
          <LoginButton onPress={handleSubmit} disabled={isLoading}>
            {!isLoading ? (
              <LoginButtonText>ACESSAR</LoginButtonText>
            ) : (
              <ActivityIndicator color="#fff" />
            )}
          </LoginButton>
        </>
      )}
    </Formik>
  );
};

export default Login;
