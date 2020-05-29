import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Alert, SafeAreaView, } from 'react-native';
import { Appbar, Button, TextInput, } from 'react-native-paper';

export default function Signup(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //const [type, setType] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [cnic, setCnic] = useState('');
    const [error, setError] = useState('');

    const createAlert = (err) =>
        Alert.alert(
            "Error",
            err,
            [
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: false }
        );

    function sendCredentials() {
        if (!email) {
            createAlert("Email is required")
        }
        else if (!password) {
            createAlert("Password is required")
        }
        else if (!name) {
            createAlert("Name is required")
        }
        else if (!phone || phone.length != 11) {
            createAlert("Enter valid phone number")
        }
        else if (!cnic || cnic.length != 13) {
            createAlert("Enter valid CNIC")
        }
        else {
            fetch("http://192.168.1.15:3000/customers/signup", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                    name: name,
                    phone: phone,
                    cnic: cnic,
                }),
            })
                .then(res => res.json())
                .then(async (data) => {
                    //console.log(data)
                    try {
                        if (data.Error) {
                            setError(data.Error);
                            console.log(error)
                            if (error.includes("E11000")) {
                                if (error.includes("email"))
                                    Alert.alert(
                                        "Already an account exists with email: " + email
                                    )
                                if (error.includes("cnic"))
                                    Alert.alert(
                                        "Already an account exists with cnic: " + cnic
                                    )
                            }

                        }
                        else if (!data.Error) {
                            setError('');

                            //await AsyncStorage.setItem("token", data.token);
                            //console.log(data.token)
                            //await AsyncStorage.setItem("type", type);
                            Alert.alert(
                                "You have successfully signed up, now enter your credentials to login"
                            )
                            //props.navigation.replace('Login');
                        }
                    } catch (e) {
                        console.log("Error: ", e)
                    }
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }

    return (

        <View style={styles.container}>

            <ImageBackground source={require('../assets/LoginBG.jpg')} style={styles.im_bg}>

                <Appbar.Header style={{ backgroundColor: "white", justifyContent: "center" }}>

                </Appbar.Header>

                <View style={{
                    borderRadius: 40,
                    backgroundColor: "#ededed",
                    margin: "10%",
                    marginTop: "4%"
                }}>

                    <Text style={{ fontSize: 28, textAlign: "center", marginTop: "8%", color: "#1e6262" }}>
                        Signup as
                    </Text>

                    <Text style={{ fontSize: 30, fontWeight: "bold", textAlign: "center", marginBottom: "2%", color: "#1e6262" }}>
                        Customer
                    </Text>

                    <Text style={{ fontSize: 20, textAlign: "center", color: "grey" }}>
                        Want to signup as Vendor?
                    </Text>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 20, textAlign: "center", marginBottom: "6%", color: "grey", fontWeight: 'bold' }}
                            onPress={() => props.navigation.navigate("SignupVendor")}
                        >
                            Click here
                        </Text>
                    </TouchableOpacity>

                    <TextInput
                        style={styles.textInput}
                        label='Email'
                        underlineColor="transparent"
                        placeholder="Enter your Email"
                        theme={{ colors: { primary: "#1e6262" } }}
                        value={email}
                        onChangeText={text => setEmail(text)}
                    />

                    <TextInput
                        style={styles.textInput}
                        label='Password'
                        underlineColor="transparent"
                        placeholder="Enter your Password"
                        secureTextEntry={true}
                        theme={{ colors: { primary: "#1e6262" } }}
                        value={password}
                        onChangeText={text => setPassword(text)}
                    />

                    <TextInput
                        style={styles.textInput}
                        label='Name'
                        underlineColor="transparent"
                        placeholder="Enter your Full Name"
                        theme={{ colors: { primary: "#1e6262" } }}
                        value={name}
                        onChangeText={text => setName(text)}
                    />

                    <TextInput
                        style={styles.textInput}
                        label='Phone Number'
                        underlineColor="transparent"
                        keyboardType='numeric'
                        maxLength={11}
                        placeholder="Enter your Mobile Number"
                        theme={{ colors: { primary: "#1e6262" } }}
                        value={phone}
                        onChangeText={text => setPhone(text)}
                    />


                    <TextInput
                        style={styles.textInput}
                        label='CNIC'
                        underlineColor="transparent"
                        keyboardType='numeric'
                        maxLength={13}
                        placeholder="Enter your CNIC"
                        theme={{ colors: { primary: "#1e6262" } }}
                        value={cnic}
                        onChangeText={text => setCnic(text)}
                    />

                    <Button style={styles.button}
                        onPress={sendCredentials}
                        mode="contained">
                        Sign Up
                        </Button>

                    <Text style={{ fontSize: 20, textAlign: "center", marginTop: "3%", color: "grey" }}
                    >Already have an account?</Text>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 20, textAlign: "center", marginBottom: "8%", color: "grey", fontWeight: 'bold' }}
                            onPress={() => props.navigation.navigate("Login")}
                        >
                            Sign In
                        </Text>
                    </TouchableOpacity>

                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    avatar: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    textInput: {
        marginLeft: 15, marginRight: 15, marginBottom: 15,
        borderTopStartRadius: 30, borderTopEndRadius: 30,
        borderRadius: 30, overflow: 'hidden', height: 50,
        backgroundColor: "#dedede"

    },
    button: {
        marginLeft: 15, marginRight: 15, backgroundColor: "#1e6262", borderRadius: 30
    },
    container: {
        flex: 1,
    },
    im_bg: {
        width: '100%', height: '100%'
    }

});
