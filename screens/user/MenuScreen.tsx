import {StyleSheet} from 'react-native';
import {Text, View} from '../../components/Themed';
import {RootTabScreenProps} from "../../types";
import {useDispatch, useSelector} from 'react-redux';
import * as React from 'react';
import {Avatar, Button} from 'react-native-paper';
import Layout from "../../constants/Layout";
import {logoutAction} from "../../redux/actions/AuthAction";
import {getCurrentMember} from "../../redux/actions/MemberAction";

export default function MenuScreen({navigation}: RootTabScreenProps<'More'>) {
  const dispatch = useDispatch();
  const {member} = useSelector(({member}) => member);

  if (member === null) {
    dispatch(getCurrentMember());
    return null
  } else {
    return (
      <View style={styles.container}>
        <Avatar.Image size={120}
                      source={{uri: member.avatar !== null ? member.avatar : 'https://firebasestorage.googleapis.com/v0/b/nfo-app.appspot.com/o/default%2Favatar-default.png?alt=media'}}
                      style={{marginTop: 30}}/>
        <Text style={{marginTop: 10, fontSize: 20, fontWeight: "bold"}}>{member.name}</Text>
        <Text style={{fontSize: 15}}>{member.email}</Text>
        <Button color={"#f0f0f0"}
                style={{marginTop: 30, width: Layout.window.width - 60, alignSelf: 'center', height: 60}}
                mode={'contained'}
                theme={{roundness: 30}}
                labelStyle={{fontSize: 20, marginTop: 15}}
                uppercase={false}
          // onPress={onSignIn}
        >
          Thông tin cá nhân
        </Button>
        <Button color={"#f0f0f0"}
                style={{marginTop: 30, width: Layout.window.width - 60, alignSelf: 'center', height: 60}}
                mode={'contained'}
                theme={{roundness: 30}}
                labelStyle={{fontSize: 20, marginTop: 15}}
                uppercase={false}
          // onPress={onSignIn}
        >
          Đăng bán
        </Button>
        <Button color={"#f0f0f0"}
                style={{marginTop: 30, width: Layout.window.width - 60, alignSelf: 'center', height: 60}}
                mode={'contained'}
                theme={{roundness: 30}}
                labelStyle={{fontSize: 20, marginTop: 15}}
                uppercase={false}
                onPress={() => {
                  dispatch(logoutAction());
                  navigation.navigate("Login");
                }}
        >
          Đăng xuất
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
