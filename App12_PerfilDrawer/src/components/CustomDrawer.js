import React from "react";
import { View, Text, Image } from "react-native";
import {DrawerContentScrollView,DrawerItemList,} from "@react-navigation/drawer";

export default function CustomDrawer(props) {
  return (
    <DrawerContentScrollView
      {...props}
      style={{ flex: 1, backgroundColor: "#0ef" }}
    >
      <View
        style={{
          width: "100%",
          height: 120,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0ef",
        }}
      >
        <Image
          source={{ uri: "https://avatars.githubusercontent.com/u/65673062?v=4" }}
          style={{
            width: 80,
            aspectRatio: 1,
            borderRadius: 10,
            alignSelf: "center",
            marginTop: 48,
          }}
        />
        <Text
          style={{
            color: "#FFF",
            fontSize: 17,
            marginTop: 5,
            marginBottom: 45,
          }}
        >
          Lucca Costa Santos - 
        </Text>
      </View>

      <DrawerItemList {...props} labelStyle={{ color: "#0ac" }} />
    </DrawerContentScrollView>
  );
}
