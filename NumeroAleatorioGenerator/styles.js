import {StyleSheet} from 'react-native';
 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingTop: 24,
    },
    nomeApp:{
      color: '#000',
      fontSize: 32,
      textAlign: 'center',
      marginTop: 16,
    },
    button: {
      backgroundColor: '#0fa',
      margin: 10,
      borderRadius: 20,
      fontSize: 24,
      alignItems: 'center',
      padding: 5,
    },
    text: {
      padding: 10,
      color: '#000',
      marginVertical: 16,
      fontSize: 24,
      alignSelf: 'center',
    },
    results: {
        textAlign: 'center',
        fontSize: 24,
        color: '#567',
    }
  });
export{styles};