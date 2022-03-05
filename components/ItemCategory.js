import {Text, View} from './Themed';
import * as React from 'react';
import {Avatar} from "react-native-paper";

export default function ItemCategory({category}) {
  return (
      <View style={{display: "flex", flexDirection: "column", alignItems: "center", marginLeft: 20}}>
        <Avatar.Image size={60}
                      source={{uri: category.image}}
            // onTouchStart={pickImage}
        />
        <Text style={{marginTop: 5, fontSize: 12}}>{category.name}</Text>
      </View>
  )
}
