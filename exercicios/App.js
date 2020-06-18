import React from 'react';
import {View, StyleSheet} from 'react-native';
import Simples from './src/components/simples/Simples';

const App = () => {
  return (
    <View style={styles.container}>
      <Simples text={'teste'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
