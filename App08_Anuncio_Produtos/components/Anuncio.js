import { StyleSheet, View, Text, Image } from "react-native";
import React from "react";

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    color: "#0ef",
    fontSize: 35,
    marginVertical: 10,
    textAlign: "center",
    marginTop: 45,
  },
  text: {
    color: "#eee",
    fontSize: 32,
    fontWeight: "bold",
  },
  img: {
    width: 300,
    height: 250,
    borderColor: "#000",
    borderWidth: 0.5,
    marginVertical: 10,
  },

  body: {
    color: "#eceff4",
    width: 320,
  },

  anuncio: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderColor: "#ccc",
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0bd",
  },
});

const Anuncio = ({ src, title, body, price }) => {
  return (
    <View style={styles.anuncio}>
      <Image source={{ uri: src }} style={styles.img} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.body}>{body}</Text>
      <Text
        style={{
          ...styles.body,
          fontSize: 20,
          color: "#fff",
          marginTop: 20,
        }}
      >
        R$ {price.toFixed(2)}
      </Text>
    </View>
  );
};
export default Anuncio;