import {StyleSheet, TextInput, Text, View} from 'react-native';
import React from 'react';

const CustomTextInput = props => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.SectionStyle}>
        <TextInput
          style={styles.inputStyle}
          placeholderTextColor="#e7e8ea"
          secureTextEntry={props.isPassword}
          autoCorrect={false}
          {...props}
        />
      </View>
      {props.isShowValidation && (
        <View style={styles.errorTextView}>
          <Text style={styles.errorText}>{props.validationErrorMessage}</Text>
        </View>
      )}
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  inputStyle: {
    flex: 1,
    color: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dadae8',
  },
  errorTextView: {
    marginLeft: 50,
    marginTop: -6,
  },
  errorText: {
    fontSize: 14,
    color: '#e87878',
  },
});
