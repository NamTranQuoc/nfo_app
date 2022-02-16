import {ScrollView, StyleSheet} from 'react-native';

import {Text, View} from '../../components/Themed';
import * as React from 'react';
import {useState} from 'react';
import {RootTabScreenProps} from "../../types";
import {Avatar, Button, TextInput} from "react-native-paper";
import {useDispatch, useSelector} from "react-redux";
import Layout from "../../constants/Layout";
import {Picker} from "@react-native-picker/picker";
import {updateMemberAction} from "../../redux/actions/MemberAction";
import * as ImagePicker from 'expo-image-picker';
import {getFileURL, uploadImage} from "../../utils/ParseUtils";

export default function InformationScreen({navigation}: RootTabScreenProps<'Information'>) {
  const dispatch = useDispatch();
  const {member} = useSelector(({member}) => member);
  const [name, setName] = useState(member.name);
  const [gender, setGender] = useState(member.gender);
  const [phone, setPhone] = useState(member.phone_number);
  const [urlAvatar, setUrlAvatar] = useState(member.avatar);
  const [avatar, setAvatar] = useState(null);

  function onsubmit() {
    let fileName = null;
    if (avatar !== null) {
      fileName = member._id + ".png";
      uploadImage(avatar, fileName, "avatars");
    }
    dispatch(updateMemberAction(name, phone, gender, getFileURL("avatars", fileName)));
  }

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setUrlAvatar(result.uri);
      const file = await fetch(result.uri);
      const blob = await file.blob();
      setAvatar(blob);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={{alignItems: "center"}}>
        <Avatar.Image size={120}
                      source={{uri: urlAvatar !== null ? urlAvatar : 'https://firebasestorage.googleapis.com/v0/b/nfo-app.appspot.com/o/default%2Favatar-default.png?alt=media'}}
                      style={{marginTop: 30}}
                      onTouchStart={pickImage}/>
        <Text style={{marginTop: 10, fontSize: 20, fontWeight: "bold"}}>{member.email}</Text>
      </View>
      <View style={{flex: 2, backgroundColor: "#ffffff", flexDirection: 'column'}}>
        <TextInput
          label="Name"
          mode={'outlined'}
          theme={{roundness: 30}}
          value={name}
          onChangeText={t => setName(t)}
          style={{
            marginTop: 10,
            marginLeft: 30,
            marginRight: 30,
            paddingLeft: 10,
            height: 60,
            justifyContent: "center"
          }}
        />
        <View style={{
          borderRadius: 30,
          marginTop: 10,
          marginLeft: 30,
          marginRight: 30,
          height: 60,
          justifyContent: "center",
          borderStyle: "solid",
          borderColor: "#6c6767",
          borderWidth: 1,
          backgroundColor: "#f6f6f6"
        }}>
          <Picker
            selectedValue={gender !== null ? gender : "male"}
            style={{
              height: 60,
              marginLeft: 10
            }}
            onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
          >
            <Picker.Item value="male" label="Nam"/>
            <Picker.Item value="female" label="Nữ"/>
            <Picker.Item value="other" label="Khác"/>
          </Picker>
        </View>
        <TextInput
          label="Phone number"
          mode={'outlined'}
          theme={{roundness: 30}}
          value={phone}
          onChangeText={t => setPhone(t)}
          style={{
            marginTop: 10,
            marginLeft: 30,
            marginRight: 30,
            paddingLeft: 10,
            height: 60,
            justifyContent: "center"
          }}
        />
        <Button color={"#0a6882"}
                style={{
                  marginTop: 30,
                  width: Layout.window.width - 60,
                  alignSelf: 'center',
                  height: 60,
                  marginBottom: 100
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
