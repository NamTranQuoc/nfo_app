import {Alert, StyleSheet, Text} from 'react-native';
import {View} from '../components/Themed';
import {Button, TextInput} from "react-native-paper";
import * as React from 'react';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {signInAction} from "../redux/actions/AuthAction";
import {RootStackScreenProps} from "../types";
import Layout from "../constants/Layout";
import {color1} from "../constants/Colors";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function LoginScreen({navigation}: RootStackScreenProps<'Login'>) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    checkLogin();
  }, [])

  const checkLogin = async () => {
    const token = await AsyncStorage.getItem("token");
    if (token !== null) {
      navigation.navigate("Root");
    }
  }

  const onSignIn = () => {
    dispatch(signInAction(username, password, navigation));
  }

  return (
    <View style={[styles.container, {
      flexDirection: "column"
    }]}>
      <View style={{flex: 1, backgroundColor: color1, borderBottomLeftRadius: 40, borderBottomRightRadius: 40}}>
        <Button color={"#ffffff"}
                style={{marginTop: 30, width: 100, alignSelf: 'flex-end'}}
                onPress={() => {
                  return navigation.navigate("SignUp");
                }}>
          Sign Up
        </Button>
        <Text style={{color: '#ffffff', fontSize: 60, fontWeight: "bold", alignSelf: 'center'}}>
          NFO
        </Text>
        <Text style={{color: '#ffffff', fontSize: 30, fontWeight: "bold", marginTop: 20, marginLeft: 30}}>
          Sign In
        </Text>
      </View>
      <View style={{flex: 2, backgroundColor: "#ffffff", flexDirection: 'column'}}>
        <TextInput
          label="Username"
          mode={'outlined'}
          theme={{roundness: 30}}
          value={username}
          onChangeText={t => setUsername(t)}
          style={{
            marginTop: 30,
            marginLeft: 30,
            marginRight: 30,
            paddingLeft: 10,
            height: 60,
            justifyContent: "center"
          }}
        />
        <TextInput
          label="Password"
          secureTextEntry={!showPassword}
          mode={'outlined'}
          theme={{roundness: 30}}
          value={password}
          onChangeText={t => setPassword(t)}
          style={{marginTop: 10, marginLeft: 30, marginRight: 30, paddingLeft: 10, height: 60}}
          right={<TextInput.Icon name="eye" style={{marginRight: 10, marginTop: 15}} onPress={() => {
            setShowPassword(!showPassword)
          }}/>}
        />
        <Text style={{
          color: '#e9145c',
          fontSize: 15,
          fontWeight: "bold",
          marginTop: 10,
          marginRight: 30,
          alignSelf: 'flex-end'
        }}>
          Forget password?
        </Text>
        <Button color={"#0a6882"}
                style={{marginTop: 20, width: Layout.window.width - 60, alignSelf: 'center', height: 60}}
                mode={'contained'}
                theme={{roundness: 30}}
                labelStyle={{fontSize: 20, marginTop: 15}}
                onPress={onSignIn}>
          Sign In
        </Button>
        <Text style={{color: '#7f92a0', fontSize: 13, marginTop: 30, alignSelf: 'center'}}>
          Or sign in with social media
        </Text>
        <Button color={"#f6f6f7"}
                style={{marginTop: 30, width: Layout.window.width - 60, alignSelf: 'center', height: 60}}
                mode={'contained'}
                theme={{roundness: 30}}
                labelStyle={{fontSize: 20, marginTop: 15, color: '#394e5f'}}
                onPress={() => {
                  Alert.alert("Chưa có bạn ơi!!");
                  // return navigation.navigate("Root");
                }}
                icon={'google'}>
          with google
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
