import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from "react-native"
import Layout from "../constants/Layout";
import {color1} from "../constants/Colors";

export const SLIDER_WIDTH = Layout.window.width - 10
export const ITEM_WIDTH = Layout.window.width - 10

const CarouselCardItem = ({ item, index }) => {
  return (
      <View style={{ alignItems: "center"}} key={index}>
        <Image
            source={{ uri: item.imgUrl }}
            style={styles.image}
        />
      </View>
  )
}
const styles = StyleSheet.create({
  image: {
    width: ITEM_WIDTH,
    height: 300,
    resizeMode: "contain",
    margin: 5,
    marginRight: 15,
    borderRadius: 5
  }
})

export default CarouselCardItem
