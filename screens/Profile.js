import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView } from "react-native";
import { Appbar } from 'react-native-paper';

import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Icon } from 'react-native-elements';

export default function Profile({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <Appbar.Header style={{ backgroundColor: "#1e6262", alignItems: "center" }}>
                <Appbar.Action icon="arrow-left" onPress={() => navigation.goBack()} />
                <Text style={{ color: "#fafaf6", fontSize: 22, fontWeight: "bold" }}>
                    Profile
                </Text>
            </Appbar.Header>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ alignItems: "center", flex: 2, justifyContent: 'space-between', padding: 10 }}>
                </View>



                <View style={{ alignSelf: "center" }}>
                    <View style={styles.profileImage}>
                        <Image source={require("../assets/profile-pic.jpg")} style={styles.image} resizeMode="center"></Image>
                    </View>


                    <View style={styles.add}>
                        <Icon name={'edit'} containerStyle={styles.icon} size={24} color="#DFD8C8" style={{ marginTop: 5, marginLeft: 2 }} onPress={console.log('I was clicked')} />

                    </View>
                </View>

                <View style={styles.infoContainer}>
                    <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>Sameer</Text>
                    <Text style={[styles.text, { color: "#AEB5BC", fontSize: 14, textDecorationLine: 'underline' }]}>Islamabad</Text>
                </View>



                <View style={{ alignItems: "center", flex: 2, justifyContent: 'space-between', padding: 10 }}>
                    <Icon name="md-call"
                        type='ionicon'
                        color='grey'
                        size={30}
                    />
                    <View style={{ width: 250, alignItems: "center" }}>
                        <Text style={[styles.text, { fontSize: 18 }]}>+92-456123789</Text>
                        <Text style={[styles.text, { color: "#AEB5BC", fontSize: 14, textDecorationLine: 'underline' }]}>Mobile</Text>
                    </View>
                </View>


                <View style={{ alignItems: "center", flex: 2, justifyContent: 'space-between', padding: 10 }}>
                    <Icon name="envelope"
                        type='font-awesome'
                        color='grey'
                        size={30}
                    />
                    <View style={{ width: 250, alignItems: "center" }}>
                        <Text style={[styles.text, { fontSize: 18 }]}>sammy@gmail.com</Text>
                        <Text style={[styles.text, { color: "#AEB5BC", fontSize: 14, textDecorationLine: 'underline' }]}>Email</Text>
                    </View>
                </View>

                <View style={{ alignItems: "center", flex: 2, justifyContent: 'space-between', padding: 10 }}>
                    <Icon name="address-card"
                        type='font-awesome'
                        color='grey'
                        size={30}
                    />
                    <View style={{ width: 250, alignItems: "center" }}>
                        <Text style={[styles.text, { fontSize: 18 }]}>31101-123456789</Text>
                        <Text style={[styles.text, { color: "#AEB5BC", fontSize: 14, textDecorationLine: 'underline' }]}>CNIC Number</Text>
                    </View>
                </View>
            </ScrollView>

        </SafeAreaView>


    );
}






const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF"
    },
    text: {
        fontFamily: "normal",
        color: "#52575D"
    },
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },
    image: {
        flex: 1,
        height: undefined,
        width: undefined
    },
    titleBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 24,
        marginHorizontal: 16
    },
    subText: {
        fontSize: 12,
        color: "#AEB5BC",
        textTransform: "uppercase",
        fontWeight: "500"
    },
    profileImage: {
        width: 200,
        height: 200,
        borderRadius: 100,
        overflow: "hidden"
    },
    dm: {
        backgroundColor: "#41444B",
        position: "absolute",
        top: 20,
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    active: {
        backgroundColor: "#34FFB9",
        position: "absolute",
        bottom: 28,
        left: 10,
        padding: 4,
        height: 20,
        width: 20,
        borderRadius: 10
    },
    add: {
        backgroundColor: "#41444B",
        position: "absolute",
        bottom: 0,
        right: 0,
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center"
    },
    infoContainer: {
        alignSelf: "center",
        alignItems: "center",
        marginTop: 16
    },
    statsContainer: {
        flexDirection: "row",
        alignSelf: "center",
        marginTop: 32
    },
    statsBox: {
        alignItems: "center",
        flex: 1
    },
    mediaImageContainer: {
        width: 180,
        height: 200,
        borderRadius: 12,
        overflow: "hidden",
        marginHorizontal: 10
    },
    mediaCount: {
        backgroundColor: "#41444B",
        position: "absolute",
        top: "50%",
        marginTop: -50,
        marginLeft: 30,
        width: 100,
        height: 100,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 12,
        shadowColor: "rgba(0, 0, 0, 0.38)",
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 20,
        shadowOpacity: 1
    },
    recent: {
        marginLeft: 78,
        marginTop: 32,
        marginBottom: 6,
        fontSize: 10
    },
    recentItem: {
        flexDirection: "row",
        alignItems: "flex-start",
        marginBottom: 16
    },
    activityIndicator: {
        backgroundColor: "#CABFAB",
        padding: 4,
        height: 12,
        width: 12,
        borderRadius: 6,
        marginTop: 3,
        marginRight: 20
    }
});
