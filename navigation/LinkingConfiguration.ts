/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import {LinkingOptions} from '@react-navigation/native';
import * as Linking from 'expo-linking';

import {RootStackParamList} from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          TabOne: {
            screens: {
              TabOneScreen: 'one',
            },
          },
          TabTwo: {
            screens: {
              TabTwoScreen: 'two',
            },
          },
          Home: {
            screens: {
              HomeScreen: 'home',
            },
          },
          More: {
            screens: {
              MoreScreen: 'more',
            },
          },
          Auction: {
            screens: {
              AuctionScreen: 'auction',
            },
          },
        },
      },
      Login: "login",
      SignUp: "signUp",
      Modal: 'modal',
      Information: "information",
      ChangePassword: "changePassword",
      PostForSale: "postForSale",
      DetailProduct: "DetailProduct",
      NotFound: '*',
    },
  },
};

export default linking;
