import React from "react";
import { View, Text } from "react-native";

const Home = ({route}) => {
    var detail = route?.params?.formdata?.name
    
    return (
        <View>
            <Text>{detail}</Text>
        </View>
    )
}

export default Home;