import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Appbar, } from 'react-native-paper';

export default function Transactions({ navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <Appbar.Header style={{ backgroundColor: "#1e6262", alignItems: "center" }}>
                <Appbar.Action icon="arrow-left" onPress={() => navigation.goBack()} />
                <Text style={{ color: "#fafaf6", fontSize: 22, fontWeight: "bold" }}>
                    Transactions
                </Text>
            </Appbar.Header>

            <ScrollView showsVerticalScrollIndicator={true}>
                <View style={{ padding: 10, marginTop:15, marginBottom: 25, marginLeft: 25, marginRight: 25, flexDirection: 'row', backgroundColor: '#7DA49A', borderRadius: 15, justifyContent: 'center' }}>
                    <View style={{ width: 250, alignItems: "center" }}>
                        <Text style={[styles.text, { fontSize: 18, color: '#0C0C0C' }]}>Invoice# 123456</Text>
                        <Text style={[styles.text, { fontSize: 14, color: '#323232' }]}>Item: 123</Text>
                        <Text style={[styles.text, { fontSize: 14, color: '#323232' }]}>Shop: 789 Main Market</Text>
                        <Text style={[styles.text, { fontSize: 14, color: '#323232' }]}>Date: 789 12-2-19</Text>

                    </View>
                </View>




                <View style={{ padding: 10, marginBottom: 25, marginLeft: 25, marginRight: 25, flexDirection: 'row', backgroundColor: '#7DA49A', borderRadius: 15, justifyContent: 'center' }}>
                    <View style={{ width: 250, alignItems: "center" }}>
                        <Text style={[styles.text, { fontSize: 18, color: '#0C0C0C' }]}>Invoice# 123456</Text>
                        <Text style={[styles.text, { fontSize: 14, color: '#323232' }]}>Item: 123</Text>
                        <Text style={[styles.text, { fontSize: 14, color: '#323232' }]}>Shop: 789 Main Market</Text>
                        <Text style={[styles.text, { fontSize: 14, color: '#323232' }]}>Date: 789 12-2-19</Text>

                    </View>
                </View>




                <View style={{ padding: 10, marginBottom: 25, marginLeft: 25, marginRight: 25, flexDirection: 'row', backgroundColor: '#7DA49A', borderRadius: 15, justifyContent: 'center' }}>
                    <View style={{ width: 250, alignItems: "center" }}>
                        <Text style={[styles.text, { fontSize: 18, color: '#0C0C0C' }]}>Invoice# 123456</Text>
                        <Text style={[styles.text, { fontSize: 14, color: '#323232' }]}>Item: 123</Text>
                        <Text style={[styles.text, { fontSize: 14, color: '#323232' }]}>Shop: 789 Main Market</Text>
                        <Text style={[styles.text, { fontSize: 14, color: '#323232' }]}>Date: 789 12-2-19</Text>

                    </View>
                </View>




                <View style={{ padding: 10, marginBottom: 25, marginLeft: 25, marginRight: 25, flexDirection: 'row', backgroundColor: '#7DA49A', borderRadius: 15, justifyContent: 'center' }}>
                    <View style={{ width: 250, alignItems: "center" }}>
                        <Text style={[styles.text, { fontSize: 18, color: '#0C0C0C' }]}>Invoice# 123456</Text>
                        <Text style={[styles.text, { fontSize: 14, color: '#323232' }]}>Item: 123</Text>
                        <Text style={[styles.text, { fontSize: 14, color: '#323232' }]}>Shop: 789 Main Market</Text>
                        <Text style={[styles.text, { fontSize: 14, color: '#323232' }]}>Date: 789 12-2-19</Text>

                    </View>
                </View>




                <View style={{ padding: 10, marginBottom: 25, marginLeft: 25, marginRight: 25, flexDirection: 'row', backgroundColor: '#7DA49A', borderRadius: 15, justifyContent: 'center' }}>
                    <View style={{ width: 250, alignItems: "center" }}>
                        <Text style={[styles.text, { fontSize: 18, color: '#0C0C0C' }]}>Invoice# 123456</Text>
                        <Text style={[styles.text, { fontSize: 14, color: '#323232' }]}>Item: 123</Text>
                        <Text style={[styles.text, { fontSize: 14, color: '#323232' }]}>Shop: 789 Main Market</Text>
                        <Text style={[styles.text, { fontSize: 14, color: '#323232' }]}>Date: 789 12-2-19</Text>

                    </View>
                </View>




                <View style={{ padding: 10, marginBottom: 25, marginLeft: 25, marginRight: 25, flexDirection: 'row', backgroundColor: '#7DA49A', borderRadius: 15, justifyContent: 'center' }}>
                    <View style={{ width: 250, alignItems: "center" }}>
                        <Text style={[styles.text, { fontSize: 18, color: '#0C0C0C' }]}>Invoice# 123456</Text>
                        <Text style={[styles.text, { fontSize: 14, color: '#323232' }]}>Item: 123</Text>
                        <Text style={[styles.text, { fontSize: 14, color: '#323232' }]}>Shop: 789 Main Market</Text>
                        <Text style={[styles.text, { fontSize: 14, color: '#323232' }]}>Date: 789 12-2-19</Text>

                    </View>
                </View>




                <View style={{ padding: 10, marginBottom: 25, marginLeft: 25, marginRight: 25, flexDirection: 'row', backgroundColor: '#7DA49A', borderRadius: 15, justifyContent: 'center' }}>
                    <View style={{ width: 250, alignItems: "center" }}>
                        <Text style={[styles.text, { fontSize: 18, color: '#0C0C0C' }]}>Invoice# 123456</Text>
                        <Text style={[styles.text, { fontSize: 14, color: '#323232' }]}>Item: 123</Text>
                        <Text style={[styles.text, { fontSize: 14, color: '#323232' }]}>Shop: 789 Main Market</Text>
                        <Text style={[styles.text, { fontSize: 14, color: '#323232' }]}>Date: 789 12-2-19</Text>

                    </View>
                </View>




                <View style={{ padding: 10, marginBottom: 25, marginLeft: 25, marginRight: 25, flexDirection: 'row', backgroundColor: '#7DA49A', borderRadius: 15, justifyContent: 'center' }}>
                    <View style={{ width: 250, alignItems: "center" }}>
                        <Text style={[styles.text, { fontSize: 18, color: '#0C0C0C' }]}>Invoice# 123456</Text>
                        <Text style={[styles.text, { fontSize: 14, color: '#323232' }]}>Item: 123</Text>
                        <Text style={[styles.text, { fontSize: 14, color: '#323232' }]}>Shop: 789 Main Market</Text>
                        <Text style={[styles.text, { fontSize: 14, color: '#323232' }]}>Date: 789 12-2-19</Text>

                    </View>
                </View>




                <View style={{ padding: 10, marginBottom: 25, marginLeft: 25, marginRight: 25, flexDirection: 'row', backgroundColor: '#7DA49A', borderRadius: 15, justifyContent: 'center' }}>
                    <View style={{ width: 250, alignItems: "center" }}>
                        <Text style={[styles.text, { fontSize: 18, color: '#0C0C0C' }]}>Invoice# 123456</Text>
                        <Text style={[styles.text, { fontSize: 14, color: '#323232' }]}>Item: 123</Text>
                        <Text style={[styles.text, { fontSize: 14, color: '#323232' }]}>Shop: 789 Main Market</Text>
                        <Text style={[styles.text, { fontSize: 14, color: '#323232' }]}>Date: 789 12-2-19</Text>

                    </View>
                </View>




                <View style={{ padding: 10, marginBottom: 25, marginLeft: 25, marginRight: 25, flexDirection: 'row', backgroundColor: '#7DA49A', borderRadius: 15, justifyContent: 'center' }}>
                    <View style={{ width: 250, alignItems: "center" }}>
                        <Text style={[styles.text, { fontSize: 18, color: '#0C0C0C' }]}>Invoice# 123456</Text>
                        <Text style={[styles.text, { fontSize: 14, color: '#323232' }]}>Item: 123</Text>
                        <Text style={[styles.text, { fontSize: 14, color: '#323232' }]}>Shop: 789 Main Market</Text>
                        <Text style={[styles.text, { fontSize: 14, color: '#323232' }]}>Date: 789 12-2-19</Text>

                    </View>
                </View>




                <View style={{ padding: 10, marginBottom: 25, marginLeft: 25, marginRight: 25, flexDirection: 'row', backgroundColor: '#7DA49A', borderRadius: 15, justifyContent: 'center' }}>
                    <View style={{ width: 250, alignItems: "center" }}>
                        <Text style={[styles.text, { fontSize: 18, color: '#0C0C0C' }]}>Invoice# 123456</Text>
                        <Text style={[styles.text, { fontSize: 14, color: '#323232' }]}>Item: 123</Text>
                        <Text style={[styles.text, { fontSize: 14, color: '#323232' }]}>Shop: 789 Main Market</Text>
                        <Text style={[styles.text, { fontSize: 14, color: '#323232' }]}>Date: 789 12-2-19</Text>

                    </View>
                </View>




                <View style={{ padding: 10, marginBottom: 25, marginLeft: 25, marginRight: 25, flexDirection: 'row', backgroundColor: '#7DA49A', borderRadius: 15, justifyContent: 'center' }}>
                    <View style={{ width: 250, alignItems: "center" }}>
                        <Text style={[styles.text, { fontSize: 18, color: '#0C0C0C' }]}>Invoice# 123456</Text>
                        <Text style={[styles.text, { fontSize: 14, color: '#323232' }]}>Item: 123</Text>
                        <Text style={[styles.text, { fontSize: 14, color: '#323232' }]}>Shop: 789 Main Market</Text>
                        <Text style={[styles.text, { fontSize: 14, color: '#323232' }]}>Date: 789 12-2-19</Text>

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
        marginTop: 10,
        marginBottom: 30
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
