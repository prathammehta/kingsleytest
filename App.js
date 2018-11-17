/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import LoginScreen from './src/LoginScreen'

export default class App extends Component{
  render() {
    return (
      <View style={{flex:1}}>
        <LoginScreen/>
      </View>
    );
  }
}