import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, KeyboardAvoidingView, ScrollView } from 'react-native';
import { Appbar, Button, BottomNavigation, TextInput } from 'react-native-paper';

import { NavigationNativeContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginScreen from './screens/Login'
import SignupScreen from './screens/Signup'
import HomeScreen from './screens/Home'
import Header from './screens/Header'
import comp from './screens/mycomponent'
//import Test from './screens/Test'
import QRGen from './screens/QRGen'
import QRScan from './screens/QRScan'
import Transactions from './screens/Transactions'
import FAQs from './screens/FAQs'
import Promotions from './screens/Promotions'
import Profile from './screens/Profile'
import AntIcon from "react-native-vector-icons/AntDesign";


import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const HomeIcon = <AntIcon name="qrcode" color="#1e6262" size={70} style={{}}/>

function Root() {
  return (

    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused
            ? 'ios-home'
            : 'ios-home';
        } else if (route.name === 'Help/FAQs') {
          iconName = focused ? 'md-help-circle' : 'md-help-circle-outline';
        }  else if (route.name === 'Settings') {
          iconName = focused ? 'md-settings' : 'md-settings';
        }  

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
      tabBarOptions={{
        activeTintColor: '#b4f1f1',
        inactiveTintColor: 'white',
        activeBackgroundColor: '#2d767f',
        inactiveBackgroundColor: '#2d767f',
      }}
      initialRouteName="Home">

      <Tab.Screen name="Help/FAQs" component={FAQs} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={FAQs} />
    </Tab.Navigator>


  );
}

function Draw() {
  return (

    <Drawer.Navigator overlayColor="#1e6262" drawerStyle={{
      backgroundColor: 'white',
    }}
      drawerContentOptions={{
        activeTintColor: '#2c8f8f',
        inactiveTintColor: '#1e6262'

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
        } else if (route.name === 'Edit Profile') {
          iconName = focused ? 'md-contact' : 'md-contact';
        } else if (route.name === 'FAQs') {
          iconName = focused ? 'md-help-circle' : 'md-help-circle-outline';
        } else if (route.name === 'Contact') {
          iconName = focused ? 'md-call' : 'md-call';
        } else if (route.name === 'About') {
          iconName = focused ? 'md-information-circle-outline' : 'md-information-circle-outline';
        } else if (route.name === 'Help') {
          iconName = focused ? 'ios-help-buoy' : 'ios-help-buoy';
        }  else if (route.name === 'Invite a Friend') {
          iconName = focused ? 'ios-add-circle' : 'ios-add-circle';
        }  else if (route.name === 'Settings') {
          iconName = focused ? 'md-settings' : 'md-settings';
        }       


        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}>
      <Drawer.Screen name="Home" component={Root}/>
      <Drawer.Screen name="Promotions" component={Promotions} />
      <Drawer.Screen name="Edit Profile" component={Profile} />
      <Drawer.Screen name="FAQs" component={FAQs} />
      <Drawer.Screen name="Help" component={FAQs} />
      <Drawer.Screen name="About" component={FAQs} />
      <Drawer.Screen name="Contact" component={FAQs} />
      <Drawer.Screen name="Invite a Friend" component={FAQs} />
      <Drawer.Screen name="Settings" component={FAQs} />


    </Drawer.Navigator>


  );
}


export default function App() {

  return (
    <NavigationNativeContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Home" component={Draw} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="QRGen" component={QRGen} />
        <Stack.Screen name="QRScan" component={QRScan} />
        <Stack.Screen name="Transactions" component={Transactions} />
      </Stack.Navigator>
    </NavigationNativeContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
});
