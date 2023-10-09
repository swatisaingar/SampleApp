// npm install @react-navigation/bottom-tabs

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import CustomCart from '../screens/Cart';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarActiveTintColor: 'red',
            tabBarInactiveTintColor: 'blue',
            tabBarIcon: ({ focused, color }) => {
                let icon;
                if (route.name === "Home") {
                    iconName = focused ? 'home' : 'home'
                } else if (route.name === "Cart") {
                    iconName = focused ? 'envelope' : 'envelope'
                }
                return (
                    <Icon name={iconName} size={20} color={color} />
                )
            }
        })}>
            <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Tab.Screen name="Cart" component={CustomCart} />
        </Tab.Navigator>
    );
}

export default Tabs;
