import { StyleSheet, Text, View } from 'react-native'

export function Pessoal() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pessoal</Text>
      <Text style={styles.text}>Nome: Lucca Costa Santos</Text>
      <Text style={styles.text}>Data de nascimento: 10/08/1999</Text>
      <Text style={styles.text}>RA (Registro de Aluno):0050831921013
        </Text>
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