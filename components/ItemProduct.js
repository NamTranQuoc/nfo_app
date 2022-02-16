import {Text, View} from './Themed';
import * as React from 'react';
import {Avatar} from "react-native-paper";
import {color1} from "../constants/Colors";
import Layout from "../constants/Layout";
import {Image} from "react-native";

const widthProduct = Layout.window.width / 2 - 20;
const widthImage = widthProduct - 10;

export default function ItemProduct({product}) {
  return (
      <View style={{
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        width: widthProduct,
        height: widthProduct + 60,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: color1,
      }}>
        <Image style={{height: widthImage, width: widthImage, borderRadius: 10, backgroundColor: "#000", alignSelf: "center", marginTop: 3}}
               source={{uri: product.image}}

        />
        <Text style={{fontSize: 15, marginTop: 4, marginLeft: 5}}>{product.name}</Text>
        <Text style={{fontSize: 17, marginTop: 4, marginLeft: 5, color: "red", fontWeight: "bold"}}>₫{product.price}</Text>
      </View>
  )
}
