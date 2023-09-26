import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, Image, ScrollView, Button, Alert, StyleSheet } from 'react-native'
import { styles } from './Style';
const App = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('')
  useEffect(() => {
    console.log('Calleldd')
    setUserName('Swati');
    setPassword('12345')
  }, [1000]);
  const handleButton = () => {
    Alert.alert('Clickleddß');

  }

  return (
    <View style={{backgroundColor:'blue'}}>
      <View style={styles.text}>
        <Text>Hello {userName}</Text>
        <Text>Coming</Text>
      </View>
      <TextInput placeholder='UserName' editable value={userName} onChangeText={(text) => setUserName(text)} />
      <Button title="Click" color={'red'} onPress={() => handleButton} />
    </View>
  )
}

export default App;
