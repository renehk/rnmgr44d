import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSave } from '../actions';
import { Card, CardSection, Button } from './common';

class EmployeeEdit extends Component {
  componentWillMount() {
    _.forEach(this.props.employee, (value, prop) => {
    this.props.employeeUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const { name, phone, shift, hours } = this.props;
    this.props.employeeSave({ name, phone, shift, hours, uid: this.props.employee.uid });
  }

  onTextPress() {
    const { name, phone, shift, hours } = this.props;

    Communications.text(phone, `Hi ${name}, Your shift is on ${shift} ${hours}`);
  }

  render() {
    return (
      <Card>
        <EmployeeForm />

        <CardSection>
          <Button
            onPress={this.onButtonPress.bind(this)}
            >Save Changes</Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.onTextPress.bind(this)}>Text Schedule</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift, hours } = state.employeeForm;

  return { name, phone, shift, hours };
};

export default connect(mapStateToProps, { employeeUpdate, employeeSave })(EmployeeEdit);
