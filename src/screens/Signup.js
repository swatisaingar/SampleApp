import React, { useContext, useState } from "react";
import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import MyContext from "../api/Context";
import { useApi } from "../api/Provider";

const Signup = ({ navigation }) => {
    const { login } = useApi();
    const [userName, setUserName] = useState();

    const [email, setEmail] = useState('xyz')
    const handleSubmit = async () => {
        try {
            const response = await login(userName);
            console.log(response)
            if (response.success) {
                navigation.navigate('Home');
            } else {
                // ToastAndroid.show('Login failed:', response.error);
            }
        } catch (error) {
            console.log('API Error:', error);
        }
        // navigation.navigate('Home', { data: formdata })
    }
    return (
        <View style={styles.container}>
            <Text style={styles.signup}>Sign Up</Text>
            <View style={styles.rowContainer}>
                <Icon name="user" size={20} />
                <TextInput placeholder="UserName" style={styles.textInput} value={userName} onChangeText={(text) => setUserName(text)} />
            </View>
            <View style={styles.rowContainer}>
                <Icon name="envelope" size={20} />
                <TextInput placeholder="Email" style={styles.textInput} />
            </View>
            <View style={styles.rowContainer}>
                <Icon name="phone" size={20} />
                <TextInput placeholder="MobileNumber" style={styles.textInput} />
            </View>
            <TouchableOpacity style={styles.signupcontainer} onPress={() => handleSubmit()}>
                <Text style={styles.signuptext}>SignUp</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Signup;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    signup: {
        fontSize: 30,
        fontWeight: "600",
    },
    textInput: {
        paddingLeft: 10,
    },
    button: {
        marginTop: 20
    },
    signupcontainer: {
        width: '50%',
        height: 50,
        backgroundColor: 'blue',
        marginTop: 20,
        alignSelf: 'center',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    signuptext: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold'
    },
    rowContainer: {
        borderWidth: 1,
        borderRadius: 20,
        flexDirection: 'row',
        height: 50,
        paddingLeft: 20,
        alignItems: 'center',
        marginTop: 20
    }
})