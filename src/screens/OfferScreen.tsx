import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const OfferScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={Colors.darkPurple}
      />
      <Text>OfferScreen</Text>
    </View>
  );
};

export default OfferScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
