import Slider from '@react-native-community/slider'
import { Picker } from '@react-native-picker/picker'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import {
  Pressable,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from 'react-native'

export default function App() {
  const [nomeInput, setNomeInput] = React.useState('')
  const [idadeInput, setIdadeInput] = React.useState('')
  const [generoInput, setGeneroInput] = React.useState(null)
  const [escolaLevelInput, setEscolaLevelInput] = React.useState(null)
  const [limiteInput, setLimiteInput] = React.useState(0)
  const [brazileiroInput, setBrazileiroInput] = React.useState(false)
  const [dataIsVisible, setDataIsVisible] = React.useState(false)

  const showData = () => {
    setDataIsVisible(true)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Abertura de Conta Bancária</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nome:</Text>
        <TextInput
          style={styles.input}
          value={nomeInput}
          onChangeText={text => setNomeInput(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Idade:</Text>
        <TextInput
          style={styles.input}
          value={idadeInput}
          onChangeText={text => setIdadeInput(text)}
          keyboardType='numeric'
        />
      </View>
      <View style={styles.pickerContainer}>
        <Text style={styles.label}>Gênero:</Text>
        <Picker
          style={styles.picker}
          selectedValue={generoInput}
          onValueChange={itemValue => setGeneroInput(itemValue)}
        >
          <Picker.Item label='Selecione o gênero' value='' />
          <Picker.Item label='Masculino' value='Masculino' />
          <Picker.Item label='Feminino' value='Feminino' />
          <Picker.Item label='Não binário' value='Não Binario' />
        </Picker>
      </View>
      <View style={styles.pickerContainer}>
        <Text style={styles.label}>Escolaridade:</Text>
        <Picker
          style={styles.picker}
          selectedValue={escolaLevelInput}
          onValueChange={itemValue => setEscolaLevelInput(itemValue)}
        >
          <Picker.Item label='Selecione a escolaridade' value='' />
          <Picker.Item
            label='Ensino Fundamental incompleto'
            value='ensino fundamental incompleto'
          />
          <Picker.Item
            label='Ensino Fundamental completo'
            value='ensino fundamental completo'
          />
          <Picker.Item
            label='Ensino Médio incompleto'
            value='ensino médio incompleto'
          />
          <Picker.Item
            label='Ensino Médio completo'
            value='ensino médio completo'
          />
          <Picker.Item
            label='Ensino Superior incompleto'
            value='ensino superior incompleto'
          />
          <Picker.Item
            label='Ensino Superior completo'
            value='ensino superior completo'
          />
        </Picker>
      </View>
      
      <View style={styles.sliderContainer}>
        <Text style={styles.label}>Limite:</Text>
        <Slider
          minimumValue={1000}
          maximumValue={10000}
          step={100}
          onValueChange={value => setLimiteInput(value)}
          value={limiteInput}
        />
        <Text>{limiteInput.toFixed(0)}</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Brasileiro:</Text>
        <Switch
          style={styles.input}
          value={brazileiroInput}
          onValueChange={value => setBrazileiroInput(value)}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={showData}>
          <Text style={styles.buttonText}>Confirmar</Text>
        </Pressable>
      </View>

      {dataIsVisible && (
        <View style={styles.result}>
          <Text style={styles.subtitulo}>Dados Informados:</Text>
          <Text>Nome: {nomeInput || 'Nome não informado'}</Text>
          <Text>Idade: {idadeInput || 'Idade não informada'}</Text>
          <Text>Gênero: {generoInput}</Text>
          <Text>Escolaridade: {escolaLevelInput}</Text>
          <Text>Limite: {limiteInput}</Text>
          <Text>Brasileiro: {brazileiroInput ? 'Sim' : 'Não'}</Text>
        </View>
      )}

      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },

  titulo: {
    fontSize: 32,
    textAlign: 'center',
  },

  subtitulo: {
    fontSize: 24,
    textAlign: 'center',
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },

  label: {
    marginRight: 8,
  },

  input: {
    borderWidth: 1,
    padding: 2,
    width: '40%',
    borderRadius: 4,
  },

  pickerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  picker: {
    width: '40%',
  },

  sliderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: '80%'
  },

  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    backgroundColor: '#0fc',
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  buttonText: {
    color: '#fff',
  },

  result: {
    marginTop: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },

})