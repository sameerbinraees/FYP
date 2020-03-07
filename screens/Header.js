import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native';
//import { Avatar, Header } from 'react-native-elements';
import { Appbar, Avatar, Searchbar, IconButton, Colors, BottomNavigation } from 'react-native-paper';
import TabBar from 'react-native-nav-tabbar';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationNativeContainer } from '@react-navigation/native';

//import HomeScreen from './Home'


export default function Header({navigation}) {
    return (
        <View>
            <Appbar.Header style={{ backgroundColor: "white", justifyContent: "space-between" }}>
                <Appbar.Action icon="arrow-left" onPress={() => navigation.goBack()}/>
                <Text style={{ color: "#ff7f50", fontSize: 25, fontWeight: "bold" }}>
                    Header
                </Text>
                <Appbar.Action icon="magnify" />
            </Appbar.Header>

        </View>
    );
}
const styles = StyleSheet.create({
    avatar: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },

});

//export default function App() {
//
//    return (
//        <NavigationNativeContainer>
//            <Stack.Navigator headerMode="none">
//                <Stack.Screen name="Login" component={LoginScreen} />
//                <Stack.Screen name="Signup" component={SignupScreen} />
//                <Stack.Screen name="Home" component={HomeScreen} />
//
//            </Stack.Navigator>
//        </NavigationNativeContainer>
//    );
//}