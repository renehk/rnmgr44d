import React from 'react';
import { View } from 'react-native';

const styles = {
  containerStyle: {
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative',
  },
};

const CardSection = (props) => {
  return (
    <View style={[styles.containerStyle, props.style]}>
      {props.children}
    </View>
  );
};

export { CardSection };
