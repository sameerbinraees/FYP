import React, { useEffect } from 'react';
import { AsyncStorage } from 'react-native';

export default function LoadingScreen(props) {
    // await AsyncStorage.setItem("token", data.token);

    async function detectLogin() {
        try {
            //await AsyncStorage.removeItem('token')
            const value = await AsyncStorage.getItem('token');
            const type = await AsyncStorage.getItem('type');
            //console.log(value, type)
            if (value !== null && type !== null) {
                //console.log(value);
                props.navigation.replace("Home");
            }
            else {
                props.navigation.replace("Login");
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        detectLogin();
    }, []);
    return (
        <>
        </>
    );
}

