import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, ActivityIndicator, AsyncStorage } from "react-native";
import { Appbar, Button, Card, Title, Paragraph, } from 'react-native-paper';
import AntIcon from "react-native-vector-icons/AntDesign";
import { Icon } from 'react-native-elements'

import { UserContext } from "../UserContext";


export default function Settings({ navigation }) {

    const { user } = useContext(UserContext);

    const logout = async () => {
        //setLogout(true)
        AsyncStorage.removeItem('token').then(() => {
            AsyncStorage.removeItem('type').then(() => {
                //setUser(null)
                navigation.navigate("Login")
            })
            //props.navigation.replace("Login");
        })
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#dbdbdb', }}>
            <Appbar.Header style={{ backgroundColor: "#14213D", }}>
                <Appbar.Action icon="arrow-left" onPress={() => navigation.goBack()} />
                <Text style={{ color: "#fafaf6", fontSize: 22, fontWeight: "bold" }}>
                    Settings
                </Text>
            </Appbar.Header>


            {(!user)
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
                    <Text style={{ marginTop: 20 }}>Please wait...</Text>
                </View>
                :

                <View style={{ paddingTop: "15%" }}>


                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate('FAQs')}>
                            <View style={{
                                flexDirection: "row", alignItems: 'center',
                                backgroundColor: "white"
                            }}
                            >
                                <TouchableOpacity onPress={() => navigation.navigate('FAQs')}>
                                    <Icon
                                        reverse
                                        name='help-outline'
                                        type='Feather'
                                        color="#14213D"
                                        size={20}
                                    />
                                </TouchableOpacity>
                                <View style={{ flex: 0.04 }} />
                                <TouchableOpacity onPress={() => navigation.navigate('FAQs')}>
                                    <Text style={{ color: "#14213D", fontSize: 17, }}>FAQ</Text>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    </View>




                    <View style={styles.lineStyle} />
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate('About')}>
                            <View style={{
                                flexDirection: "row", alignItems: 'center',
                                backgroundColor: "white"
                            }}
                            >
                                <TouchableOpacity onPress={() => navigation.navigate('About')}>
                                    <Icon
                                        reverse
                                        name='md-information-circle-outline'
                                        type='ionicon'
                                        color="#14213D"
                                        size={20}
                                    />
                                </TouchableOpacity>
                                <View style={{ flex: 0.04 }} />
                                <TouchableOpacity onPress={() => navigation.navigate('About')}>
                                    <Text style={{ color: "#14213D", fontSize: 17, }}>About</Text>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    </View>



                    <View style={{ paddingTop: "15%" }} />



                    <View style={styles.lineStyle} />
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                            <View style={{
                                flexDirection: "row", alignItems: 'center',
                                backgroundColor: "white"
                            }}
                            >
                                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                                    <Icon
                                        reverse
                                        name='md-contact'
                                        type='ionicon'
                                        color="#14213D"
                                        size={20}
                                    />
                                </TouchableOpacity>
                                <View style={{ flex: 0.04 }} />
                                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                                    <Text style={{ color: "#14213D", fontSize: 17, }}>View Profile</Text>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    </View>



                    <View style={{ paddingTop: "15%" }} />



                    <View style={styles.lineStyle} />
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate('Contact')}>
                            <View style={{
                                flexDirection: "row", alignItems: 'center',
                                backgroundColor: "white",
                            }}
                            >
                                <TouchableOpacity onPress={() => navigation.navigate('Contact')}>
                                    <Icon
                                        reverse
                                        name='md-call'
                                        type='ionicon'
                                        color="#14213D"
                                        size={20}
                                    />
                                </TouchableOpacity>
                                <View style={{ flex: 0.04 }} />
                                <TouchableOpacity onPress={() => navigation.navigate('Contact')}>
                                    <Text style={{ color: "#14213D", fontSize: 17, }}>Contact</Text>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    </View>




                    <View style={{ paddingTop: "15%" }} />



                    <View style={styles.lineStyle} />
                    <View>
                        <TouchableOpacity onPress={logout}>
                            <View style={{
                                flexDirection: "row", alignItems: 'center',
                                backgroundColor: "white"
                            }}
                            >
                                <TouchableOpacity onPress={logout}>
                                    <Icon
                                        reverse
                                        name='logout'
                                        type='material-community'
                                        color='red'
                                        size={20}
                                    />
                                </TouchableOpacity>
                                <View style={{ flex: 0.04 }} />
                                <TouchableOpacity onPress={logout}>
                                    <Text style={{ color: "red", fontSize: 17, }}>Logout</Text>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    </View>


                </View>
            }
        </SafeAreaView>

    );
}


const styles = StyleSheet.create({
    button: {
        backgroundColor: "#14213D",
    },
    lineStyle: {
        borderWidth: 0.5,
        borderColor: '#dbdbdb',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
