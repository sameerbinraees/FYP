import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, } from 'react-native';
//import { Avatar, Header } from 'react-native-elements';
import { Appbar, Avatar, Searchbar, IconButton, Colors, BottomNavigation } from 'react-native-paper';
import { Icon } from 'react-native-elements'
import AntIcon from "react-native-vector-icons/AntDesign";
import Header from './Header'
import Login from './Login'

import { LinearGradient } from 'expo-linear-gradient';


export default function Test({ navigation }) {

    return (
        <View
            style={{
                marginLeft: 15,
                marginRight: 15,
                marginTop: 15,
                flexDirection: 'row',
                backgroundColor: "white",
                borderRadius: 30,
                justifyContent: 'center',
            }}
        >
            <View
                style={{
                    margin: 15,
                    alignItems: 'center',
                    justifyContent: 'center',
                    flex:1
                }}
            >
                <AntIcon name="profile" color="green" size={50} />
                <Text style={{ fontSize: 10 }}>View Profile</Text>
            </View>

            <View
                style={{
                    margin: 15,
                    alignItems: 'center',
                    justifyContent: 'center',
                    flex:1
                }}
            >
                <AntIcon name="qrcode" color="green" size={50} style={{}} />
                <Text style={{ fontSize: 10 }}>Generate QR</Text>
            </View>

            <View
                style={{
                    margin: 15,
                    alignItems: 'center',
                    justifyContent: 'center',
                    
                }}
            >
                <Icon
                    name='history'
                    type='Fontisto'
                    color='green'
                    size={50}
                />
                <Text style={{ fontSize: 10 }}>View Transactions</Text>
            </View>
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
