import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, AsyncStorage, } from 'react-native';
//import { Avatar, Header } from 'react-native-elements';
import { Appbar, Avatar, Searchbar, IconButton, Colors, BottomNavigation } from 'react-native-paper';
import { Icon } from 'react-native-elements'
import AntIcon from "react-native-vector-icons/AntDesign";
import { Ionicons } from '@expo/vector-icons';
import Banner from './Banner'

export default function Home({ navigation }) {

    const logout = async () => {
        await AsyncStorage.removeItem('token')
        await AsyncStorage.removeItem('type')
        navigation.navigate("Login")
    }

    return (
        <View >
            <ImageBackground source={require('../assets/bg_Home.png')} style={{ width: '100%', height: '100%' }}>
                <Appbar.Header style={{ backgroundColor: "#1e6262", justifyContent: "space-between" }}>
                    <Appbar.Action icon="menu" onPress={() => navigation.toggleDrawer()} />
                    <Text style={{ color: "#fafaf6", fontSize: 25, fontWeight: "bold" }}>
                        Home
                </Text>
                    <Appbar.Action icon="logout" onPress={logout} />
                </Appbar.Header>

                {   /*<ImageBackground source={require('./bg.jpg')} style={{ width: '100%', height: '100%' }}>*/}
                <View style={styles.avatar}>
                    <Ionicons name="md-contact" color="white" size={70} onPress={() => navigation.navigate("Profile")} />
                    <Text style={{ fontSize: 25, color: 'white' }}>Name</Text>
                    <TouchableOpacity>
                        <Text style={{ color: 'white' }} >Edit</Text>
                    </TouchableOpacity>

                </View>

                {/*<View
                    style={{
                        marginLeft: 15,
                        marginRight: 15,
                        borderBottomWidth: 4,
                        marginTop: 30,
                        borderRadius: 40,
                        borderBottomColor: '#152939'
                    }}>
                </View>*/}

                <View style={{
                    borderTopLeftRadius: 50, borderTopRightRadius: 50,
                }}>

                    <View
                        style={{
                            marginLeft: 15,
                            marginRight: 15,
                            marginTop: 15,
                            flexDirection: 'row',

                            justifyContent: 'center',
                        }}
                    >
                        <View
                            style={{
                                margin: 15,
                                alignItems: 'center',
                                justifyContent: 'center',
                                flex: 1
                            }}
                        >
                            <TouchableOpacity>
                                <AntIcon name="qrcode" color="#1e6262" size={70} onPress={() => navigation.navigate("QRGen")} />
                                <Text style={{ marginLeft: 10, fontSize: 10 }} onPress={() => navigation.navigate("QRGen")}>Generate QR</Text>
                            </TouchableOpacity>
                        </View>

                        <View
                            style={{
                                margin: 15,
                                alignItems: 'center',
                                justifyContent: 'center',
                                flex: 1
                            }}
                        >

                            <TouchableOpacity>

                                <Ionicons name="md-qr-scanner" color="#1e6262" size={70} onPress={() => navigation.navigate("QRScan")} />

                                <Text style={{ marginLeft: 10, fontSize: 10 }} onPress={() => navigation.navigate("QRScan")}>Scan QR</Text>
                            </TouchableOpacity>
                        </View>

                        <View
                            style={{
                                margin: 15,
                                alignItems: 'center',
                                justifyContent: 'center',

                            }}
                        >

                            <TouchableOpacity>
                                <Icon
                                    name='history'
                                    color='#1e6262'
                                    size={70}
                                    onPress={() => navigation.navigate("Transactions")}
                                />
                                <Text style={{ fontSize: 10 }} onPress={() => navigation.navigate("Transactions")}>View Transactions</Text>
                            </TouchableOpacity>

                        </View>
                    </View>


                </View>

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                    <Text style={{ fontSize: 25, fontWeight: "bold", marginTop: 20, marginBottom: 10, color: "#1e6262" }}>Promotions</Text>
                    <Banner style={{ borderRadius: 50 }} />
                </View>
            </ImageBackground>



        </View>
    );
}

const styles = StyleSheet.create({
    avatar: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 90,
    },

});
