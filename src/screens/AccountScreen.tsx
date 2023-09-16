import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../utils/Colors';

const AccountScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={Colors.darkPurple}
      />
      <Text>AccountScreen</Text>
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
