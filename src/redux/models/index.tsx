import {LocationGeocodedAddress} from 'expo-location';
export interface Category {
  id: string;
  title: string;
  icon: string;
}

export interface FoodModel {
  _id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  readyTime: number;
  images: [string];
}

export interface Restaurant {
  _id: string;
  name: string;
  foodType: string;
  pincode: string;
  address: string;
  phone: string;
  images: [string];
  foods: [FoodModel];
}

export interface FoodAvailability {
  restaurants: [Restaurant];
  foods: [FoodModel];
  categories: [Category];
}

export interface UserModel {
  firstName: string;
  lastName: string;
  contactNumber: string;
  token: string;
}

export interface UserState {
  user: UserModel;
  address: LocationGeocodedAddress;
  error: string | undefined;
}
