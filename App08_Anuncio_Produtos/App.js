import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Anuncio from "./components/Anuncio";
export default function App() {
  {/* Caso esteja vendo por web, é melhor usar o f12 pra ver no modo mobile!*/}
  const anuncios = [
   
    {
      src: "https://s2.glbimg.com/5vdHQPebUWVodz2wQHPVKrRirTU=/0x0:695x513/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/l/r/RJWAIXRb2DpAJ9iyOljw/2013-12-09-xbox-one1.jpg",
      title: "Console Xbox One",
      body: "Console Xbox One nunca retirado da caixa em preço promocional!",
      price: 1850,
    },

    {
      src: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-blue-select-2021?wid=940&hei=1112&fmt=png-alpha&.v=1645572386470",
      title: "IPhone 13 Azul",
      body: "Apple IPhone 13 original!",
      price: 5999,
    },

    {
      src: "https://m.media-amazon.com/images/I/81CnS7XDtzS._AC_SL1500_.jpg",
      title: "TV Samsung UHD 50'",
      body: "Televisão 4k UHD Samsung com desconto!",
      price: 2999,
    },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Anúncios</Text>
      <View style={{ height: 500, marginTop: 20 }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
          {anuncios.map(anuncio => {
            return (
              <Anuncio
                key={Math.random()}
                src={anuncio.src}
                title={anuncio.title}
                body={anuncio.body}
                price={anuncio.price}
              />
            );
          })}
        </ScrollView>
      </View>
      <StatusBar style="light" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: "#ddd",
  },
  title: {
    fontWeight: "bold",
    color: "#666",
    fontSize: 35,
    marginVertical: 10,
    textAlign: "center",
    marginTop: 45,
  },
});