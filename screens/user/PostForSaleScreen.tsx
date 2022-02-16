import {Image, ScrollView, StyleSheet} from 'react-native';

import {View} from '../../components/Themed';
import * as React from 'react';
import {useState} from 'react';
import {RootTabScreenProps} from "../../types";
import {Button, IconButton, TextInput} from "react-native-paper";
import {useDispatch} from "react-redux";
import Layout from "../../constants/Layout";
import * as ImagePicker from "expo-image-picker";
import MultiSelect from 'react-native-multiple-select';
import ProductType from "../../components/ProductType";
import {color1} from "../../constants/Colors";

export default function PostForSale({navigation}: RootTabScreenProps<'PostForSale'>) {
  const dispatch = useDispatch();
  const [images, setImages] = useState([]);
  const [categories, setCategories] = useState([]);
  let multiSelect = null;

  const items = [{
    id: '92iijs7yta',
    name: 'Ondo',
  }, {
    id: 'a0s0a8ssbsd',
    name: 'Ogun',
  }, {
    id: '16hbajsabsd',
    name: 'Calabar',
  }, {
    id: 'nahs75a5sg',
    name: 'Lagos',
  }, {
    id: '667atsas',
    name: 'Maiduguri',
  }, {
    id: 'hsyasajs',
    name: 'Anambra',
  }, {
    id: 'djsjudksjd',
    name: 'Benue',
  }, {
    id: 'sdhyaysdj',
    name: 'Kaduna',
  }, {
    id: 'suudydjsjd',
    name: 'Abuja',
  }];

  function onsubmit() {
    // let fileName = null;
    // if (avatar !== null) {
    //   fileName = member._id + ".png";
    //   uploadImage(avatar, fileName, "avatars");
    // }
    // dispatch(updateMemberAction(name, phone, gender, getFileURL("avatars", fileName)));
  }

  const pickImage = async (index) => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      // setUrlAvatar(result.uri);
      // const file = await fetch(result.uri);
      // const blob = await file.blob();
      // setAvatar(blob);
      // setImages(images.splice(index, 0, {
      //   imageUri: result.uri,
      //   image: blob
      // }))
    }
  };

  function onSelectedItemsChange(a) {
    setCategories(a);
  }

  return (
    <ScrollView style={styles.container}>
      <View
        style={{alignItems: "center", display: "flex", flexDirection: "row", justifyContent: "center", paddingTop: 30}}>
        <Image style={{width: "30%", height: 120, borderRadius: 10}}
               source={{uri: "https://firebasestorage.googleapis.com/v0/b/nfo-app.appspot.com/o/default%2Fadd-image.png?alt=media"}}

        />
        <Image style={{width: "30%", height: 120, marginLeft: 10, marginRight: 10, borderRadius: 10}}
               source={{uri: "https://firebasestorage.googleapis.com/v0/b/nfo-app.appspot.com/o/default%2Fadd-image.png?alt=media"}}

        />
        <Image style={{width: "30%", height: 120, borderRadius: 10}}
               source={{uri: "https://firebasestorage.googleapis.com/v0/b/nfo-app.appspot.com/o/default%2Fadd-image.png?alt=media"}}

        />
      </View>
      <View style={{flex: 2, backgroundColor: "#ffffff", flexDirection: 'column'}}>
        <TextInput
          label="Name"
          mode={'outlined'}
          theme={{roundness: 30}}
          // value={name}
          // onChangeText={t => setName(t)}
          style={{
            marginTop: 30,
            marginLeft: 30,
            marginRight: 30,
            paddingLeft: 10,
            height: 60,
            justifyContent: "center"
          }}
        />
        <MultiSelect
          hideTags
          items={items}
          uniqueKey="id"
          // ref={(component) => {multiSelect = component}}
          onSelectedItemsChange={onSelectedItemsChange}
          selectedItems={categories}
          selectText="Pick Items"
          searchInputPlaceholderText="Search Items..."
          // altFontFamily="ProximaNova-Light"
          tagRemoveIconColor="#CCC"
          tagBorderColor="#CCC"
          tagTextColor="#CCC"
          selectedItemTextColor="#CCC"
          selectedItemIconColor="#CCC"
          itemTextColor="#000"
          displayKey="Category"
          // searchInputStyle={{ color: '#CCC' }}
          styleDropdownMenu={[styles.select, {paddingRight: 20, paddingLeft: 20}]}
          styleRowList={{backgroundColor: "#f6f6f6"}}
          submitButtonColor="#CCC"
          submitButtonText="Done"
        />
        <TextInput
          label="Phone Number"
          mode={'outlined'}
          theme={{roundness: 30}}
          // value={name}
          // onChangeText={t => setName(t)}
          style={{
            marginTop: 10,
            marginLeft: 30,
            marginRight: 30,
            paddingLeft: 10,
            height: 60,
            justifyContent: "center"
          }}
        />
        <TextInput
          multiline={true}
          numberOfLines={4}
          label="Address"
          mode={'outlined'}
          theme={{roundness: 30}}
          // value={name}
          // onChangeText={t => setName(t)}
          style={{
            marginTop: 20,
            marginLeft: 30,
            marginRight: 30,
            paddingLeft: 10,
            marginBottom: 30,
            justifyContent: "center"
          }}
        />
        <ProductType/>
        <ProductType/>
        <IconButton
          icon="plus"
          color={color1}
          size={50}
          style={{alignSelf: "center"}}
          onPress={() => console.log('Pressed')}
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
          POST
        </Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  select: {
    borderRadius: 30,
    marginTop: 26,
    marginLeft: 30,
    marginRight: 30,
    height: 60,
    justifyContent: "center",
    borderStyle: "solid",
    borderColor: "#6c6767",
    borderWidth: 1,
  }
});
