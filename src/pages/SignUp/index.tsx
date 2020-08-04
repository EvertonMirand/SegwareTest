import React, { useEffect, useState, useCallback } from 'react';

import { useNavigation, Link } from '@react-navigation/native';

import Orientation from 'react-native-orientation';
import { ActivityIndicator, Alert, Keyboard } from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { Formik, FormikHelpers } from 'formik';

import * as Yup from 'yup';

import { Container, LoginButton, LoginButtonText, Form } from './styles';
import { LOGIN } from '../../routes/RoutesContants';

import LoginTextField from '../../components/LoginTextField';

import api from '../../services/api';

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Nescessario informar o usuario.'),
  password: Yup.string().min(6, 'A senha deve ser maior que 6 caracteres.'),
});

interface SignUpFormData {
  username: string;
  password: string;
}

const SignUp = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();

  const dismissKeyboard = useCallback(() => {
    Keyboard.dismiss();
  }, []);

  const signUpSuccess = (): void => {
    Alert.alert('Sucesso!', 'Usuario cadastrado com sucesso.');
    navigation.navigate(LOGIN);
  };

  const signUpFail = (): void =>
    Alert.alert('Erro!', 'Erro ao cadastrar usuario.');

  const signUp = (
    { password, username }: SignUpFormData,
    successCallback: () => void
  ): void => {
    api
      .post('sign-up', { password, username })
      .then(() => {
        successCallback();
        signUpSuccess();
      })
      .catch((err) => {
        signUpFail();
      })
      .finally(() => setIsLoading(false));
  };

  const onSubmit = (
    data: SignUpFormData,
    { resetForm }: FormikHelpers<SignUpFormData>
  ): void => {
    setIsLoading(true);

    signUp(data, () => resetForm({}));
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
              <Link to={`/${LOGIN}`}>Já é cadatrado?</Link>
              <KeyboardSpacer topSpacing={100} />
            </Form>
          </Container>
          <LoginButton onPress={handleSubmit} disabled={isLoading}>
            {!isLoading ? (
              <LoginButtonText>Cadastrar</LoginButtonText>
            ) : (
              <ActivityIndicator color="#fff" />
            )}
          </LoginButton>
        </>
      )}
    </Formik>
  );
};

export default SignUp;
