import React, { useContext, useState, useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView, Modal, Alert } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Icon } from 'react-native-elements';
import { Appbar, Button, TextInput, ActivityIndicator } from 'react-native-paper';

import { UserContext } from "../UserContext";

export default function QRScan({ navigation }) {

    const { user } = useContext(UserContext);

    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [value, setValue] = useState()

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [ID, setID] = useState('')
    const [cnic, setCnic] = useState('');
    const [amount, setAmount] = useState('')
    const [scannerID, setScannerID] = useState('')

    const [error, setError] = useState(false);
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    useEffect(() => {
        formatData()
    }, [value, ID, name, email, cnic, scannerID]);


    const sendTransaction = () => {
        //console.log("Scanner ki id: " + scannerID + " Customer ki id: " + ID)
        setClicked(true)
        setError(false)
        fetch("http://192.168.43.145:3000/transactions/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                customerID: ID,
                vendorID: scannerID,
                amount: amount
            }),
        })
            .then(res => res.json())
            .then(async (data) => {
                console.log(data)
                try {
                    if (data.Error) {
                        setError(true);
                        setValue('')
                        Alert.alert(
                            "Error",
                            data.Error,
                            [
                                { text: "OK", onPress: () => console.log("OK Pressed") }
                            ],
                            { cancelable: false }
                        );
                        setModalVisible(!modalVisible)
                    }
                    else if (!data.Error) {
                        Alert.alert(
                            "Success",
                            "Transaction recorded successfully",
                            [
                                { text: "OK", onPress: () => console.log("OK Pressed") }
                            ],
                            { cancelable: false }
                        );
                        setScanned(false)
                        setModalVisible(!modalVisible)
                        setError(true);
                    }


                } catch (e) {
                    Alert.alert(
                        "Error",
                        "Error while recording the transaction",
                        [
                            { text: "OK", onPress: () => console.log("OK Pressed") }
                        ],
                        { cancelable: false }
                    );
                    setValue('')
                    setModalVisible(!modalVisible)
                    console.log("Error: ", e)
                }
            })
            .catch((error) => {
                Alert.alert(
                    "Error",
                    "Error while recording the transaction",
                    [
                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ],
                    { cancelable: false }
                );
                setValue('')
                setModalVisible(!modalVisible)
                console.error(error);
            });
    }

    const formatData = () => {
        if (value) {
            let arr = value.split(":")

            setID(arr[0])
            setName(arr[1])
            setCnic(arr[3])
            setEmail(arr[4])

            setScannerID(user._id)
            console.log(scannerID)
        }
    }

    const handleData = (data) => {
        setValue(data)
        setModalVisible(true)
        //console.log(value, data.split(" ").length)
    }

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        handleData(data)
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View
            style={{
                flex: 1,
                flexDirection: 'column',
            }}>

            <Appbar.Header style={{ backgroundColor: "#1e6262", alignItems: "center" }}>
                <Appbar.Action icon="arrow-left" onPress={() => navigation.goBack()} />
                <Text style={{ color: "#fafaf6", fontSize: 22, fontWeight: "bold" }}>
                    QR Code Scan
                </Text>
            </Appbar.Header>

            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={[StyleSheet.absoluteFill, { top: 100 }]}
            />
            <Modal
                animationType="fade"
                transparent={false}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Transaction was not successfull');
                    setScanned(false)
                    setModalVisible(!modalVisible)
                    setError(false);
                    //setModalVisible(!modalVisible);
                }}>

                <Appbar.Header style={{ backgroundColor: "#1e6262", alignItems: "center", justifyContent: 'center' }}>
                    <Text style={{ color: "#fafaf6", fontSize: 30, }}>
                        Confirm Details
                    </Text>
                </Appbar.Header>
                {(clicked && !error)
                    ?
                    <View style={styles.container}>
                        <ActivityIndicator size="large" color="#1e6262" />
                        <Text style={{ marginTop: 20 }}>Validating transaction...</Text>
                    </View>
                    :
                    <ScrollView showsVerticalScrollIndicator={false}>

                        <View style={{ marginTop: 22 }}>

                            <View style={styles.infoContainer}>
                                <Text style={[styles.text, { fontWeight: "200", fontSize: 32, textAlign: "center" }]}>
                                    {name}
                                </Text>
                                <Text style={[styles.text, { color: "#AEB5BC", fontSize: 14, textDecorationLine: 'underline' }]}>
                                    Name
                            </Text>
                            </View>

                            <View style={{ alignItems: "center", flex: 2, justifyContent: 'space-between', padding: 10 }}>
                                <Icon name="envelope"
                                    type='font-awesome'
                                    color='grey'
                                    size={30}
                                />
                                <View style={{ width: 250, alignItems: "center" }}>
                                    <Text style={[styles.text, { fontSize: 18 }]}>
                                        {email}
                                    </Text>
                                    <Text style={[styles.text, { color: "#AEB5BC", fontSize: 14, textDecorationLine: 'underline' }]}>
                                        Email
                                </Text>
                                </View>
                            </View>

                            <View style={{ alignItems: "center", flex: 2, justifyContent: 'space-between', padding: 10 }}>
                                <Icon name="address-card"
                                    type='font-awesome'
                                    color='grey'
                                    size={30}
                                />
                                <View style={{ width: 250, alignItems: "center" }}>
                                    <Text style={[styles.text, { fontSize: 18 }]}>
                                        {cnic}
                                    </Text>
                                    <Text style={[styles.text, { color: "#AEB5BC", fontSize: 14, textDecorationLine: 'underline' }]}>
                                        CNIC Number
                                </Text>
                                </View>
                            </View>
                            <TextInput
                                style={styles.textInput}
                                label='Amount'
                                underlineColor="transparent"
                                keyboardType='numeric'
                                maxLength={7}
                                placeholder="Enter Amount"
                                theme={{ colors: { primary: "#1e6262" } }}
                                value={amount}
                                onChangeText={text => setAmount(text)}
                            />
                        </View>

                        <Button style={styles.button}
                            onPress={() => {
                                sendTransaction()
                            }}
                            mode="contained">
                            Submit Transaction
                        </Button>
                    </ScrollView>
                }
            </Modal>


        </View>
    );
}

const styles = StyleSheet.create({

    textInput: {
        marginLeft: 15, marginRight: 15, marginTop: 15, marginBottom: 30,
        height: 60,
        backgroundColor: "#dedede"
    },
    button: {
        marginLeft: 15, marginRight: 15, backgroundColor: "#1e6262", borderRadius: 30
    },
    text: {
        //fontFamily: "normal",
        color: "#52575D"
    },
    infoContainer: {
        alignSelf: "center",
        alignItems: "center",
        marginTop: 16
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

});