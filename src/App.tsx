import 'react-native-gesture-handler';
import React from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import AppRoutes from './routes/AppRoutes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const App = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />

      <AppRoutes />
    </View>
  );
};

export default App;
