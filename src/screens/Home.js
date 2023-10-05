import React from "react";
import { View, Text } from "react-native";

const Home = ({route}) => {
    const detail = route?.params?.data
    
    return (
        <View>
            <Text>{detail}</Text>
        </View>
    )
}

export default Home;