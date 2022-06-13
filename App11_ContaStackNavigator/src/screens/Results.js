import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';

export function Results ({ route }) {
  const navigation = useNavigation();
  return (
    <View style={styles.result}>
    <Text style={styles.subtitle}>Dados Informados:</Text>
    <Text>Nome: {route.params?.nomeInput || 'Nome não informado'}</Text>
    <Text>Idade: {route.params?.idadeInput || 'Idade não informada'}</Text>
    <Text>Gênero: {route.params?.generoInput}</Text>
    <Text>Escolaridade: {route.params?.escolaLevelInput}</Text>
    <Text>Limite: {route.params?.limiteInput}</Text>
    <Text>Brasileiro(a): {route.params?.brazileiroInput ? 'Sim' : 'Não'}</Text>
  </View>
  )
}

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 22,
    textAlign: 'center',
  },
  result: {
    marginTop: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
})