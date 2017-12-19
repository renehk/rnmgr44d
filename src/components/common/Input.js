import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  autoCapitalize,
}) => {
  const { inputStyle, labelStyle, containerStyle } = styles;
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        autoCapitalize={autoCapitalize}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#000',
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    flex: 2,
  },
  labelStyle: {
    fontSize: 12,
    paddingLeft: 25,
    flex: 1,
    fontFamily: 'Montserrat-Regular',
    color: '#3b4052',
  },
  containerStyle: {
    height: 55,
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    borderColor: '#23fecc',
    borderWidth: 3,
  },
};

export { Input };
