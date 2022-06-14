import { MaterialIcons } from '@expo/vector-icons';
import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

export default function App() {
  const [inputValue, setInputValue] = useState('')
  const [cep, setCep] = useState({})

  async function handleClick() {   
    const { data } = await axios.get(`https://viacep.com.br/ws/${inputValue}/json/`)
    if (data) setCep(data)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Buscador de CEP</Text>
      <View style={styles.row}>
        <TextInput
          placeholder='Digite o CEP'
          keyboardType="numeric"
          value={inputValue}
          onChangeText={value => setInputValue(value)}
          style={styles.input}
        />
        <TouchableOpacity onPress={handleClick}>
          <MaterialIcons name='search' size={24} color='black' />
        </TouchableOpacity>
      </View>
      <View style={styles.result}>
        {cep.cep && <Text>CEP: {cep.cep}</Text>}
        {cep.logradouro && <Text>Logradouro: {cep.logradouro}</Text>}
        {cep.bairro && <Text>Bairro: {cep.bairro}</Text>}
        {cep.localidade && <Text>Cidade: {cep.localidade}</Text>}
        {cep.uf && <Text>Estado: {cep.uf }</Text>}
      </View>
      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    textAlign: 'center',
    fontSize: 32,
    padding: 8,
    borderColor: '#03f',
    color: '#0ef',
    margin: 16,
  },
  row: {
    flexDirection: 'row',
    marginHorizontal: 32,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#03f',
    padding: 10,
    borderRadius: 5,
    marginRight: 16,
  },
  result: {
    margin: 24,
  }
})