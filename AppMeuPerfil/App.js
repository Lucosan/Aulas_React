import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Linking } from 'react-native';


export default function App() {
  return (
    
    <View style={just_like_css.container}>
      <Image source={{uri: 'https://avatars.githubusercontent.com/u/65673062?v=4'}} style= {{ width: 250, height: 200, alignSelf: 'center'}}/>
      <Text style={just_like_css.nome}>Lucca Costa Santos</Text> 
      <Text style={{color: '#000', paddingTop: 10, fontSize:18}}>Meu primeiro projeto React</Text>
      <Text style={just_like_css.titulo}> Dados Pessoais</Text>
      <Text style={just_like_css.subtitulo}> Data de Nascimento: 10/08/1999</Text>
      <Text style={just_like_css.subtitulo}> Altura: 181cm (1.81m)</Text>
      <Text style={just_like_css.titulo}> Formação</Text>
      <Text style={just_like_css.subtitulo}> Ex graduando em Licenciatura em Quimica pelo Instituto Federal de Educação,
       Ciência e Tecnologia do Estado do Pará (IFPA)</Text>
       <Text style={just_like_css.subtitulo}> Graduando em Sistemas para Internet pela Faculdade de Tecnologia do Estado de São Paulo -
       Campus Baixada Santista - Rubens Lara (FATECRL)</Text>
       <Text style={just_like_css.titulo}> Experiência </Text>
       <Text style={just_like_css.subtitulo}> Curso "Fundamentos de Bancos de Dados com Java" - UECE - 80 Horas</Text>
       <Text style={just_like_css.subtitulo}> Curso "User Experience" - FIAP - 60 Horas</Text>
       <Text style={just_like_css.titulo}> Projetos </Text>
       <Text style={just_like_css.link}onPress={()=>Linking.openURL('https://github.com/Lucosan')}>Para acessar meus projetos, basta clicar aqui</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const just_like_css = {
  container: {
    paddingLeft:5,
    paddingTop:5,
    backgroundColor: '#cdc',
  },

  nome:{
    color: '#002', fontSize: 25
  },
  
  link: {
    color: '#00F', fontSize: 15, textDecorationLine: 'underline', alignSelf: 'center'
  },

  titulo: {
    color: '#002', fontSize: 20, paddingTop:15
  },

  subtitulo: {
    color: '#002', fontSize: 15, paddingTop:10
  }


  
};
