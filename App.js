/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useReducer, useState} from 'react';
import type {Node} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import ButtonPanel from './Components/ButtonPanel';
import reducer from './reducer/CalculateLogic';

const App: () => Node = () => {
  const [state, dispatch] = useReducer(reducer, {
    total: null,
    next: null,
    operation: null,
  });

  const buttonPressHandler = buttonName => ({ type: "operation", buttonName: buttonName});

  return (
    <View style={styles.mainContainer}>
      <View style={styles.calculatorContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>{state.next || state.total || '0'}</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <ButtonPanel onPressAction={(buttonName) => dispatch(buttonPressHandler(buttonName))}></ButtonPanel>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'black',
    flex: 1,
  },
  calculatorContainer: {
    width: '100%',
    height: 480,
    //backgroundColor: '#EE5407',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', //Here is the trick
    bottom: 20,
    marginHorizontal: 10,
  },
  buttonsContainer: {
    width: '100%',
    height: '90%',
    marginTop: 15,
  },

  inputContainer: {
    height: 70,
    width: '100%',
    paddingRight: 15,
    paddingLeft: 15,
    //backgroundColor: 'red',
  },
  text: {
    fontSize: 45,
    color: 'white',
    textAlign: 'right',
  },
});

export default App;
