import {View} from './Themed';
import * as React from 'react';
import {TextInput} from "react-native-paper";

export default function ProductType() {
  return (
      <View style={{
        borderRadius: 30,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        justifyContent: "center",
        borderStyle: "solid",
        borderColor: "#6c6767",
        borderWidth: 1,
      }}>
        <TextInput
            label="Name type"
            mode={'outlined'}
            theme={{roundness: 30}}
            // value={name}
            // onChangeText={t => setName(t)}
            style={{
              marginTop: 10,
              marginBottom: 10,
              marginLeft: 20,
              marginRight: 20,
              paddingLeft: 10,
              height: 60,
              justifyContent: "center"
            }}
        />
        <TextInput
            label="Quantity"
            mode={'outlined'}
            theme={{roundness: 30}}
            // value={name}
            // onChangeText={t => setName(t)}
            style={{
              marginTop: 10,
              marginBottom: 10,
              marginLeft: 20,
              marginRight: 20,
              paddingLeft: 10,
              height: 60,
              justifyContent: "center"
            }}
        />
        <TextInput
            label="Price"
            mode={'outlined'}
            theme={{roundness: 30}}
            // value={name}
            // onChangeText={t => setName(t)}
            style={{
              marginTop: 10,
              marginBottom: 10,
              marginLeft: 20,
              marginRight: 20,
              paddingLeft: 10,
              height: 60,
              justifyContent: "center"
            }}
        />
      </View>
  )
}
