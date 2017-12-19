import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import LoadLocation from './components/LoadLocation';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import { Actions } from 'react-native-router-flux';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 62 }}>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Please Login" />
      </Scene>

      <Scene key="root">
        <Scene
          initial
          onRight={() => Actions.employeeCreate()}
          rightTitle="Add"
          key="employeeList"
          component={EmployeeList}
          title="Employees" />
      </Scene>
      <Scene key="employeeCreate" component={EmployeeCreate} title="Employee Create"/>
      <Scene key="employeeEdit" component={EmployeeEdit} title="Edit Employee"/>
      <Scene key="loadLocation" component={LoadLocation} title="Load Location" />
    </Router>
  );
};

export default RouterComponent;
