import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight, ImageBackground, AsyncStorage, Image, } from 'react-native';
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
                //setUser(null)
                navigation.navigate("Login")
            })
            //props.navigation.replace("Login");
        })
    }

    const fetchDetails = async () => {

        setToken(await AsyncStorage.getItem('token'))
        setType(await AsyncStorage.getItem('type'))
        //console.log("User is: ", user.name)
        if (user) {
            setName(user.name)
        }
        if (!user) {
            if (token && type) {
                fetch("http://192.168.43.145:3000/" + type + "s/token", {
                    headers: new Headers({
                        Authorization: "Bearer " + token,
                        Type: type,
                    })
                })
                    .then(res => res.json())
                    .then(data => {
                        setUser(data);
                        setName(data.name)
                    })
            }
        }
    }

    useEffect(() => {
        fetchDetails();
    }, [token, type, name]);

    return (
        <View style={styles.containerMain}>

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
                    <ActivityIndicator size="large" color="#14213D" />
                    <Text style={{ marginTop: 20 }}>Getting your data</Text>
                </View>
                :

                <ImageBackground source={require('../assets/bg-home.png')} style={{ width: '100%', height: '100%' }}>
                    <Appbar.Header style={{ backgroundColor: "white", justifyContent: "space-between" }}>
                        <Appbar.Action icon="menu" color="#14213D" onPress={() => navigation.toggleDrawer()} />
                        <Text style={{ color: "#14213D", fontSize: 25, fontWeight: "bold" }}>
                            Home
                        </Text>
                        <Appbar.Action icon="logout" color="red" onPress={logout} />
                    </Appbar.Header>




















                    <>

                        <View style={{ height: "37%", alignItems: 'center', justifyContent: 'center', }}>
                            {<Banner />}
                        </View>

                        <View style={styles.avatar}>
                            <Text style={{
                                fontSize: 22, color: "#403F4C",
                                textAlign: "center", textDecorationLine: 'underline',
                                paddingBottom: 7
                            }}>
                                Logged in as:
                            </Text>

                            <View style={{
                                alignItems: 'center',
                                flexDirection: 'row',
                                justifyContent: 'center',

                            }}>
                                <View style={{ flex: 1 }}></View>
                                <Ionicons style={{ flex: 2 }} name="md-contact"
                                    color="#403F4C" size={70}
                                    onPress={() => navigation.navigate("Profile")} />
                                <Text style={{ flex: 4, fontSize: 20, color: '#403F4C', textAlign: "center" }}>{name}</Text>
                                <View style={{ flex: 1 }}></View>
                            </View>
                        </View>
























                        <View style={{
                            height: 150, backgroundColor: "white",
                            opacity: 0.9,
                            marginLeft: 10, marginRight: 10, borderRadius: 10,
                            marginTop: 25
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
                                    <TouchableHighlight onPress={() => navigation.navigate("QRGen")}>

                                        <Icon
                                            name='qrcode'
                                            color='#14213D'
                                            type='antdesign'
                                            size={70}
                                            onPress={() => navigation.navigate("QRGen")}
                                        />

                                    </TouchableHighlight>

                                    <Text style={{ marginLeft: 10, fontSize: 10 }}
                                        onPress={() => navigation.navigate("QRGen")}>
                                        Generate QR
                                </Text>

                                </View>


                                <View
                                    style={{
                                        margin: 15,
                                        alignItems: 'center',
                                        justifyContent: 'center',

                                    }}
                                >
                                    <TouchableHighlight
                                        onPress={() => navigation.navigate("QRScan")}>
                                        <Icon
                                            name='ios-qr-scanner'
                                            color='#14213D'
                                            type='ionicon'
                                            size={70}
                                            onPress={() => navigation.navigate("QRScan")}
                                        />
                                    </TouchableHighlight>

                                    <TouchableHighlight>
                                        <Text style={{ fontSize: 10 }} onPress={() => navigation.navigate("QRScan")}>QR Scan</Text>
                                    </TouchableHighlight>
                                </View>



                                <View
                                    style={{
                                        margin: 15,
                                        alignItems: 'center',
                                        justifyContent: 'center',

                                    }}
                                >
                                    <TouchableHighlight
                                        onPress={() => navigation.navigate("Transactions")}>
                                        <Icon
                                            name='history'
                                            color='#14213D'
                                            type="material-community"
                                            size={70}
                                            onPress={() => navigation.navigate("Transactions")}
                                        />
                                    </TouchableHighlight>

                                    <TouchableHighlight>
                                        <Text style={{ fontSize: 10 }} onPress={() => navigation.navigate("Transactions")}>View Transactions</Text>
                                    </TouchableHighlight>
                                </View>

                            </View>

                        </View>
                    </>
                </ImageBackground>
            }
        </View >
    );
}

const styles = StyleSheet.create({
    avatar: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        paddingBottom: 10,
        paddingTop: 10,
        marginLeft: 10,
        marginRight: 10,
        height: 150,
        opacity: 0.96

    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerMain: {
        flex: 1,

    },
    lineStyle: {
        borderWidth: 0.5,
        borderColor: '#dbdbdb',
    },



});
