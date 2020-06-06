import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { Appbar, Button, Card, Title, Paragraph, } from 'react-native-paper';
import AntIcon from "react-native-vector-icons/AntDesign";
import { Icon } from 'react-native-elements'


export default function Help({ navigation }) {

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#dbdbdb', }}>
            <Appbar.Header style={{ backgroundColor: "#14213D", }}>
                <Appbar.Action icon="arrow-left" onPress={() => navigation.goBack()} />
                <Text style={{ color: "#fafaf6", fontSize: 22, fontWeight: "bold" }}>
                    Contact
                </Text>
            </Appbar.Header>







        </SafeAreaView>

    );
}


const styles = StyleSheet.create({
    button: {
        backgroundColor: "#1e6262",
    },
    lineStyle: {
        borderWidth: 0.5,
        borderColor: '#dbdbdb',
    }
});
