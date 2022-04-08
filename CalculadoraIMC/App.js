
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, TextInput, Pressable, Image } from 'react-native';
import { styles } from './styles';

export default function App() {

  const [resultado, setResultado] = React.useState(null)
  const [peso, setPeso] = React.useState(null)
  const [altura, setAltura] = React.useState(null)

  return (
    <View style={styles.container}>
      <Image source={{uri: 'https://www.ricardogozzano.com.br/wp-content/uploads/2020/03/tabela_imc.png'}} style= {{ width: 300, height: 200, alignSelf: 'center'}}/>

      <Text style={styles.nomeApp}>Calculadora de IMC</Text>

{/* Números com vírgula ficam muito grandes na tela. Vou tentar usar o "ToFixed"*/}
                                  {/* Sucesso! */}
      
      <TextInput style={styles.inputs} placeholderTextColor="#777" placeholder="Digite sua altura em metros:" value={altura} keyboardType='number-pad' onChangeText={txt=>setAltura(txt.replace(/[^0-9-,-.]/g, ''))}/>
      <TextInput style={styles.inputs} placeholderTextColor="#777" placeholder="Digite seu peso em quilogramas:" value={peso} keyboardType='number-pad' onChangeText={txt=>setPeso(txt.replace(/[^0-9-,-.]/g, ''))}/>

      <View style={{alignItems: 'center'}}>
      <Pressable 
          style={styles.button} 
          onPress={()=>{
            if(altura&&peso){
              const imc = peso/(altura**2)
              switch(true){
                case (imc<18.5):
                  setResultado(["Seu IMC é:", imc.toFixed(3), " ", "-", " ",
                    "Abaixo do peso ideal"]
                  )
                break
                case (imc<24.9):
                  setResultado(["Seu IMC é:", imc.toFixed(3), " ", "-", " ",
                    " - Peso ideal"]
                  )
                break
                case(imc<29.9):
                setResultado(["Seu IMC é:", imc.toFixed(3), " ", "-", " ",
                  "Sobrepeso"]
                  )
                break
                case(imc<34.9):
                setResultado(["Seu IMC é:", imc.toFixed(3), " ", "-", " ",
                  "Obesidade Grau I"]
                  )
                break
                case(imc<39.9):
                setResultado(["Seu IMC é:", imc.toFixed(3), " ", "-", " ",
                  "Obesidade Grau II"]
                  )
                break
                case(imc>=40):
                setResultado(["Seu IMC é:", imc.toFixed(3), " ", "-", " ", 
                  "Obesidade mórbida"]
                  )
                break
              }
            }
        }}>
         
          <Text style={styles.calc}>
            Calcular IMC
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