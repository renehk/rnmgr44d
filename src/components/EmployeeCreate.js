import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { employeeUpdate, employeeCreate } from '../actions';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';


class EmployeeCreate extends Component {
  onButtonPress() {
    const { name, phone, shift, hours } = this.props;

    this.props.employeeCreate({ name, phone, shift, hours });
  }

  render() {
    return (
      <Card>
        <EmployeeForm {...this.props}/>
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
          </Button>
          <Button onPress={() => Actions.loadLocation()}>Get Load Location</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift, hours } = state.employeeForm;

  return { name, phone, shift, hours };
};

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate);
