import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { Appbar, Button, Card, Title, Paragraph, List } from 'react-native-paper';
import AntIcon from "react-native-vector-icons/AntDesign";
import { Icon } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';


export default function About({ navigation }) {

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#dbdbdb', }}>
            <Appbar.Header style={{ backgroundColor: "#14213D", }}>
                <Appbar.Action icon="arrow-left" onPress={() => navigation.goBack()} />
                <Text style={{ color: "#fafaf6", fontSize: 22, fontWeight: "bold" }}>
                    About
                </Text>
            </Appbar.Header>

            <ScrollView>
                <View style={styles.container}>
                    <Paragraph style={styles.text}>
                        This application is developed by:
                </Paragraph>
                    <View style={styles.lineStyle} />

                    <List.AccordionGroup>
                        <List.Accordion title="Team" id="1" titleStyle={{ color: '#2F4858', fontWeight: 'bold' }}>
                            <List.Item
                                titleStyle={{ fontSize: 15, color: '#2F4858' }}
                                title="Muhammad Sameer Bin Raees"
                                description="Team Lead"
                            //left={() => <List.Icon icon="folder" />}
                            />
                            <List.Item
                                titleStyle={{ fontSize: 15, color: '#2F4858' }}
                                title="Rao Nouman Ahmad"
                            //left={() => <List.Icon color="#000" icon="folder" />}
                            />
                        </List.Accordion>
                    </List.AccordionGroup>

                    <View style={styles.lineStyle} />

                    <Paragraph style={styles.text}>
                        This application is the Final Year Project for their degree of Computer Science from National University
                        of Sciences and Technology (NUST).
                </Paragraph>
                    <Paragraph style={styles.text}>
                        Advisors for this project were:
                </Paragraph>
                    <View style={styles.lineStyle} />

                    <List.AccordionGroup>
                        <List.Accordion title="Advisors" id="2" titleStyle={{ color: '#2F4858', fontWeight: 'bold' }}>
                            <List.Item
                                titleStyle={{ fontSize: 15, color: '#2F4858' }}
                                title="Dr. Khawar Khurshid"
                                description="Advisor"
                            //left={() => <List.Icon icon="folder" />}
                            />
                            <List.Item
                                titleStyle={{ fontSize: 15, color: '#2F4858' }}
                                title="Dr. Ahmad Salman"
                                description="Co-Advisor"

                            //left={() => <List.Icon color="#000" icon="folder" />}
                            />
                        </List.Accordion>
                    </List.AccordionGroup>
                </View>
            </ScrollView>
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
        marginBottom: "5%",
        marginTop: "5%"
    },
    text: {
        fontSize: 15,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
    },
    container: {
        paddingTop: "5%",
        backgroundColor: 'white',
        paddingBottom: "5%",
        margin: "5%",
        borderRadius: 10
    },
});
