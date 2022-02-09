import {Text, View} from '../../components/Themed';
import {color1} from "../../constants/Colors";
import {RootTabScreenProps} from "../../types";
import * as React from 'react';

export default function HomeScreen({navigation}: RootTabScreenProps<'Home'>) {
  return (
    <View style={{
      flex: 1,
      marginTop: 15,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30
    }}>
      <View style={{
        backgroundColor: color1,
        borderRadius: 30,
        padding: 15,
        height: 100
      }}>
        <Text>Categorys</Text>
      </View>
      <View style={{
        flex: 1,
        marginTop: 15,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: color1,
        padding: 15
      }}>
        <Text>Product</Text>
      </View>
    </View>
  );
}
