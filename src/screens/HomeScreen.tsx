import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.navigation}></View>
      <View style={styles.body}></View>
      <View style={styles.footer}></View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navigation: {
    flex: 2,
  },
  body: {
    flex: 9,

    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
  },
});
