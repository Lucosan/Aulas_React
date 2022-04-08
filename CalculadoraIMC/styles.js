import {StyleSheet} from 'react-native';
 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingTop: 24,
    },
    calc: {
      color: '#000',
      fontSize: 32,
    },
    nomeApp:{
      color: '#000',
      fontSize: 32,
      textAlign: 'center',
      marginTop: 16,
    },
    button: {
      backgroundColor: '#0fa',
      margin: 20,
      borderRadius: 40,
      fontSize: 30,
      alignItems: 'center',
      padding: 10,
    },
    inputs: {
      padding: 10,
      color: '#000',
      marginVertical: 16,
      fontSize: 24,
      borderColor: '#999',
      borderWidth: 2,
    },
    results: {
        textAlign: 'center',
        fontSize: 24,
        color: '#567',
    }
  });
export{styles};