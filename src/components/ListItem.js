import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';

class ListItem extends Component {
  onRowPress() {
    Actions.employeeEdit({ employee: this.props.employee });
  }

  render() {
    const { name } = this.props.employee;

    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
          <View>
            <Text style={styles.titleStyle}>
              {name}
            </Text>
          </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    paddingLeft: 20
  }
};

export default ListItem;
