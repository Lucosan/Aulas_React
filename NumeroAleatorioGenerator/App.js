import { useState } from 'react'
import { Pressable, Text, View, Image} from 'react-native'
import { styles } from './styles'

export default function App() {
  const [numeroAleatorio, numeroSorteado] = useState(null)
  
  return (
    <View style={styles.container}>
      <Text style={styles.nomeApp}>Gerador de Número Aleatório</Text>
      <Image source={{uri: 'https://www.ultimatesolver.com/en/images/random/Random_Number.png'}} style= {{ width: 400, height: 200, alignSelf: 'center'}}/>
      <Text style={ styles.text }>
        Pense em um número de 0 a 10
      </Text>
      <View style={{ alignItems: "center" }}>
        <Pressable
          style={styles.button}
          onPress={() => {
            let random = Math.floor(Math.random() * 11);
            numeroSorteado(random);
          }}
        >
          <Text style={styles.button}>Gerar</Text>
        </Pressable>
        <View style={{ alignItems: "center", marginVertical: 20 }}>
            <Text style={styles.results}>O seu número é {numeroAleatorio} ? </Text>
         </View>
      </View>
      </View>
   
  )
}

