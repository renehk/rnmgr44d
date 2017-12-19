import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#23fecc',
    backgroundColor: '#23fecc',
    marginRight: 5,
    marginLeft: 5,
    padding: 10,
  },
  buttonTextStyle: {
    color: '#fff',
    fontSize: 19,
    padding: 4,
    fontFamily: 'Montserrat-Bold',
    alignSelf: 'center'
  },
};

const Button = ({ onPress, children }) => {
  const { buttonStyle, buttonTextStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={buttonTextStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export { Button };
