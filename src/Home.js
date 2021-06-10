import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Register')}
        activeOpacity={0.6}
        style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Register Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Api')}
        activeOpacity={0.6}
        style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Api Screen</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonContainer: {
    height: 50,
    width: 350,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#047ffb',
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
  },
});

export default Home;
