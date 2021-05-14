import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const CustomButton = props => {
    const handleClick = () => {
       // console.log(props.text);
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
    width: 70,
    backgroundColor: '#DCDCDC',
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
  },
});

export default CustomButton;
