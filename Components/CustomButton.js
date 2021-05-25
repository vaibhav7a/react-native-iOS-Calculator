import React, {useRef} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import * as Animatable from 'react-native-animatable';

const CustomButton = props => {
  const handleRef = useRef();
  const handleClick = () => {
    // console.log(props.text);
    if (props.text === 'AC') {
      handleRef.current.rotate(500);
    } else if (props.text === '÷' || props.text === 'x' || props.text === '-' || props.text === '+' || props.text === '=') {
      handleRef.current.zoomIn(500);
    }else {
      handleRef.current.jello(1000);
    }
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
