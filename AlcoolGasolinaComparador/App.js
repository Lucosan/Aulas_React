
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, TextInput, Pressable, Image } from 'react-native';
import { styles } from './styles';

export default function App() {

  const [resultado, setResultado] = React.useState(null)
  const [gasolina, setPrecoGasolina] = React.useState(null)
  const [etanol, setPrecoEtanol] = React.useState(null)

  return (
    <View style={styles.container}>
      <Image source={{uri: 'https://play-lh.googleusercontent.com/hM03tspoABlN5OuiJVnQ1BQCE_8TaBNkDcBfJRvPFS38ZaPCoGKbhm55kg-lw_pRjxs=w512'}} style= {{ width: 250, height: 200, alignSelf: 'center'}}/>

      <Text style={styles.nomeApp}>Alcool ou Gasolina ?</Text> 
      <Text style={{color: '#000', paddingTop: 10, fontSize:18, alignSelf: 'center'}}>Qual será o melhor a se pagar?</Text>

{/* Tive que usar o regex aqui também, mas agora consegui resolver o problema dos números com vírgula. Vou dar esse commit no multiplicador, também*/}
      
      <TextInput style={styles.inputs} placeholderTextColor="#777" placeholder="Digite o preço da Gasolina" value={gasolina} keyboardType='number-pad' onChangeText={txt=>setPrecoGasolina(txt.replace(/[^0-9-,-.]/g, ''))}/>
      <TextInput style={styles.inputs} placeholderTextColor="#777" placeholder="Digite o preço do álcool" value={etanol} keyboardType='number-pad' onChangeText={txt=>setPrecoEtanol(txt.replace(/[^0-9-,-.]/g, ''))}/>

      <View style={{alignItems: 'center'}}>
        <Pressable onPress={()=>{
          if(gasolina&&etanol){
            if(etanol/gasolina>0.7) setResultado("Nesse caso, gasolina é melhor")
            else setResultado("Álcool é melhor, nesses preços")
          }
          else alert('Você não inseriu algum dos dados! Reveja e insira corretamente!')
        }}>
          <Text style={styles.calc}>
            Verificar
          </Text>
        </Pressable>
      </View>
      <View>
        <Text style={styles.results}>{resultado}</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}