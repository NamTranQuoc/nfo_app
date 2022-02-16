import {ImageBackground, Pressable, View} from 'react-native';
import {FontAwesome} from "@expo/vector-icons";
import * as React from "react";
import {RootStackScreenProps} from "../../types";
import {color1} from "../../constants/Colors";
import Layout from "../../constants/Layout";
import {Text} from "../../components/Themed";

export const HeaderModal = ({navigation}: RootStackScreenProps<'Root'>) => {
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
      <Text
        style={{width: Layout.window.width - 85, marginLeft: 43, textAlign: "center", color: '#ffffff', fontSize: 30, fontWeight: "bold"}}
      >NFO</Text>
      <Pressable
        onPress={() => navigation.navigate("More")}
        style={({pressed}) => ({
          opacity: pressed ? 0.5 : 1
        })}>
        <FontAwesome
          name="close"
          size={25}
          style={{alignItems: "center", marginRight: 2, color: "#ffffff"}}
        />
      </Pressable>
    </View>
  );
}
