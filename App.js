/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {Listing} from './src/screens/Listing';

const App: () => React$Node = () => {
  return <Listing />;
};

const styles = StyleSheet.create({});

export default App;
