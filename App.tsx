// import React, { useEffect, useState } from 'react'
// import { View, Text, Image, ScrollView, Button, Alert, StyleSheet, FlatList, TouchableOpacity, StatusBar, AsyncStorage } from 'react-native'
// import { styles } from './Style';
// import { TextInput } from 'react-native-paper';
// // import { MaterialIconSet, FontAwesomeSet } from './IconSets'
// const App = () => {

//   const [userName, setUserName] = useState('');
//   const [password, setPassword] = useState('');
//   const array = ['Swati', 'Sumit', 'Vishal']
//   useEffect(() => {
//     console.log('Calleldd')
//     // setUserName('Swati');
//     setPassword('12345');
//   }, [1000]);
//   const handleButton = () => {
//     Alert.alert('Clickleddß');

//   }

//   const renderItem = ({ item }) => {
//     return (
//       //Touchables
//       <TouchableOpacity onPress={() => alert('Click')}>
//         <Text>Hi{item}</Text>
//         <Text>hii</Text>
//       </TouchableOpacity>
//     )
//   }

//   return (
//     <View>
//       {/* //StatusBar */}
//       <StatusBar backgroundColor={"red"} barStyle="default" hidden={true} />
//       <View style={styles.text}>
//         <Text>Hello {userName}</Text>
//         <Text>Coming</Text>
//       </View>
//       <TextInput placeholder='UserName' editable value={userName} onChangeText={(text) => setUserName(text)} />
//       <Button title="Click" color={'red'} onPress={() => handleButton} />
//       {/* //ScrollView */}
//       <ScrollView onScroll={() => console.log('calallsle')} showsVerticalScrollIndicator={false}>
//         {array.map((item, index) => (
//           <View key={index}>
//             <Text>Hi{item}</Text>
//           </View>
//         ))}
//       </ScrollView>
//       {/* //FlatList */}
//       <FlatList
//         data={array}
//         renderItem={renderItem}
//       />
//       {/* //Local Images */}
//       <Image source={require('./images/abc.jpeg')} resizeMode="contain" style={{ width: 50, height: 50 }} />
//       <Image source={{
//         uri: 'https://reactnative.dev/img/tiny_logo.png',
//       }} style={styles.image} />

//       {/* //Alerts */}
//       <TouchableOpacity onPress={() => Alert.alert('Title', 'Clicked', [
//         {
//           text: 'Cancel',
//           onPress: () => console.log('hii')
//         },
//         {
//           text: 'OK',
//           onPress: () => console.log('hii')
//         }
//       ])}>
//         <Text>HII</Text>
//         <Text>hii</Text>
//       </TouchableOpacity>

//       {/* Installing - npm install packagename,yarn add packagename */}
//       <TextInput
//         label="Email"
//         value={userName}
//         onChangeText={text => setUserName(text)}
//       />

//       {/* <Icon name="taobao-circle" size={30} color="#900" /> */}
//       {/* <MaterialIconSet name="star" size={20} color="red" />
//       <FontAwesomeSet name="heart" size={30} color="blue" /> */}
//     </View>
//   )
// }

// export default App;

//To install stack navigation
// npm install @react-navigation/native @react-navigation/stack react-native-gesture-handler react-native-screens react-native-safe-area-context react-native-reanimated
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import DrawerStack from './src/Navigators/Drawer';
import Signup from './src/screens/Signup';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignUp" component={Signup} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={DrawerStack} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
