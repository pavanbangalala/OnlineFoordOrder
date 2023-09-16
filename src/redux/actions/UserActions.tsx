import {LocationGeocodedAddress} from 'expo-location';

export interface UserLocationAction {
  readonly type: 'UPDATE_USER_LOCATION';
  payload: LocationGeocodedAddress;
}

export interface UserErrorAction {
  readonly type: 'ON_USER_ERROR';
}
