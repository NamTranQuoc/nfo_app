import {Button, StyleSheet} from 'react-native';
import {Text, View} from '../../components/Themed';
import {RootTabScreenProps} from "../../types";

export default function MenuScreen({navigation}: RootTabScreenProps<'More'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MORE</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>
      <Button title={"Login"} onPress={() => navigation.navigate("Login")}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
