import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, Image, ScrollView, Button, Alert, StyleSheet, FlatList, TouchableOpacity, StatusBar } from 'react-native'
import { styles } from './Style';
const App = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const array = ['Swati', 'Sumit', 'Vishal']
  useEffect(() => {
    console.log('Calleldd')
    setUserName('Swati');
    setPassword('12345')
  }, [1000]);
  const handleButton = () => {
    Alert.alert('Clickleddß');

  }

  const renderItem = ({ item }) => {
    return (
      //Touchables
      <TouchableOpacity onPress={() => alert('Click')}>
        <Text>Hi{item}</Text>
        <Text>hii</Text>
      </TouchableOpacity>
    )
  }

  return (
    <View>
      {/* //StatusBar */}
      <StatusBar backgroundColor={"red"} barStyle="default" hidden={true} />
      <View style={styles.text}>
        <Text>Hello {userName}</Text>
        <Text>Coming</Text>
      </View>
      <TextInput placeholder='UserName' editable value={userName} onChangeText={(text) => setUserName(text)} />
      <Button title="Click" color={'red'} onPress={() => handleButton} />
      {/* //ScrollView */}
      <ScrollView onScroll={() => console.log('calallsle')} showsVerticalScrollIndicator={false}>
        {array.map((item, index) => (
          <View key={index}>
            <Text>Hi{item}</Text>
          </View>
        ))}
      </ScrollView>
      {/* //FlatList */}
      <FlatList
        data={array}
        renderItem={renderItem}
      />
      {/* //Local Images */}
      <Image source={require('./images/abc.jpeg')} resizeMode="contain" style={{ width: 50, height: 50 }} />
      <Image source={{
        uri: 'https://reactnative.dev/img/tiny_logo.png',
      }} style={styles.image} />

      {/* //Alerts */}
      <TouchableOpacity onPress={() => Alert.alert('Title', 'Clicked', [
        {
          text: 'Cancel',
          onPress: () => console.log('hii')
        },
        {
          text: 'OK',
          onPress: () => console.log('hii')
        }
      ])}>
        <Text>HII</Text>
        <Text>hii</Text>
      </TouchableOpacity>
    </View>
  )
}

export default App;