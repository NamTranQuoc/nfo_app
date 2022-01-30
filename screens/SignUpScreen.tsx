import {StyleSheet, Text} from 'react-native';
import {View} from '../components/Themed';
import {Button, TextInput} from "react-native-paper";
import * as React from 'react';
import {useDispatch} from 'react-redux';
import {RootStackScreenProps} from "../types";
import {signUpAction} from "../redux/actions/MemberAction";

export default function SignUpScreen({navigation}: RootStackScreenProps<'SignUp'>) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const dispatch = useDispatch();

  const onSignUp = () => {
    dispatch(signUpAction(name, email, navigation));
  }

  return (
    <View style={[styles.container, {
      flexDirection: "column"
    }]}>
      <View style={{flex: 1, backgroundColor: "#7cd0ea", borderBottomLeftRadius: 40, borderBottomRightRadius: 40}}>
        <Button color={"#ffffff"}
                style={{marginTop: 30, width: 100, alignSelf: 'flex-end'}}
                onPress={() => {
                  return navigation.navigate("Login");
                }}>
          Sign In
        </Button>
        <Text style={{color: '#ffffff', fontSize: 60, fontWeight: "bold", alignSelf: 'center'}}>
          NFO
        </Text>
        <Text style={{color: '#ffffff', fontSize: 30, fontWeight: "bold", marginTop: 20, marginLeft: 30}}>
          Sign Up
        </Text>
      </View>
      <View style={{flex: 2, backgroundColor: "#ffffff", flexDirection: 'column'}}>
        <TextInput
          label="Name"
          mode={'outlined'}
          theme={{roundness: 27}}
          value={name}
          onChangeText={t => setName(t)}
          style={{marginTop: 30, marginLeft: 30, marginRight: 30, paddingLeft: 10}}
        />
        <TextInput
          label="Email"
          mode={'outlined'}
          theme={{roundness: 27}}
          value={email}
          onChangeText={t => setEmail(t)}
          style={{marginTop: 10, marginLeft: 30, marginRight: 30, paddingLeft: 10}}
        />
        <Button color={"#0a6882"}
                style={{marginTop: 30, width: 300, alignSelf: 'center'}}
                mode={'contained'}
                theme={{roundness: 27}}
                labelStyle={{fontSize: 20}}
                onPress={onSignUp}>
          Sign Up
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