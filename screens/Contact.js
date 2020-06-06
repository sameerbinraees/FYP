import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Linking, Platform, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { Appbar, Button, Card, Title, Paragraph, } from 'react-native-paper';
import AntIcon from "react-native-vector-icons/AntDesign";
import { Icon } from 'react-native-elements'


export default function Contact({ navigation }) {

    const dialCall = () => {

        let phoneNumber = '';

        if (Platform.OS === 'android') {
            phoneNumber = 'tel:${1234567890}';
        }
        else {
            phoneNumber = 'telprompt:${1234567890}';
        }

        Linking.openURL(phoneNumber);
    };

    const sendEmail = () => {
        let url = `mailto:${"support@taxack.com"}`;
        Linking.openURL(url);
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#dbdbdb', }}>
            <Appbar.Header style={{ backgroundColor: "#14213D", }}>
                <Appbar.Action icon="arrow-left" onPress={() => navigation.goBack()} />
                <Text style={{ color: "#fafaf6", fontSize: 22, fontWeight: "bold" }}>
                    Contact
                </Text>
            </Appbar.Header>
            <View style={{ flex: 1, backgroundColor: '#dbdbdb', }}>
                <View style={styles.container}>

                    <Text style={styles.text}>
                        For further support you can reach us using any of the two options.
                    </Text>

                    <View style={{ paddingTop: "12%" }} />

                    <Text style={styles.text}>
                        You can <Text style={{ fontWeight: "bold" }}>call</Text> us on:
                    </Text>
                    <Text style={[styles.text, { fontWeight: "bold" }]}>
                        1234567890
                    </Text>

                    <Button style={styles.button}
                        onPress={dialCall}
                        mode="contained"
                        icon="phone"
                    >
                        Call
                    </Button>

                    <View style={{ paddingTop: "15%" }} />

                    <Text style={styles.text}>
                        Or you can <Text style={{ fontWeight: "bold" }}>Email</Text> us at:
                    </Text>

                    <Text style={[styles.text, { color: '#2d6abd', fontWeight: "bold" }]}>
                        support@taxack.com
                    </Text>
                    <Button style={styles.button}
                        onPress={sendEmail}
                        mode="contained"
                        icon="email-outline"
                    >
                        Email
                    </Button>
                </View>
            </View>
        </SafeAreaView>

    );
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingTop: "10%",
        backgroundColor: 'white',
        paddingBottom: "10%",

        margin: "5%",
        borderRadius: 10
    },
    lineStyle: {
        borderWidth: 0.5,
        borderColor: '#dbdbdb',
    },
    button: {
        marginLeft: "20%", marginRight: "20%",
        backgroundColor: "#FCA311", borderRadius: 30
    },
    text: {
        fontSize: 20,
        fontWeight: '500',
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,
        textAlign: 'center',
    },
});
