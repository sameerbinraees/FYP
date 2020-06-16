import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView } from "react-native";
import { Appbar, Avatar, Button, Card, Title, Paragraph, } from 'react-native-paper';

export default function Promotions({ navigation }) {

    const [array, setArray] = useState([])
    const [updated, setUpdated] = useState(false)

    let des, img, exp;
    let arr = []



    const fetchPromos = () => {

        fetch("http://192.168.43.145:3000/promotions/")
            .then(res => res.json())
            .then(data => {
                const a = (data.Promotions)
                //console.log(data.Promotions)
                for (let i = 0; i < a.length; i++) {
                    des = (a[i].description)
                    img = (a[i].image)
                    exp = (a[i].expired)

                    arr.push({
                        "description": des, "image": img, "expired": exp,
                    })
                    //console.log(arr)
                }
                setArray([...arr])

            })
            .catch((error) => {
                console.error(error);
            });

    }

    useEffect(() => {
        fetchPromos()
    }, [])

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Appbar.Header style={{ backgroundColor: "#14213D", }}>
                <Appbar.Action icon="arrow-left" onPress={() => navigation.goBack()} />
                <Text style={{ color: "#fafaf6", fontSize: 22, fontWeight: "bold" }}>
                    Promotions
                </Text>
            </Appbar.Header>

            <ScrollView showsVerticalScrollIndicator={true} style={{ marginTop: 15 }}>

                {array.map((item, key) => {
                    return (
                        <View key={key} style={{
                            padding: 10, marginTop: 15, marginBottom: 25,
                            marginLeft: 25, marginRight: 25, flexDirection: 'row',
                            backgroundColor: 'white', borderRadius: 10, justifyContent: 'center'
                        }}>
                            <View style={{ width: 250, alignItems: "center" }}>
                                {item.expired
                                    ?
                                    <View style={{ alignItems: "center" }}>
                                        <Text style={[styles.text, { marginBottom: 4, backgroundColor: "yellow" }]}>Expired</Text>
                                        <View pointerEvents="none" style={{ opacity: 0.3 }}>
                                            <Image style={{ width: 300, height: 200, borderRadius: 10 }}
                                                source={{ uri: `${item.image}` }}
                                            />
                                            <Paragraph style={styles.text}>{item.description}</Paragraph>

                                        </View>
                                    </View>
                                    :
                                    <View>
                                        <Image style={{ width: 300, height: 200, borderRadius: 10 }}
                                            source={{ uri: `${item.image}` }}
                                        />
                                        <Paragraph style={styles.text}>{item.description}</Paragraph>

                                    </View>
                                }


                            </View>
                        </View>
                    )
                }
                )}
            </ScrollView>
        </SafeAreaView>

    );
}


const styles = StyleSheet.create({

    text: {
        fontSize: 17, color: '#323232',
        marginTop: 10, marginBottom: 5, textAlign: "center"
    }
});
