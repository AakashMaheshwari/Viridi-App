/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React from 'react';
 import { StyleSheet, Text, View } from 'react-native';
 import {StackNavigator} from 'react-navigation';

 import LoginScreen from './Screens/LoginScreen';
 import OTPScreen from './Screens/OTPScreen';
 import KYCScreen from './Screens/KYCScreen';
 import HomeScreen from './Screens/HomeScreen';
//  import navigateTab from './Screens'

 const ScreenNavigations=StackNavigator({
   LoginScreen:{screen:LoginScreen},
   OTPScreen:{screen:OTPScreen},
   KYCScreen:{screen:KYCScreen},
   HomeScreen:{screen:HomeScreen}
 })

 export default class Vridi extends React.Component {
   render() {
     return (
      <ScreenNavigations/>
     );
   }
 }

 const styles = StyleSheet.create({
   container: {
     flex: 1,
    //  backgroundColor: 'black',
    //  alignItems: 'center',
    //  justifyContent: 'center',
   },
 });
