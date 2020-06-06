import React, { useState, useEffect, useContext, useCallback } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Alert, AsyncStorage, Image, } from 'react-native';
import { Appbar, Button, ActivityIndicator, TextInput, RadioButton } from 'react-native-paper';
import { UserContext } from "../UserContext";
import { Icon } from 'react-native-elements'
//import FancyAlert from './FancyAlert'
import { FancyAlert } from 'react-native-expo-fancy-alerts';

export default function Login(props) {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState('');
  const [error, setError] = useState(false);
  const [errMsg, setErrMsg] = useState('')
  const [clicked, setClicked] = useState(false);

  const { user, setUser } = useContext(UserContext);

  const [visible, setVisible] = useState(true);

  const toggleAlert = useCallback(() => {
    setVisible(!visible);
  }, [visible]);

  const removeUser = () => {
    //console.log("qwertyuiop")
    setUser(null)
  }

  useEffect(() => {
    removeUser();
  }, []);

  const ShowAlert = () => {
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
            /></View>}
          style={{ backgroundColor: 'white' }}
        >
          <Text style={{ marginTop: -16, marginBottom: 32 }}>{errMsg}</Text>
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

  const errSet = (msg) => {
    setVisible(true)
    setError(true)
    setErrMsg(msg)
    ShowAlert()
  }



  /*const createAlert = (err) =>
    Alert.alert(
      "Error",
      err,
      [
        { text: "OK" }
      ],
      { cancelable: false }
    );*/

  function sendCredentials() {
    //ShowAlert()
    setError(false)
    if (!email) {
      //createAlert("Email is required")
      errSet("Email is required")
    }
    else if (!password) {
      //createAlert("Password is required")
      errSet("Password is required")

    }
    else if (!type) {
      //createAlert("Select account type, Customer or Vendor")
      errSet("Select account type, Customer or Vendor")
    }

    else {
      setClicked(true)
      fetch("http://192.168.43.145:3000/" + type + "s/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password
        }),
      })
        .then(res => res.json())
        .then(async (data) => {
          //console.log(data)
          try {
            if (data.Error) {

              errSet("Email or Password is incorrect")
              /*
                            Alert.alert(
                              "Email or Password is incorrect"
                            )*/
            }
            else if (!data.Error) {
              //setError(false)
              AsyncStorage.setItem('token', data.token).then(() => {
                AsyncStorage.setItem('type', type).then(() => {
                  setUser(data.user);

                  //console.log(type)

                  props.navigation.replace('Home');
                })
              });
            }


            //await AsyncStorage.setItem("type", type);
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

      <ImageBackground source={require('../assets/bg-login-signup.png')} style={styles.im_bg}>


        {error ?
          <ShowAlert />
          :
          <></>
        }

        {(clicked && !error)
          ?
          <View style={styles.container}>
            <Image
              style={{
                width: "100%",
                height: 120,
              }}
              source={require('../assets/tax.png')}
            />
            <ActivityIndicator size="large" color="#14213D" />
            <Text style={{ marginTop: 20 }}>Fetching your data</Text>
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
              marginTop: "18%"
            }}>

              <Text style={{
                fontSize: 30, textAlign: "center",
                marginTop: "15%", marginBottom: "6%",
                color: "#14213D", fontWeight: "bold",
              }}>
                Login  Account
          </Text>

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

              <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: "6%" }}>
                <RadioButton.Group
                  onValueChange={value => setType(value)}
                  value={type}
                >
                  <View>
                    <Text style={{ fontWeight: "bold" }}>Customer</Text>
                    <RadioButton
                      value="customer"
                      color="#14213D"
                    />
                  </View>
                  <View>
                    <Text style={{ fontWeight: "bold" }}>Vendor</Text>
                    <RadioButton
                      value="vendor"
                      color="#14213D"
                    />
                  </View>
                </RadioButton.Group>
              </View>

              <Button style={styles.button}
                onPress={sendCredentials/*props.navigation.navigate("Home")*/}
                mode="contained">
                LogIn
          </Button>

              <Text style={{ fontSize: 20, textAlign: "center", marginTop: 30, color: "grey" }}
              >Don't have an account?</Text>
              <TouchableOpacity>
                <Text style={{ fontSize: 20, textAlign: "center", marginTop: 10, marginBottom: 50, color: "grey", fontWeight: 'bold' }}
                  onPress={() => props.navigation.navigate("SignupCustomer")}
                >Sign Up</Text>
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
    marginLeft: 15, marginRight: 15, marginBottom: 30,
    borderTopStartRadius: 30, borderTopEndRadius: 30,
    borderRadius: 30, overflow: 'hidden', height: 60,
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
