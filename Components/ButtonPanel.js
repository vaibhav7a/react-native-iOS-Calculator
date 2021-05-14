import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import CustomButton from './CustomButton';
import OvalButton from './OvalButton';

const ButtonPanel = (props) => {
    const buttonPress = (buttonName) => {
        props.onPressAction(buttonName);
    }
  return (
    <View style={styles.buttonPanel}>
      <View style={styles.buttonContainer}>
        <CustomButton text="AC" bgColor="#D3D3D3" textColor="black" onPress={buttonPress}/>
        <CustomButton text="+/−" bgColor="#D3D3D3" textColor="black" onPress={buttonPress}/>
        <CustomButton text="%" bgColor="#D3D3D3" textColor="black" onPress={buttonPress}/>
        <CustomButton text="÷" bgColor="#EE5407" textColor="white" onPress={buttonPress}/>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton text="7" bgColor="#808080" textColor="white" onPress={buttonPress}/>
        <CustomButton text="8" bgColor="#808080" textColor="white" onPress={buttonPress}/>
        <CustomButton text="9" bgColor="#808080" textColor="white" onPress={buttonPress}/>
        <CustomButton text="x" bgColor="#EE5407" textColor="white" onPress={buttonPress}/>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton text="4" bgColor="#808080" textColor="white" onPress={buttonPress}/>
        <CustomButton text="5" bgColor="#808080" textColor="white" onPress={buttonPress}/>
        <CustomButton text="6" bgColor="#808080" textColor="white" onPress={buttonPress}/>
        <CustomButton text="-" bgColor="#EE5407" textColor="white" onPress={buttonPress}/>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton text="1" bgColor="#808080" textColor="white" onPress={buttonPress}/>
        <CustomButton text="2" bgColor="#808080" textColor="white" onPress={buttonPress}/>
        <CustomButton text="3" bgColor="#808080" textColor="white" onPress={buttonPress}/>
        <CustomButton text="+" bgColor="#EE5407" textColor="white" onPress={buttonPress}/>
      </View>
      <View style={styles.buttonContainer}>
        <OvalButton text="0" bgColor="#808080" textColor="white" onPress={buttonPress}/>
        <CustomButton text="." bgColor="#808080" textColor="white" onPress={buttonPress}/>
        <CustomButton text="=" bgColor="#EE5407" textColor="white" onPress={buttonPress}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonPanel: {
    //height: '100%',
    width: '100%',
    position: 'absolute', //Here is the trick
    top: 0,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    height: 70,
    justifyContent: 'space-around',
    marginBottom: 15,
  },
});

export default ButtonPanel;
