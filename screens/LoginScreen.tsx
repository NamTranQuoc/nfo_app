import {Alert, StyleSheet} from 'react-native';
import {View} from '../components/Themed';
import {Button, TextInput} from "react-native-paper";
import {Text} from "react-native";
import * as React from 'react';

export default function LoginScreen() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);

  const onSignIn = () => {
    if (username == 'admin' && password == 'admin') {
      Alert.alert('OKE');
    } else {
      Alert.alert('Sai rồi')
    }
  }

  return (
      <View style={[styles.container, {
        flexDirection: "column"
      }]}>
        <View style={{ flex: 1, backgroundColor: "#7cd0ea", borderBottomLeftRadius: 40, borderBottomRightRadius: 40 }} >
          <Button color={"#ffffff"}
                  style={{marginTop: 30, width: 100, alignSelf: 'flex-end'}}
                  onPress={() => {Alert.alert("Chưa có bạn ơi!!")}}>
            Sign Up
          </Button>
          <Text style={{color: '#ffffff', fontSize: 60, fontWeight: "bold", alignSelf: 'center'}}>
            NFO
          </Text>
          <Text style={{color: '#ffffff', fontSize: 30, fontWeight: "bold", marginTop: 20, marginLeft: 30}}>
            Sign In
          </Text>
        </View>
        <View style={{ flex: 2, backgroundColor: "#ffffff", flexDirection: 'column'}} >
          <TextInput
              label="Username"
              mode={'outlined'}
              theme={{ roundness: 27 }}
              value={username}
              onChangeText={t => setUsername(t)}
              style={{marginTop: 30, marginLeft: 30, marginRight: 30, paddingLeft: 10}}
          />
          <TextInput
              label="Password"
              secureTextEntry={!showPassword}
              mode={'outlined'}
              theme={{ roundness: 27 }}
              value={password}
              onChangeText={t => setPassword(t)}
              style={{marginTop: 10, marginLeft: 30, marginRight: 30, paddingLeft: 10}}
              right={<TextInput.Icon name="eye" style={{marginRight: 10}} onPress={() => {setShowPassword(!showPassword)}}/>}
          />
          <Text style={{color: '#e9145c', fontSize: 13, fontWeight: "bold", marginTop: 10, marginRight: 30, alignSelf: 'flex-end'}}>
            Forget password?
          </Text>
          <Button color={"#0a6882"}
                  style={{marginTop: 30, width: 300, alignSelf: 'center'}}
                  mode={'contained'}
                  theme={{roundness: 27}}
                  labelStyle={{fontSize: 20}}
                  onPress={onSignIn}>
            Sign In
          </Button>
          <Text style={{color: '#7f92a0', fontSize: 13, marginTop: 40, alignSelf: 'center'}}>
            Or sign in with social media
          </Text>
          <Button color={"#f6f6f7"}
                  style={{marginTop: 30, width: 300, alignSelf: 'center'}}
                  mode={'contained'}
                  theme={{roundness: 27}}
                  labelStyle={{fontSize: 20, color: '#394e5f'}}
                  onPress={() => {Alert.alert("Chưa có bạn ơi!!")}}
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
