/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

type Props = {};
export default class App extends Component<Props> {

  //impostiamo lo state per il componente, conterrà i dati
  //degli input
  state = {
    fullName: '',
    phoneNumber: '',
  }

  fullNameChangeHandler = (text) => {

    this.setState({ fullName: text})
  }

  phoneNumberChangeHandler = (text) => {

    this.setState({ phoneNumber: text})
  }

  onPressFakeSubmit = (event) => {
    alert('you filled the form')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.welcome}>Fill the Form!</Text>
        <TextInput
        placeholder={'Type full-name'}
        autoCapitalize={'words'}
        style={styles.inputs}
        value={this.state.fullName}
        onChangeText={this.fullNameChangeHandler}
        editable={true}
        autoFocus={true}
        clearButtonMode={'while-editing'}
        clearTextOnFocus={true}/>
        <TextInput
        placeholder={'Here goes your phone number'}
        style={styles.inputs}
        value={this.state.phoneNumber}
        onChangeText={this.phoneNumberChangeHandler}
        editable={true}
        clearButtonMode={'while-editing'}
        clearTextOnFocus={true}
        multiline={true}
        dataDetectorTypes={'phoneNumber'}
        keyboardType={'phone-pad'}
        />
        <TouchableOpacity
        style={styles.submitBtn}
        onPress={this.onPressFakeSubmit}
        >
         <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginTop: 100
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    marginBottom: 30
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  inputs : {
   width: 300,
   borderColor: 'black',
   borderWidth: 1,
   padding: 20,
   borderRadius: 12,
   marginBottom: 20
 },
 submitBtn: {
   padding: 20,
   borderWidth: 1,
   borderRadius: 12,
   backgroundColor: 'green',
   marginBottom: 20
 },
 loginText:{
      color:'#fff',
      textAlign:'center',
  }
});
