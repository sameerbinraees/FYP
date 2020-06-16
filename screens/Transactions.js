import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, SafeAreaView, AsyncStorage, ScrollView, Image } from "react-native";
import { Appbar, Button, ActivityIndicator } from 'react-native-paper';

import { UserContext } from "../UserContext";

export default function Transactions({ navigation }) {

    const { user } = useContext(UserContext);
    const [ID, setID] = useState('')
    const [type, setType] = useState('')
    const [array, setArray] = useState([])
    const [next, setNext] = useState(false)
    const [prev, setPrev] = useState(false)
    const [page, setPage] = useState(1)
    const [clicked, setClicked] = useState(false)

    let am, created, c_name, v_name, t_id, day_date, time, d;
    let arr = []


    const fetchDetails = async () => {
        setType(await AsyncStorage.getItem('type'));
        setID(user._id)
        if (type && ID) {
            setArray('')
            fetch("http://192.168.43.145:3000/transactions/" + type + "/" + ID + "?page=" + page + "&limit=3")
                .then(res => res.json())
                .then(data => {
                    //if (data.result == undefined)
                    //console.log(data)
                    const a = (data.result.Transaction)
                    if (data.next)
                        setNext(true)
                    else
                        setNext(false)

                    if (data.previous)
                        setPrev(true)
                    else
                        setPrev(false)

                    for (let i = 0; i < a.length; i++) {
                        am = (a[i].amount)
                        created = (a[i].createdAt)
                        c_name = (a[i].customer.name)
                        v_name = (a[i].vendor.name)
                        t_id = (a[i].id)

                        d = new Date(created);
                        day_date = d.toDateString()
                        time = d.toTimeString()

                        arr.push({
                            "amount": am, "day_date": day_date, "time": time, "customer": c_name,
                            "vendor": v_name, "transcationID": t_id
                        })
                    }
                    setArray([...arr])
                    //console.log(array.)
                })
        }
    }
    useEffect(() => {
        fetchDetails();
    }, [ID, type, page,]);

    return (
        <SafeAreaView style={styles.container}>
            <Appbar.Header style={{ backgroundColor: "#14213D", alignItems: "center" }}>
                <Appbar.Action icon="arrow-left" onPress={() => navigation.goBack()} />
                <Text style={{ color: "#fafaf6", fontSize: 22, fontWeight: "bold" }}>
                    Transactions
                </Text>
            </Appbar.Header>

            {(!array)
                ?
                <View style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Image
                        style={{
                            width: 150,
                            height: 100,
                            marginBottom: 10
                        }}
                        source={require('../assets/activity-indicator.png')}
                    />
                    <ActivityIndicator size="small" color="#14213D" />
                    <Text style={{ marginTop: 20 }}>Fetching your transactions</Text>
                </View>
                :
                <ScrollView showsVerticalScrollIndicator={true}
                    contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
                    {(array.length != 0 )
                        ?
                        array.map((item, key) => {
                            return (
                                <View key={key} style={{
                                    padding: 10, marginTop: 15, marginBottom: 25,
                                    marginLeft: 25, marginRight: 25, flexDirection: 'row',
                                    backgroundColor: 'white', borderRadius: 10, justifyContent: 'center'
                                }}>
                                    <View style={{ width: 250, alignItems: "center", marginTop: 10, marginBottom: 10 }}>
                                        <Text style={[styles.text, { fontSize: 18, color: '#0C0C0C', fontWeight: "bold" }]}>Transaction ID:</Text>
                                        <Text style={[styles.text, { fontSize: 15, color: '#323232' }]}>{item.transcationID}</Text>

                                        <View style={styles.lineStyle} />

                                        <Text style={[styles.text, { fontSize: 18, color: '#323232', fontWeight: "bold" }]}>Amount:</Text>
                                        <Text style={[styles.text, { fontSize: 18, color: '#323232', fontWeight: "bold" }]}>{item.amount}</Text>
                                        <Text style={[styles.text, { fontSize: 18, color: '#323232', fontWeight: "bold" }]}>Customer: </Text>
                                        <Text style={[styles.text, { fontSize: 18, color: '#323232' }]}>{item.customer}</Text>
                                        <Text style={[styles.text, { fontSize: 18, color: '#323232', fontWeight: "bold" }]}>Vendor: </Text>
                                        <Text style={[styles.text, { fontSize: 18, color: '#323232' }]}>{item.vendor}</Text>
                                        <Text style={[styles.text, { fontSize: 18, color: '#323232', fontWeight: "bold" }]}>Day/Date: </Text>
                                        <Text style={[styles.text, { fontSize: 18, color: '#323232' }]}>{item.day_date}</Text>
                                        <Text style={[styles.text, { fontSize: 18, color: '#323232', fontWeight: "bold" }]}>Time: </Text>
                                        <Text style={[styles.text, { fontSize: 18, color: '#323232' }]}>{item.time}</Text>
                                    </View>
                                </View>
                            )
                        }
                        )
                        :
                        <View style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Text style={[styles.text,
                            { fontSize: 18, color: '#323232', fontWeight: "bold" }]}>
                                No transactions to show right now.
                            </Text>
                        </View>
                    }

                    {<View style={{ flexDirection: "row", marginBottom: 35 }}>
                        {
                            next ?
                                <View style={{ position: "absolute", right: 0, }}>
                                    <Button style={[styles.button]
                                    } mode="contained"
                                        onPress={() => {
                                            setPage(page + 1)
                                            setClicked(true)
                                        }}
                                    >
                                        Next
                            </Button>
                                </View>
                                :
                                <Text></Text>}
                        {prev ?
                            <Button style={styles.button} mode="contained"
                                onPress={() => {
                                    setPage(page - 1)
                                    setClicked(true)
                                }}
                            >
                                Previous
                        </Button>
                            :
                            <Text></Text>
                        }
                    </View>
                    }
                </ScrollView>
            }
        </SafeAreaView>
    );
}






const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#d6d6d6",
    },
    text: {
        fontFamily: "normal",
        color: "#403F4C",
        textAlign: "center"
    },
    button: {
        marginLeft: 15, marginRight: 15,
        backgroundColor: "#FCA311", borderRadius: 30
    },
    lineStyle: {
        borderWidth: 0.5,
        borderColor: '#FCA311',
        marginBottom: "5%",
        marginTop: "5%",
        width: 200
    },

});
