import { StyleSheet, Text, View } from 'react-native'

export function Experiência() {
  return (
    <View style={styles.container}> 
      <Text style={styles.title}>Experiência</Text>   
      <Text style={styles.text}>
      Curso "Fundamentos de Bancos de Dados com Java" - UECE - 80 Horas
      </Text>
      <Text style={styles.text}>
      Curso "User Experience" - FIAP - 60 Horas
      </Text>
      <Text style={styles.text}>
      Para acessar meus projetos, basta clicar aqui
      </Text>
      <Text style={{ color: '#00F', fontSize: 15, textDecorationLine: 'underline', alignSelf: 'center', paddingTop: 15, }} onPress={() => Linking.openURL("https://github.com/lucosan")}>
      Página do Github
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