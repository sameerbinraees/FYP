import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, AsyncStorage, Image, } from 'react-native';
//import { Avatar, Header } from 'react-native-elements';
import { Appbar, Avatar, Searchbar, IconButton, Colors, ActivityIndicator } from 'react-native-paper';
import { Icon } from 'react-native-elements'
import AntIcon from "react-native-vector-icons/AntDesign";
import { Ionicons } from '@expo/vector-icons';
import Banner from './Banner'

import { UserContext } from "../UserContext";


export default function Home({ navigation }) {

    const [token, setToken] = useState('');
    const [type, setType] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [cnic, setCnic] = useState('');
    const [Logout, setLogout] = useState(false)

    const { user, setUser } = useContext(UserContext);

    const logout = async () => {
        setLogout(true)
        AsyncStorage.removeItem('token').then(() => {
            AsyncStorage.removeItem('type').then(() => {
                setUser(null)
                navigation.navigate("Login")
            })
            //props.navigation.replace("Login");
        })
    }

    const fetchDetails = async () => {

        setToken(await AsyncStorage.getItem('token'))
        setType(await AsyncStorage.getItem('type'))

        if (token && type) {
            fetch("http://192.168.43.145:3000/" + type + "s/token", {
                headers: new Headers({
                    Authorization: "Bearer " + token,
                    Type: type,
                })
            })
                .then(res => res.json())
                .then(data => {

                    setCnic(data.cnic);
                    setEmail(data.email);
                    setName(data.name);
                    setPhone(data.phone);
                    setUser(data);
                })
        }
    }

    useEffect(() => {
        fetchDetails();
    }, [token, type]);

    return (
        <View style={styles.container}>

            <ImageBackground source={require('../assets/bg_Home.png')} style={{ width: '100%', height: '100%' }}>
                <Appbar.Header style={{ backgroundColor: "#1e6262", justifyContent: "space-between" }}>
                    <Appbar.Action icon="menu" onPress={() => navigation.toggleDrawer()} />
                    <Text style={{ color: "#fafaf6", fontSize: 25, fontWeight: "bold" }}>
                        Home
                        </Text>
                    <Appbar.Action icon="logout" onPress={logout} />
                </Appbar.Header>

                {(!user && !Logout)
                    ?
                    <View style={[styles.container, { paddingTop: 70 }]}>
                        <Image
                            style={{
                                width: "100%",
                                height: 120,
                            }}
                            source={require('../assets/tax.png')}
                        />
                        <ActivityIndicator size="large" color="#1e6262" />
                        <Text style={{ marginTop: 20 }}>Getting your data</Text>
                    </View>
                    :
                    <>
                        <View style={styles.avatar}>
                            <Ionicons name="md-contact" color="white" size={70} onPress={() => navigation.navigate("Profile")} />
                            <Text style={{ fontSize: 30, color: 'white', textAlign: "center" }}>{name}</Text>
                            <TouchableOpacity>
                                <Text style={{ color: 'white' }} >View</Text>
                            </TouchableOpacity>

                        </View>

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
                                        <AntIcon name="qrcode" color="#1e6262" size={70}
                                            onPress={() => navigation.navigate("QRGen")}
                                        />
                                        <Text style={{ marginLeft: 10, fontSize: 10 }}
                                            onPress={() => navigation.navigate("QRGen")}>
                                            Generate QR
                                </Text>
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
                            <Banner />
                        </View>
                    </>
                }
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
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

});
