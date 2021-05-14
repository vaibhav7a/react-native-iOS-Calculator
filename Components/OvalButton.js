import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const OvalButton = props => {
    const handleClick = () => {
        props.onPress(props.text);
    }
  return (
    <TouchableOpacity style={[styels.button, {backgroundColor: props.bgColor}]} onPress={handleClick}>
      <Text style={[styels.text, {color: props.textColor}]}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

const styels = StyleSheet.create({
  button: {
    height: '100%',
    width: 170,
    backgroundColor: '#DCDCDC',
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 30,
  },
  text: {
    fontSize: 30,
  },
});

export default OvalButton;
