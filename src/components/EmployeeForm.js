import React, { Component } from 'react';
import { Text, View, Picker } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { CardSection, Input } from './common';

class EmployeeForm extends Component {
  render() {
    return (
      <View>
        <CardSection>
          <Input
            label="Name"
            placeholder="Jane"
            value={this.props.name}
            onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="555-555-5555"
            value={this.props.phone}
            onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
          />
        </CardSection>

        <CardSection style={{ flexDirection: 'column' }} >
          <Text style={styles.pickerTextStyle}>Shift</Text>
          <Picker
            selectedValue={this.props.shift}
            onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
          >
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" initial />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>
        <CardSection>
          <Input
            label="Hours"
            placeholder="8am - 5pm"
            value={this.props.hours}
            onChangeText={value => this.props.employeeUpdate({ prop: 'hours', value })}
          />
        </CardSection>
      </View>

    );
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 12,
    paddingLeft: 28,
    fontFamily: 'Montserrat-Regular',
    color: '#3b4052'
  }
};

const mapStateToProps = (state) => {
  const { name, phone, shift, hours } = state.employeeForm;

  return { name, phone, shift, hours };
};


export default connect(mapStateToProps, {employeeUpdate})(EmployeeForm);
