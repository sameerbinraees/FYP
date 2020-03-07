import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native';
//import { Avatar, Header } from 'react-native-elements';
import { Appbar } from 'react-native-paper';
import QRCode from 'react-native-qrcode-svg';


export default function QRGen({ navigation }) {
    return (
        <View>
            <Appbar.Header style={{ backgroundColor: "#1e6262", alignItems: "center" }}>
                <Appbar.Action icon="arrow-left" onPress={() => navigation.goBack()} />
                <Text style={{ color: "#fafaf6", fontSize: 22, fontWeight: "bold" }}>
                    QR Code
                </Text>
            </Appbar.Header>
            <View style={{
                marginTop: "80%",
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <QRCode size={300}
                    value="http://awesome.link.qr"
                />
            </View>
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