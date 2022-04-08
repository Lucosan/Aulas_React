import React from 'react';
import { Text, View, TextInput, Pressable } from 'react-native';
import { styles } from './Styles';

export default function App() {
  const [numeroUm, setnumeroUm] = React.useState(null);
  const [numeroDois, setnumeroDois] = React.useState(null);
  const [resultado, setResultado] = React.useState('');
  return (
    <View style={styles.container}>
    <Text style={styles.nomeApp}>Multiplicador de Números</Text>

    {/*Tive uma dificuldade para usar o keyboardtype, ficava dando erro. Tentei usar um Styled Input, mas ainda não peguei a sintaxe. Meu colega Helio me ajudou me mostrando como usar regex.*/}
    {/* Agora com o regex correto, pra poder fazer com decimais, também ;) */}
    <TextInput style={styles.inputs} placeholderTextColor="#555"  placeholder='Digite um número:' keyboardType='number-pad' value={numeroUm} onChangeText={texto=>setnumeroUm(texto.replace(/[^0-9-,-.]/g, ''))}/>
    <TextInput style={styles.inputs} placeholderTextColor="#555" placeholder='Digite o outro número:' keyboardType='number-pad' value={numeroDois} onChangeText={texto=>setnumeroDois(texto.replace(/[^0-9-,-.]/g, ''))}/>
    
    {/*Fazendo na ordem ao contrário pra dar uma originalidade, como a ordem dos fatores não altera o produto, nesse caso...*/}

    <Pressable style={styles.button} onPress={()=>setResultado(numeroDois*numeroUm)}>
      <Text style={styles.calc}>
        Calcular
      </Text>
    </Pressable>
    <View>
      <Text style={styles.results}>
       Seu resultado é: {resultado}
      </Text>
    </View>
    </View>
  );
}