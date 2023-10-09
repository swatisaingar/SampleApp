// To install drawer navigation @react-navigation/drawer
// yarn start --reset-cache
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/Home";
import { View, Text } from "react-native";
import Tabs from "./Tab";
const Drawer = createDrawerNavigator();

const CustomDrawer = ({ navigation }) => {
    return (
        <>
            <View>
                <Text>hi</Text>
            </View>
            <View>
                <Text>hello</Text>
            </View>
            <View>
                <Text>hi text</Text>
            </View>
        </>
    )
}

const DrawerStack = () => {
    return (
        <Drawer.Navigator initialRouteName="Market" drawerContent={(props) => <CustomDrawer {...props} />}>
            <Drawer.Screen name="Market" component={Tabs}/>
        </Drawer.Navigator>
    );
}

export default DrawerStack