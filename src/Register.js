import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

class Register extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      first: '',
      last: '',
      username: '',
      email: '',
      password: '',
    };
  }

  handleEmailTextInput(text) {
    this.setState({email: text});
  }
  handleFirstNameTextInput(text) {
    this.setState({first: text});
  }
  handleLastNameTextInput(text) {
    this.setState({last: text});
  }
  handleUsernameTextInput(text) {
    this.setState({username: text});
  }
  handlePasswordTextInput(text) {
    this.setState({password: text});
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.body}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Text>{'<'}</Text>
          </TouchableOpacity>

          <Text style={styles.heading}>Register Screen</Text>
          <View style={styles.formContainer}>
            <View style={styles.formControl}>
              <TextInput
                textId="firstNameTextInput"
                style={styles.textInput}
                onChangeText={e => this.handleFirstNameTextInput(e)}
                placeholder="First Name"
              />
            </View>
            <View style={styles.formControl}>
              <TextInput
                textId="lastNameTextInput"
                style={styles.textInput}
                onChangeText={e => this.handleLastNameTextInput(e)}
                placeholder="Last Name"
              />
            </View>
            <View style={styles.formControl}>
              <TextInput
                textId="emailTextInput"
                style={styles.textInput}
                onChangeText={e => this.handleEmailTextInput(e)}
                placeholder="Email Name"
              />
            </View>
            <View style={styles.formControl}>
              <TextInput
                textId="userNameTextInput"
                style={styles.textInput}
                onChangeText={e => this.handleUsernameTextInput(e)}
                placeholder="Username"
              />
            </View>
            <View style={styles.formControl}>
              <TextInput
                textId="passwordTextInput"
                style={styles.textInput}
                onChangeText={e => this.handlePasswordTextInput(e)}
                placeholder="Password"
              />
            </View>
          </View>
          <TouchableOpacity
            textId="loginButton"
            activeOpacity={0.6}
            style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  heading: {
    fontSize: 16,
    textAlign: 'center',
  },
  formContainer: {
    marginTop: 20,
  },
  formControl: {
    width: 350,
    height: 50,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 10,
  },
  textInput: {
    padding: 15,
    fontSize: 20,
    height: 50,
  },
  buttonContainer: {
    marginTop: 50,
    height: 50,
    width: 350,
    backgroundColor: 'red',
    justifyContent: 'center',
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
  },
});

export default Register;
