import {PermissionsAndroid, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Colors from '../utils/Colors';
import FontAwsome from 'react-native-vector-icons/FontAwesome6';
import Geolocation from 'react-native-geolocation-service';
import Geocoder from 'react-native-geocoder-reborn';
import {useNavigation} from '@react-navigation/native';
const API_KEY = 'AIzaSyDYE3a9jk21HiPNc6YDCcQOulAz1BnBJNY';

const LandingScreen = () => {
  const navigation = useNavigation();
  const [displayAddress, setDisplayAddress] = useState('');

  useEffect(() => {
    {
      displayAddress.length > 0
        ? setTimeout(() => {
            navigation.replace('bottom');
          }, 3000)
        : null;
    }
  }, [displayAddress]);
  const getAddress = async (lat: any, lng: any) => {
    try {
      const position = {lat: lat, lng: lng};
      const response = await Geocoder.geocodePosition(position);

      console.log('response', response[0].formattedAddress);
      setDisplayAddress(response[0].formattedAddress);
    } catch (err) {
      console.log('error ==>', err);
    }
  };
  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Grant Location Permissions',
          message: 'App need permission to access location',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      console.log('granted', granted);
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the location');
        Geolocation.getCurrentPosition(
          position => {
            console.log(position);
            getAddress(position.coords.latitude, position.coords.longitude);
          },
          error => {
            // See error code charts below.
            console.log(error.code, error.message);
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
      } else {
        console.log('location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    requestCameraPermission();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.navigation}></View>
      <View style={styles.body}>
        <FontAwsome name={'location-dot'} size={60} color={Colors.darkPurple} />
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '80%',
          }}>
          <Text style={styles.title}>Your delivery address</Text>
          <View style={styles.border} />
          <Text style={styles.address}>{displayAddress}</Text>
        </View>
      </View>
      <View style={styles.footer}></View>
    </View>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white240,
  },
  navigation: {
    flex: 2,
    backgroundColor: Colors.white240,
  },
  body: {
    flex: 9,
    backgroundColor: Colors.white240,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: Colors.white240,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.darkPurple,
    marginTop: 24,
    marginBottom: 12,
  },
  address: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.darkPurple,
    marginTop: 12,
    marginBottom: 12,
  },
  border: {
    backgroundColor: Colors.darkPurple,
    height: StyleSheet.hairlineWidth,
    width: '70%',
  },
});
