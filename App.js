import React, { useState, useMemo } from "react";
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, KeyboardAvoidingView, ScrollView } from 'react-native';
import { Appbar, Button, BottomNavigation, TextInput } from 'react-native-paper';

import { NavigationNativeContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginScreen from './screens/Login'
import SignupScreenCustomer from './screens/SignupCustomer'
import SignupScreenVendor from './screens/SignupVendor'
import HomeScreen from './screens/Home'
import LoadingScreen from './screens/LoadingScreen'
import QRGen from './screens/QRGen'
import QRScan from './screens/QRScan'
import Transactions from './screens/Transactions'
import FAQs from './screens/FAQs'
import Promotions from './screens/Promotions'
import Profile from './screens/Profile'
import Settings from './screens/Settings'
import Contact from './screens/Contact'
import About from './screens/About'
import Help from './screens/Help'

import AntIcon from "react-native-vector-icons/AntDesign";
import { Ionicons } from '@expo/vector-icons';

import { UserContext } from "./UserContext";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const HomeIcon = <AntIcon name="qrcode" color="#14213D" size={70} style={{}} />

function Root() {


  return (

    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused
            ? 'ios-home'
            : 'ios-home';
        } else if (route.name === 'FAQs') {
          iconName = focused ? 'md-help-circle' : 'md-help-circle-outline';
        } else if (route.name === 'Settings') {
          iconName = focused ? 'md-settings' : 'md-settings';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
      tabBarOptions={{
        activeTintColor: '#E7ECEF',
        inactiveTintColor: '#E7ECEF',
        activeBackgroundColor: '#FCA311',
        inactiveBackgroundColor: '#14213D',
      }}
      initialRouteName="Home">

      <Tab.Screen name="FAQs" component={FAQs} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>


  );
}

function Draw() {
  return (

    <Drawer.Navigator overlayColor="#14213D" drawerStyle={{
      backgroundColor: 'white',
    }}
      drawerContentOptions={{
        activeTintColor: '#f09703',
        inactiveTintColor: '#14213D'

      }}
      screenOptions={({ route }) => ({
        drawerIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-home'
              : 'ios-home';
          } else if (route.name === 'Promotions') {
            iconName = focused ? 'ios-ribbon' : 'ios-ribbon';
          } else if (route.name === 'View Profile') {
            iconName = focused ? 'md-contact' : 'md-contact';
          } else if (route.name === 'FAQs') {
            iconName = focused ? 'md-help-circle' : 'md-help-circle-outline';
          } else if (route.name === 'Contact') {
            iconName = focused ? 'md-call' : 'md-call';
          } else if (route.name === 'About') {
            iconName = focused ? 'md-information-circle-outline' : 'md-information-circle-outline';
          } /*else if (route.name === 'Help') {
            iconName = focused ? 'ios-help-buoy' : 'ios-help-buoy';
          } else if (route.name === 'Invite a Friend') {
            iconName = focused ? 'ios-add-circle' : 'ios-add-circle';
          }*/ else if (route.name === 'Settings') {
            iconName = focused ? 'md-settings' : 'md-settings';
          }


          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}>
      <Drawer.Screen name="Home" component={Root} />
      <Drawer.Screen name="View Profile" component={Profile} />
      <Drawer.Screen name="Promotions" component={Promotions} />
      <Drawer.Screen name="FAQs" component={FAQs} />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="Contact" component={Contact} />
      {/*<Drawer.Screen name="Help" component={Help} />
      <Drawer.Screen name="Invite a Friend" component={FAQs} />*/}
      <Drawer.Screen name="Settings" component={Settings} />


    </Drawer.Navigator>


  );
}


export default function App() {

  const [user, setUser] = useState(null);
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <UserContext.Provider value={value}>
      <NavigationNativeContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Loading" component={LoadingScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="SignupCustomer" component={SignupScreenCustomer} />
          <Stack.Screen name="SignupVendor" component={SignupScreenVendor} />
          <Stack.Screen name="Home" component={Draw} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="QRGen" component={QRGen} />
          <Stack.Screen name="QRScan" component={QRScan} />
          <Stack.Screen name="Transactions" component={Transactions} />
        </Stack.Navigator>
      </NavigationNativeContainer>
    </UserContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
});
