import { useState } from 'react'
import { Pressable, Text, View } from 'react-native'
import { styles } from './styles'

export default function App() {
  const [totalPessoas, contador] = useState(0)

  const diminuiPessoa = () => {
    if (totalPessoas > 0) contador(state => state - 1)
    else{  alert('Não é possível ter menos que 0 pessoas!') }
  }

  const aumentaPessoa = () => {
    contador(state => state + 1)
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador de Pessoas</Text>
      <View style={styles.content}>
        <View>
          <Text style={styles.counter}>{totalPessoas}</Text>
        </View>
        <View style={styles.buttons}>
          <Pressable style={styles.plusButton} onPress={aumentaPessoa}>
            <Text style={styles.jensonButton}>Aumentar</Text>
          </Pressable>
        </View>
        <View style={styles.buttons}>
          <Pressable style={styles.lessButton} onPress={diminuiPessoa}>
            <Text style={styles.jensonButton}>Diminuir</Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}