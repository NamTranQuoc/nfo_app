import * as React from 'react';
import {Image, View} from "react-native";
import {useSelector} from 'react-redux';

export default function Loading() {
  const {showLoader} = useSelector(({common}) => common);
  if (showLoader)
    return (
        <View style={{
          position: "absolute",
          zIndex: 9999,
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          width: "100%",
          height: "100%",
          justifyContent: 'center',
          alignItems: 'center'}}>
          <Image source={require("../assets/images/loader.gif")}/>
        </View>
    );
  else return null;
}
