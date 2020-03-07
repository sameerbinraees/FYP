import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Dialog } from 'react-native-simple-dialogs';
import { Appbar } from 'react-native-paper';
import { Button } from 'react-native-paper';


export default function QRScan({ navigation }) {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [dialogVisible, setVisible] = useState(false);
    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    //const _showModal = () => setVisible(true);
    //const _hideModal = () => setVisible(true);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        //_showModal();
        //if (scanned == true) {
        //    setVisible(true)
        //    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
        //}

        alert(`Bar code data ${data} has been scanned!`);
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
            <Appbar.Header style={{ backgroundColor: "#1e6262", alignItems: "center", justifyContent: 'center' }}>
                <Text style={{ color: "#fafaf6", fontSize: 22, fontWeight: "bold" }}>
                    QR Code
                </Text>
            </Appbar.Header>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />

            {scanned && <Button
                mode="contained"
                style={{margin:2.5, backgroundColor:'#1e6262'}}
                onPress={() => setScanned(false)}>
                Tap to Scan Again
                </Button>}

                {scanned && <Button
                mode="contained"
                style={{ backgroundColor:'#1e6262'}}
                onPress={() => navigation.goBack()}>
                Go Back
                </Button>}

                {!scanned && <Button
                mode="contained"
                style={{marginTop:2.5, backgroundColor:'#1e6262'}}
                onPress={() => navigation.goBack()}>
                Go Back
                </Button>}

        </View>
    );
}