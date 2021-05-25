import React, {useRef} from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback} from 'react-native';
import * as Animatable from 'react-native-animatable';

const OvalButton = props => {
  const handleRef = useRef();
  const handleClick = () => {
    handleRef.current.jello(1000);
    props.onPress(props.text);
  };
  return (
    <TouchableWithoutFeedback
      style={[styels.button, {backgroundColor: props.bgColor}]}
      onPress={handleClick}>
      <Animatable.View
        ref={handleRef}
        style={[styels.button, {backgroundColor: props.bgColor}]}>
        <Text style={[styels.text, {color: props.textColor}]}>
          {props.text}
        </Text>
      </Animatable.View>
    </TouchableWithoutFeedback>
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
