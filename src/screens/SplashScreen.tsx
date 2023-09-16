import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import IconIcon from 'react-native-vector-icons/Ionicons';
import Colors from '../utils/Colors';
import {useNavigation} from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('landing');
    }, 2000);
  }, []);
  return (
    <View style={styles.container}>
      <IconIcon name={'fast-food-sharp'} size={120} color={Colors.darkPurple} />
      <Text style={styles.title}>Online Food Delivery</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: Colors.darkPurple,
    fontWeight: 'bold',
    marginTop: 20,
  },
});
