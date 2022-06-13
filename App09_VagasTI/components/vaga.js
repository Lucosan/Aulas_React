import { StyleSheet, View, Text } from "react-native";
import React from "react";

const styles = StyleSheet.create({
  titulo: {
    marginTop: 5,
    fontWeight: "bold",
    color: "black",
    fontSize: 24
  }, 
  body: {
    color: 'dimgrey',
    marginVertical: 5,
    width: 500,
  },
  vaga: {
    margin: 10,
    paddingHorizontal: 10,
    backgroundColor: "white",
    borderWidth: 2,
    borderRadius:5,
    width: 800,
    alignItems: 'center',
  },
});
const Vaga = ({ title, salario, descricao, contato }) => {
    return (
      <View style={styles.vaga}>
        <Text style={styles.titulo}>{title}</Text>
        <Text
          style={{
            ...styles.body,
            fontSize: 20,
            color: '#aaa',
            padding: 5,
            marginVertical: 20,
          }}
        >
          Salário: R$ {salario}
        </Text>
        <Text style={styles.body}>Descrição: {descricao}</Text>
        <Text style={styles.body}>Contato: {contato}</Text>
      </View>
    );
  };
export default Vaga;