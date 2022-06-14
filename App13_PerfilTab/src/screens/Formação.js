import { StyleSheet, Text, View } from 'react-native'

export function Formacao() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Formação</Text>
      <Text style={styles.text}>Cursando: Sistemas para Internet - Fatec Rubens Lara </Text>
      <Text style={styles.text}>Ex Graduando de Licenciatura em Química - IFPA </Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
    },
    title: {
      fontSize: 30,
      textAlign: 'center',
      color: '#09d',
    },
    text: {
      color: '#0ef',
      fontSize: 22,
      textAlign: 'center',
      marginTop: 16,
    },
  })