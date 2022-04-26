import {Text, View} from './Themed';
import * as React from 'react';
import {color1} from "../constants/Colors";
import Layout from "../constants/Layout";
import {Image} from "react-native";

const widthProduct = Layout.window.width / 2 - 20;
const widthImage = widthProduct - 10;

export default function ItemProductAuction({product}) {
  return (
      <View
          style={{
            marginTop: 10,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            borderWidth: 2,
            borderRadius: 20,
            padding: 5,
            borderColor: color1,
          }}
      >
        <Image style={{
          height: 100,
          width: 100,
          borderRadius: 10,
          backgroundColor: "#000",
          alignSelf: "center",
          marginTop: 3
        }}
               source={{uri: product.image}}

        />
        <View style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          margin: 10
        }}>
          <Text style={{fontSize: 20, fontWeight: "bold"}}>{product.name}</Text>
          <Text style={{fontSize: 20, color: "red", fontWeight: "bold"}}>₫{product.price}</Text>
          <Text style={{fontSize: 20}}>{product.time}</Text>
        </View>
      </View>
  )
}
