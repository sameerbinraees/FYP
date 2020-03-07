import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, KeyboardAvoidingView, ScrollView } from 'react-native';
import { Appbar, Button, BottomNavigation, TextInput } from 'react-native-paper';

//import Header from './screens/Header'
//import Login from './screens/Login'

import { LinearGradient } from 'expo-linear-gradient';


export default function Login(props) {

  return (
    <View style={styles.container}>

            <KeyboardAvoidingView behavior="position" >

                <ImageBackground source={require('../assets/LoginBG.jpg')} style={styles.im_bg}>

                    <Appbar.Header style={{ backgroundColor: "white", justifyContent: "center" }}>

                    </Appbar.Header>

                    <View style={{
                        flex: 1,
                        borderRadius: 40,
                        backgroundColor: "#ededed",
                        margin: "12%",
                        marginTop: "20%"
                    }}>

                        <Text style={{ fontSize: 30, textAlign: "center", marginTop: "15%", marginBottom: "6%", color: "#1e6262" }}>
                            Login  Account
            </Text>
                        <TextInput
                            style={styles.textInput}
                            label='Email'
                            underlineColor="transparent"
                            placeholder="Enter your Email"
                        />

                        <TextInput
                            style={styles.textInput}
                            label='Password'
                            underlineColor="transparent"
                            placeholder="Enter your Password"
                            secureTextEntry={true}
                        />

                        <Button style={styles.button}
                            onPress={() => props.navigation.navigate("Home")}
                            mode="contained">
                            LogIn
            </Button>

                        <Text style={{ fontSize: 20, textAlign: "center", marginTop: 30, color: "grey" }}
                        >Don't have an account?</Text>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 20, textAlign: "center", marginTop: 10, marginBottom: 50, color: "grey", fontWeight: 'bold' }}
                                onPress={() => props.navigation.navigate("Signup")}
                            >Sign Up</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={{ marginTop: "8%" }}></View>
                </ImageBackground>
            </KeyboardAvoidingView>
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
    marginLeft: 15, marginRight: 15, marginBottom: 30,
    borderTopStartRadius: 30, borderTopEndRadius: 30,
    borderRadius: 30, overflow: 'hidden', height: 60,
    backgroundColor:"#cee0e0"
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
