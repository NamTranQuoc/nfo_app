/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {FontAwesome} from '@expo/vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {DarkTheme, DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {ColorSchemeName} from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import HomeScreen from "../screens/user/HomeScreen";
import MenuScreen from '../screens/user/MenuScreen';
import {RootStackParamList, RootTabParamList} from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";
import {Header} from "../screens/user/Header";
import InformationScreen from "../screens/user/InformationScreen";
import {HeaderModal} from "../screens/user/HeaderModal";
import ChangePasswordScreen from "../screens/user/ChangePasswordScreen";
import PostForSale from "../screens/user/PostForSaleScreen";
import DetailProductScreen from "../screens/user/DetailProductScreen";
import AuctionScreen from "../screens/user/AuctionScreen";

export default function Navigation({colorScheme}: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator/>
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
      <Stack.Screen name="SignUp" component={SignUpScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{headerShown: false}}/>
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{title: 'Oops!'}}/>
      <Stack.Group screenOptions={{presentation: 'modal', header: HeaderModal}}>
        <Stack.Screen name="Modal" component={ModalScreen}/>
        <Stack.Screen name="Information" component={InformationScreen}/>
        <Stack.Screen name="ChangePassword" component={ChangePasswordScreen}/>
        <Stack.Screen name="PostForSale" component={PostForSale}/>
        <Stack.Screen name="DetailProduct" component={DetailProductScreen}/>
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={() => ({
          title: 'Home',
          tabBarIcon: ({color}) => <TabBarIcon name="home" color={color}/>,
          header: Header,
        })}
      />
      <BottomTab.Screen
        name="Auction"
        component={AuctionScreen}
        options={{
          title: 'Auction',
          tabBarIcon: ({color}) => <TabBarIcon name="gavel" color={color}/>,
          header: Header
        }}
      />
      <BottomTab.Screen
        name="More"
        component={MenuScreen}
        options={{
          title: 'More',
          tabBarIcon: ({color}) => <TabBarIcon name="bars" color={color}/>,
          header: Header
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{marginBottom: -3}} {...props} />;
}
