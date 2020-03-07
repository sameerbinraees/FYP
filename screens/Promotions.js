import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView } from "react-native";
import { Appbar, Avatar, Button, Card, Title, Paragraph, } from 'react-native-paper';

export default function Promotions({ navigation }) {
    var promos = [];

    for (let i = 0; i < 5; i++) {

        promos.push(
            <View key={i} style={{ marginBottom: 15, marginLeft: 15, marginRight: 15,  }}>
                <Card>
                    <Card.Content>
                        <Title>Promotion Name</Title>
                        <Paragraph>Promotion Details</Paragraph>
                    </Card.Content>
                    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                    <Card.Actions>
                        <Button style={styles.button}
                            mode="contained">
                            Show more
                        </Button>
                    </Card.Actions>
                </Card>
            </View>
        )
    }
    return (
        <SafeAreaView style={{flex:1}}>
            <Appbar.Header style={{ backgroundColor: "#1e6262", }}>
                <Appbar.Action icon="arrow-left" onPress={() => navigation.goBack()} />
                <Text style={{ color: "#fafaf6", fontSize: 22, fontWeight: "bold" }}>
                    Promotions
                </Text>
            </Appbar.Header>

            <ScrollView showsVerticalScrollIndicator={true} style={{marginTop: 15}}>

            {promos}

            </ScrollView>
        </SafeAreaView>

    );
}


const styles = StyleSheet.create({
    button: {
        backgroundColor: "#1e6262",
    },
});
