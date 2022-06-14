import React from "react";
import { View, Text, Pressable, Image, Linking } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

const styles = {
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: "#0ef",
  },
  text: {
    marginLeft: 16,
    color: "#eceff4",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    marginVertical: 10,
  },
  img: {
    width: 250,
    aspectRatio: 1,
    borderWidth: 5,
    borderColor: "#000",
    borderRadius: 10,
    alignSelf: "center",
    marginTop: 48,
  },
  wrapper: {
    backgroundColor: "#0af",
    marginTop: 18,
    marginHorizontal: 10,
    borderRadius: 10,
    paddingVertical: 16,
  },
};

export default function Pessoal() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable
        style={{
          paddingBottom: 10,
          paddingTop: 30,
          backgroundColor: "#0ef",
        }}
        onPress={() => navigation.toggleDrawer()}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            fontWeight: "bold",
            color: "#fff",
          }}
        >
          Menu
        </Text>
      </Pressable>
      <View style={styles.wrapper}>
        <Text style={{ ...styles.text, ...styles.title }}>Dados Pessoais</Text>
        <Text style={styles.text}>
          <Text style={{ fontWeight: "bold" }}>Nome: </Text>Lucca Costa Santos
        </Text>
        <Text style={styles.text}>
          <Text style={{ fontWeight: "bold" }}>Data de nascimento: </Text>
          10/08/1999
        </Text>
        <Text style={styles.text}>
          <Text style={{ fontWeight: "bold" }}>RA (Registro de Aluno): </Text>
          0050831921013
        </Text>

        <StatusBar style="light" />
      </View>
    </View>
  );
}
