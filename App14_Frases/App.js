import {AsyncStorage} from '@react-native-async-storage/async-storage'
import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Switch, Text, View } from 'react-native'

export default function App() {
  const [isLittle, setIsLittle] = useState(true)
  const [isDay, setIsDay] = useState(true)
  
  useEffect(() => {
    getData()
  }, [])

  async function getData() {
    const isDayFromStorage = await AsyncStorage.getItem('isDay')
    if (isDayFromStorage  !== undefined) setIsDay(JSON.parse(isDayFromStorage))

    const isLittleFromStorage = await AsyncStorage.getItem('isLittle')
    if (isLittleFromStorage !== undefined) setIsLittle(JSON.parse(isLittleFromStorage))
  }

  async function handleDayChange() {
    setIsDay(!isDay)
    await AsyncStorage.setItem('isDay', isDay.toString())
  }

  async function handleLittleChange() {
    setIsLittle(!isLittle)
    await AsyncStorage.setItem('isLittle', isLittle.toString())
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Frases</Text>
      <StatusBar style='auto' />
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text>Dia</Text>
          <Switch value={isDay} onChange={handleDayChange} />
        </View>
        <View
          style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 16 }}
        >
          <Text>Pequeno</Text>
          <Switch value={isLittle} onChange={handleLittleChange} />
        </View>
      </View>
      <View
        style={{
          flex: 1,
          borderWidth: 4,
          margin: 16,
          backgroundColor: isDay ? '#eee' : '#555',
          borderColor: isDay ? '#555' : '#000',
        }}
      >
        <Text
          style={{
            fontSize: isLittle ? 16 : 32,
            textAlign: 'center',
            margin: 16,
            color: isDay ? '#555' : '#eee',
          }}
        >
          "Tente como nunca, falhe como sempre."
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    color: '#0ef',
    fontSize: 30,
    textAlign: 'center',
    margin: 16,
    marginTop: 64,
    paddingBottom: 8,
  },
})