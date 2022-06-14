import React from "react";
import { View, Text, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

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

export default function Formacao() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable
        style={{
          paddingBottom: 10,
          paddingTop: 30,
          backgroundColor: "#111)",
        }}
        onPress={() => navigation.toggleDrawer()}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            fontWeight: "bold",
            color: "rgb(0, 122, 255)",
          }}
        >
          Menu
        </Text>
      </Pressable>
      <Text style={{ ...styles.text, ...styles.title }}>Experiência</Text>
      <Text style={styles.text}>
      Curso "Fundamentos de Bancos de Dados com Java" - UECE - 80 Horas
      </Text>
      <Text style={styles.text}>
      Curso "User Experience" - FIAP - 60 Horas
      </Text>
      <Text style={{ ...styles.text, ...styles.title }}>Projetos</Text>
      <Text style={styles.text}>
      Para acessar meus projetos, basta clicar aqui
        <Text
          style={{ color: '#00F', fontSize: 15, textDecorationLine: 'underline', alignSelf: 'center' }}
          onPress={() => Linking.openURL("https://github.com/lucosan")}
        >
          {" "}
          página do Github
        </Text>
      </Text>
    </View>
  );
}
