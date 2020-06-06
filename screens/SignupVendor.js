import React, { useState, useCallback, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Alert, SafeAreaView, } from 'react-native';
import { Appbar, Button, TextInput, ActivityIndicator } from 'react-native-paper';
import { FancyAlert } from 'react-native-expo-fancy-alerts';
import { Icon } from 'react-native-elements'


export default function Signup(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //const [type, setType] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [cnic, setCnic] = useState('');
    const [error, setError] = useState(false);
    const [statusType, setStatusType] = useState('');
    const [clicked, setClicked] = useState(false)

    const [visible, setVisible] = useState(true);
    const [errMsg, setErrMsg] = useState('')

    const toggleAlert = useCallback(() => {
        setVisible(!visible);
    }, [visible]);

    useEffect(() => {

    }, [statusType, errMsg, visible])

    const ShowAlert = () => {
        if (statusType == "error") {
            return (
                <View>
                    <FancyAlert
                        visible={visible}

                        icon={<View style={{
                            flex: 1,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: 'red',
                            borderRadius: 50,
                            width: '100%',
                        }}><Icon
                                reverse
                                name='x'
                                type='feather'
                                color="red"
                                size={20}
                            />

                        </View>}
                        style={{ backgroundColor: 'white' }}
                    >
                        <Text style={{ marginTop: -16, marginBottom: 32, textAlign: "center", }}>{errMsg}</Text>
                        <Button
                            style={{ marginBottom: "5%", backgroundColor: "red" }}
                            onPress={toggleAlert}
                            mode="contained">
                            Close
                    </Button>
                    </FancyAlert>
                </View>
            )
        }
        else if (statusType == "success") {
            return (
                <View>
                    <FancyAlert
                        visible={visible}

                        icon={<View style={{
                            flex: 1,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: 'green',
                            borderRadius: 50,
                            width: '100%',
                        }}><Icon
                                reverse
                                name='check'
                                type='feather'
                                color="green"
                                size={20}
                            />

                        </View>}
                        style={{ backgroundColor: 'white' }}
                    >
                        <Text style={{ marginTop: -16, marginBottom: 32, textAlign: "center", }}>{errMsg}</Text>
                        <Button
                            style={{ marginBottom: "5%", backgroundColor: "green" }}
                            onPress={() => {
                                props.navigation.replace('Login');
                                toggleAlert
                            }}
                            mode="contained">
                            Close
                    </Button>
                    </FancyAlert>
                </View>
            )
        }
        else {
            return (
                null
            )
        }
    }

    const errSet = (msg, type) => {
        //console.log(msg, type)
        setVisible(true)
        setError(true)
        setStatusType(type)
        setErrMsg(msg)
        ShowAlert()
    }

    /*
        const createErrorAlert = (err) =>
            Alert.alert(
                "Error",
                err,
                [
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                ],
                { cancelable: false }
            );
    */

    function sendCredentials() {
        setError(false)
        if (!email) {
            errSet("Email is required", "error")
        }
        else if (!password) {
            errSet("Password is required", "error")
        }
        else if (!name) {
            errSet("Name is required", "error")
        }
        else if (!phone || phone.length != 11) {
            errSet("Enter valid phone number", "error")
        }
        else if (!cnic || cnic.length != 13) {
            errSet("Enter valid CNIC", "error")
        }
        else {
            setClicked(true)
            setError(false)
            fetch("http://192.168.43.145:3000/vendors/signup", {
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
                            setError(true);
                            console.log(data.Error)
                            if (data.Error.includes("E11000")) {
                                if (data.Error.includes("email"))
                                    errSet(`Already an account exists with email: ${email}`, "error")

                                if (data.Error.includes("cnic"))
                                    errSet(`Already an account exists with CNIC: ${cnic}`, "error")

                            }

                        }
                        else if (!data.Error) {
                            setError(false);
                            //console.log("Inside")
                            errSet("Signup successfull, Now login with your credentials", "success")

                        }
                    } catch (e) {
                        console.log("Error: ", e)
                    }
                })
                .catch((error) => {
                    console.error("Error" + error);
                });
        }
    }

    return (

        <View style={styles.container}>

            <ImageBackground source={require('../assets/bg-login-signup.png')} style={styles.im_bg}>



                {error ?
                    <ShowAlert />
                    :
                    <></>
                }

                {(clicked && !error)
                    ?

                    <View style={styles.container}>
                        <ShowAlert />
                        <ActivityIndicator size="large" color="#14213D" />
                        <Text style={{ marginTop: 20 }}>Validating the data...</Text>
                    </View>
                    :

                    <View style={{
                        flex: 1,
                        justifyContent: "center",
                    }}>

                        <View style={{
                            borderRadius: 40,
                            backgroundColor: "#ededed",
                            margin: "10%",
                        }}>

                            <Text style={{ fontSize: 28, textAlign: "center", marginTop: "8%", color: "#14213D" }}>
                                Signup as
                    </Text>

                            <Text style={{ fontSize: 30, fontWeight: "bold", textAlign: "center", marginBottom: "2%", color: "#14213D" }}>
                                Vendor
                    </Text>

                            <Text style={{ fontSize: 20, textAlign: "center", color: "grey" }}>
                                Want to signup as Customer?
                    </Text>
                            <TouchableOpacity>
                                <Text style={{ fontSize: 20, textAlign: "center", marginBottom: "6%", color: "grey", fontWeight: 'bold' }}
                                    onPress={() => props.navigation.navigate("SignupCustomer")}
                                >
                                    Click here
                        </Text>
                            </TouchableOpacity>

                            <TextInput
                                style={styles.textInput}
                                label='Email'
                                underlineColor="transparent"
                                placeholder="Enter your Email"
                                theme={{ colors: { primary: "#14213D" } }}
                                value={email}
                                onChangeText={text => setEmail(text)}
                            />

                            <TextInput
                                style={styles.textInput}
                                label='Password'
                                underlineColor="transparent"
                                placeholder="Enter your Password"
                                secureTextEntry={true}
                                theme={{ colors: { primary: "#14213D" } }}
                                value={password}
                                onChangeText={text => setPassword(text)}
                            />

                            <TextInput
                                style={styles.textInput}
                                label='Name'
                                underlineColor="transparent"
                                placeholder="Enter your Full Name"
                                theme={{ colors: { primary: "#14213D" } }}
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
                                theme={{ colors: { primary: "#14213D" } }}
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
                                theme={{ colors: { primary: "#14213D" } }}
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
                    </View>
                }
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
        marginLeft: 15, marginRight: 15, backgroundColor: "#FF9F00", borderRadius: 30
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    im_bg: {
        width: '100%', height: '100%'
    }

});
