import React, { useEffect } from 'react'
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux';
import { GoogleSignin } from '@react-native-google-signin/google-signin'

const Counter = ({ counter, increment, decrement }) => {

    useEffect(() => {
        GoogleSignin.configure({
            webClientId: 'Client ID'
        })
    },[]);

    const handleSigniIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            console.log('userInfo', userInfo)
        }
        catch {
            console.log('Error showing');
        }
    }

    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text>Counter:{counter}</Text>
            <Button title='increment' onPress={increment} />
            <Button title='decrement' onPress={decrement} />

            <Button title="Google" onPress={handleSigniIn} />
        </View>
    )
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch({ type: 'Increment' }),
        decrement: () => dispatch({ type: 'Decrement' }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
// Steps to Integrate Redux
// install react-redux,redux
// create store register reducer in store
// pass store in main module
// write api function and return state from that function
// use state in reducer to store and update
// with the help of connect use mapDispatchToProps,mapStateToProps function for calling action using dispatch and store state using mapStateToProps

//steps to integrate googlesignin
//install googlesignin package
//register your app in developer account and find client id
//android setup for google setup
//use signin method and other methods to integrate