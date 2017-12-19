import React from 'react';
import { View, Text, Image } from 'react-native';


const styles = {
  viewStyle: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    height: 204,
    paddingTop: 10,
    elevation: 2,
    position: 'relative',
  },
  textStyle: {
    fontSize: 20,
    fontFamily: 'Montserrat-Bold',
    padding: 5,
    color: '#3b4052',
  },
  imageStyle: {
    flex: 1,
    width: 280,
    height: 60,
    resizeMode: 'contain',
  },
};

const Header = (props) => {
  const { textStyle, viewStyle, imageStyle } = styles;

  return (
    <View style={viewStyle}>
      <Image style={imageStyle} source={require('./fgfLogo.png')} />
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};


export { Header };
