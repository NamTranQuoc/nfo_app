import {Alert, Pressable} from 'react-native';
import Layout from "../../constants/Layout";

import {View} from '../../components/Themed';
import {TextInput} from "react-native-paper";
import {FontAwesome} from "@expo/vector-icons";
import * as React from "react";
import {RootStackScreenProps} from "../../types";
import {color1} from "../../constants/Colors";

export const Header = ({navigation}: RootStackScreenProps<'Root'>) => {
  return (
    <View style={{
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      paddingTop: 25,
      paddingBottom: 20,
      backgroundColor: color1,
      borderBottomLeftRadius: 30,
      borderBottomRightRadius: 30
    }}>
      <TextInput
        label="Search"
        mode={"outlined"}
        theme={{roundness: 30}}
        // value={username}
        // onChangeText={t => setUsername(t)}
        style={{width: Layout.window.width - 85, marginLeft: 20, marginRight: 20, paddingLeft: 10}}
      />
      <Pressable
        onPress={() => {
          // navigation.navigate('Modal');
          Alert.alert("Chưa có bạn ơi");
        }}
        style={({pressed}) => ({
          opacity: pressed ? 0.5 : 1
        })}>
        <FontAwesome
          name="cart-arrow-down"
          size={25}
          style={{alignItems: "center", marginRight: 20}}
        />
      </Pressable>
    </View>
  );
}
