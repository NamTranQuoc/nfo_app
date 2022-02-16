import {Text, View} from '../../components/Themed';
import {color1} from "../../constants/Colors";
import {RootTabScreenProps} from "../../types";
import * as React from 'react';
import {ScrollView} from "react-native";
import ItemCategory from "../../components/ItemCategory";
import Layout from "../../constants/Layout";
import ItemProduct from "../../components/ItemProduct";

const categories = [
  {
    "_id": "6204d63eef2c6312c0309d13",
    "name": "Thời trang nam",
    "image": "https://firebasestorage.googleapis.com/v0/b/nfo-app.appspot.com/o/categories%2F6204d63eef2c6312c0309d13.png?alt=media",
    "status": "ACTIVE"
  },
  {
    "_id": "6204d65aef2c6312c0309d15",
    "name": "Giày dép nữ",
    "image": "https://firebasestorage.googleapis.com/v0/b/nfo-app.appspot.com/o/categories%2F6204d65aef2c6312c0309d15.png?alt=media",
    "status": "ACTIVE"
  },
  {
    "_id": "6204d663ef2c6312c0309d17",
    "name": "Giày dép nam",
    "image": "https://firebasestorage.googleapis.com/v0/b/nfo-app.appspot.com/o/categories%2F6204d663ef2c6312c0309d17.png?alt=media",
    "status": "ACTIVE"
  },
  {
    "_id": "6208df5391bcc451883267bc",
    "name": "Thời trang nữ",
    "image": "https://firebasestorage.googleapis.com/v0/b/nfo-app.appspot.com/o/categories%2F6208df5391bcc451883267bc.png?alt=media",
    "status": "ACTIVE"
  }
]

const products = [
  {
    "name": "Jordan Flight 9",
    "image": "https://firebasestorage.googleapis.com/v0/b/nfo-app.appspot.com/o/products%2F1.png?alt=media",
    "price": "790.000"
  },
  {
    "name": "Nike Airmax Excee",
    "image": "https://firebasestorage.googleapis.com/v0/b/nfo-app.appspot.com/o/products%2F2.png?alt=media",
    "price": "550.000"
  },
  {
    "name": "Áo Dallas",
    "image": "https://firebasestorage.googleapis.com/v0/b/nfo-app.appspot.com/o/products%2F3.png?alt=media",
    "price": "49.000"
  },
  {
    "name": "Đầm voan Nhật",
    "image": "https://firebasestorage.googleapis.com/v0/b/nfo-app.appspot.com/o/products%2F4.png?alt=media",
    "price": "160.000"
  }
]

export default function HomeScreen({navigation}: RootTabScreenProps<'Home'>) {
  return (
    <ScrollView style={{
      flex: 1,
      marginTop: 15,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30
    }}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{
          backgroundColor: "#FFF",
          borderRadius: 30,
          borderColor: color1,
          borderWidth: 1,
          margin: 5,
          paddingLeft: 5,
          paddingTop: 15,
          height: 115,
          display: "flex",
          flexDirection: "row",
          marginBottom: 15
        }}
      >
        {categories.map(item => {
          return <ItemCategory category={item}/>
        })}
      </ScrollView>
      <View style={{display: "flex", flexDirection: "row", flexWrap: "wrap", backgroundColor: "#f2f2f2"}}>
        {products.map(item => {
          return <ItemProduct product={item}/>
        })}
      </View>
    </ScrollView>
  );
}
