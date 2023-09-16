import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LandingScreen from './src/screens/LandingScreen';
import SplashScreen from './src/screens/SplashScreen';
import {createSwitchNavigator} from 'react-navigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import OfferScreen from './src/screens/OfferScreen';
import CartScreen from './src/screens/CartScreen';
import AccountScreen from './src/screens/AccountScreen';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Screen} from 'react-native-screens';
import Colors from './src/utils/Colors';
import {Provider} from 'react-redux';
import store from './src/redux/store';

const stack = createNativeStackNavigator();

const bottom = createBottomTabNavigator();
const AppBottomStack = () => {
  return (
    <bottom.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: {
          marginVertical: 20,
          marginHorizontal: 8,
          height: 60,
          borderRadius: 16,
          backgroundColor: Colors.darkPurple,
        },
        tabBarShowLabel: false,
        tabBarIcon: ({focused, size}) => {
          let iconName;
          let routeName = route.name;
          let iconColor = focused ? Colors.white : Colors.white;
          let icon;
          if (routeName == 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (routeName == 'Offer') {
            iconName = focused ? 'at-circle-sharp' : 'at-outline';
          } else if (routeName == 'Cart') {
            iconName = focused ? 'cart-sharp' : 'cart-outline';
          } else {
            iconName = focused
              ? 'person-circle-sharp'
              : 'person-circle-outline';
          }
          return (icon = (
            <IonIcon name={iconName} size={size} color={iconColor} />
          ));
        },
      })}>
      <bottom.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarActiveTintColor: Colors.darkPurple,
        }}
      />
      <bottom.Screen
        name="Offer"
        component={OfferScreen}
        options={{
          tabBarLabel: 'Offer',
          tabBarActiveTintColor: Colors.darkPurple,
        }}
      />
      <bottom.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarLabel: 'Cart',
          tabBarActiveTintColor: Colors.darkPurple,
        }}
      />
      <bottom.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarLabel: 'Account',
          tabBarActiveTintColor: Colors.darkPurple,
        }}
      />
    </bottom.Navigator>
  );
};

const AppContainer = () => {
  return (
    <NavigationContainer>
      <stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="splash">
        <stack.Screen name="bottom" component={AppBottomStack} />
        <stack.Screen name="landing" component={LandingScreen} />
        <stack.Screen name="splash" component={SplashScreen} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  return <Provider store={store}>{AppContainer()}</Provider>;
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
