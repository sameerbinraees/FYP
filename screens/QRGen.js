import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native';
//import { Avatar, Header } from 'react-native-elements';
import { Appbar } from 'react-native-paper';
import QRCode from 'react-native-qrcode-svg';

import { UserContext } from "../UserContext";

export default function QRGen({ navigation }) {

    const { user } = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [cnic, setCnic] = useState('');
    const [ID, setID] = useState('')
    const [QRValue, setQRValue] = useState('')

    const renderDetails = () => {
        //console.log(user)
        setName(user.name)
        setEmail(user.email)
        setPhone(user.phone)
        setCnic(user.cnic)
        setID(user._id)
        setQRValue(ID + ":" + name + ":" + phone + ":" + cnic + ":" + email)
        console.log(JSON.stringify(QRValue))
        //console.log(QRValue.split(" "))
    }

    useEffect(() => {
        renderDetails();
    }, [name, email, phone, cnic, QRValue]);

    return (
        <View>
            <Appbar.Header style={{ backgroundColor: "#1e6262", alignItems: "center" }}>
                <Appbar.Action icon="arrow-left" onPress={() => navigation.goBack()} />
                <Text style={{ color: "#fafaf6", fontSize: 22, fontWeight: "bold" }}>
                    QR Code
                </Text>
            </Appbar.Header>
            {QRValue ?
                <View style={{
                    marginTop: "80%",
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <QRCode size={300}
                        value={QRValue}
                    />
                </View>
                : <View></View>
            }

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

//export default function App() {
//
//    return (
//        <NavigationNativeContainer>
//            <Stack.Navigator headerMode="none">
//                <Stack.Screen name="Login" component={LoginScreen} />
//                <Stack.Screen name="Signup" component={SignupScreen} />
//                <Stack.Screen name="Home" component={HomeScreen} />
//
//            </Stack.Navigator>
//        </NavigationNativeContainer>
//    );
//}