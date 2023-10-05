import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const Signup = ({ navigation }) => {
    const [userName, setUserName] = useState('Swati')
    const handleSubmit = () => {
        navigation.navigate('Home', { data: userName })
    }
    return (
        <View style={styles.container}>
            <Text style={styles.signup}>Sign Up</Text>
            <View style={styles.rowContainer}>
                <Icon name="user" size={20} />
                <TextInput placeholder="UserName" style={styles.textInput} />
            </View>
            <TextInput placeholder="Email" style={styles.textInput} />
            <TextInput placeholder="MobileNumber" style={styles.textInput} />
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