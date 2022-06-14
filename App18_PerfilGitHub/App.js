import { MaterialIcons } from '@expo/vector-icons'
import axios from 'axios'
import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'

export default function App() {
  const [inputValue, setInputValue] = useState('')
  const [githubData, setGithubData] = useState({})

  async function handleClick() {
    try {
      const { data } = await axios.get(
        `https://api.github.com/users/${inputValue}`
      )
      if (data) setGithubData(data)
    } catch (e) {
      console.log('Status', e)
      setGithubData(false)
    }
  }

  const logo =
    'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Buscador de GitHub</Text>
      <View style={styles.row}>
        <TextInput
          placeholder='Digite o nome de usuário do Github'
          value={inputValue}
          onChangeText={value => setInputValue(value)}
          style={styles.input}
        />
        <TouchableOpacity onPress={handleClick}>
          <MaterialIcons name='search' size={24} color='#0ef' />
        </TouchableOpacity>
      </View>
      <View style={styles.result}>
        <Image
          source={{ uri: githubData.avatar_url || logo }}
          style={{ width: 200, height: 200 }}
        />
        {githubData ? (
          <View>
            {<Text >Id: {githubData.id}</Text>}
            {<Text>Nome: {githubData.name}</Text>}
            {
              <Text>Repositórios: {githubData.public_repos}</Text>
            }
            {
              <Text>Criado em: {githubData.created_at}</Text>
            }
            {
              <Text>Seguidores: {githubData.followers}</Text>
            }
            {
              <Text>Seguindo: {githubData.following}</Text>
            }
          </View>
        ) : (
          <Text>Usuário não encontrado.</Text>
        )}
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
    flexDirection:'row',
    alignSelf: 'center',
    alignItems:'center',
  },
  input: {
    width: 550,
    borderWidth: 1,
    borderColor: '#03f',
    padding: 10,
    borderRadius: 5,
    marginRight: 16,
    alignSelf:'center',
    alignItems:'center',
    
  },
  result: {
    margin: 24,
    alignItems:'center',
    alignSelf:'center',
  }
})