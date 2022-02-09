import {ScrollView, StyleSheet} from 'react-native';

import {View} from '../../components/Themed';
import * as React from 'react';
import {useState} from 'react';
import {RootTabScreenProps} from "../../types";
import {Button, TextInput} from "react-native-paper";
import {useDispatch} from "react-redux";
import Layout from "../../constants/Layout";
import {changePasswordAction} from "../../redux/actions/AuthAction";

export default function ChangePasswordScreen({navigation}: RootTabScreenProps<'ChangePassword'>) {
  const dispatch = useDispatch();
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function onsubmit() {
    dispatch(changePasswordAction(oldPassword, newPassword, confirmPassword, navigation));
  }

  return (
    <ScrollView style={styles.container}>
      <View style={{flex: 2, backgroundColor: "#ffffff", flexDirection: 'column'}}>
        <TextInput
          label="Old Password"
          secureTextEntry={!showOldPassword}
          mode={'outlined'}
          theme={{roundness: 30}}
          value={oldPassword}
          onChangeText={t => setOldPassword(t)}
          style={{marginTop: 50, marginLeft: 30, marginRight: 30, paddingLeft: 10, height: 60}}
          right={<TextInput.Icon name="eye" style={{marginRight: 10, marginTop: 15}} onPress={() => {
            setShowOldPassword(!showNewPassword)
          }}/>}
        />
        <TextInput
          label="New Password"
          secureTextEntry={!showNewPassword}
          mode={'outlined'}
          theme={{roundness: 30}}
          value={newPassword}
          onChangeText={t => setNewPassword(t)}
          style={{marginTop: 10, marginLeft: 30, marginRight: 30, paddingLeft: 10, height: 60}}
          right={<TextInput.Icon name="eye" style={{marginRight: 10, marginTop: 15}} onPress={() => {
            setShowNewPassword(!showNewPassword)
          }}/>}
        />
        <TextInput
          label="Confirm Password"
          secureTextEntry={!showConfirmPassword}
          mode={'outlined'}
          theme={{roundness: 30}}
          value={confirmPassword}
          onChangeText={t => setConfirmPassword(t)}
          style={{marginTop: 10, marginLeft: 30, marginRight: 30, paddingLeft: 10, height: 60}}
          right={<TextInput.Icon name="eye" style={{marginRight: 10, marginTop: 15}} onPress={() => {
            setShowConfirmPassword(!showConfirmPassword)
          }}/>}
        />
        <Button color={"#0a6882"}
                style={{
                  marginTop: 30,
                  width: Layout.window.width - 60,
                  alignSelf: 'center',
                  height: 60,
                  marginBottom: 250
                }}
                mode={'contained'}
                theme={{roundness: 30}}
                labelStyle={{fontSize: 20, marginTop: 15}}
                onPress={onsubmit}
        >
          Save
        </Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
