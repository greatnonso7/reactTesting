import React from 'react';
import renderer from 'react-test-renderer';
import Register from '../src/Register';

test('Register snapshot ', () => {
  const snap = renderer.create(<Register />).toJSON();

  expect(snap).toMatchSnapshot();
});

test('Should change the state if email is entered', () => {
  const instanceOf = renderer.create(<Register />).getInstance();
  instanceOf.handleEmailTextInput('jon@jon.com');
  expect(instanceOf.state.email).toEqual('jon@jon.com');
});

test('Should change the state if first name is entered', () => {
  const instanceOf = renderer.create(<Register />).getInstance();
  instanceOf.handleFirstNameTextInput('Chinonso');
  expect(instanceOf.state.first).toEqual('Chinonso');
});

test('Should change the state if last name is entered', () => {
  const instanceOf = renderer.create(<Register />).getInstance();
  instanceOf.handleLastNameTextInput('Ichoku');
  expect(instanceOf.state.last).toEqual('Ichoku');
});

test('Should change the state if username is entered', () => {
  const instanceOf = renderer.create(<Register />).getInstance();
  instanceOf.handleUsernameTextInput('chinonso7');
  expect(instanceOf.state.username).toEqual('chinonso7');
});

test('Should change the state if password is entered', () => {
  const instanceOf = renderer.create(<Register />).getInstance();
  instanceOf.handlePasswordTextInput('12345678');
  expect(instanceOf.state.password).toEqual('12345678');
});
