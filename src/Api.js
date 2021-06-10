import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';

const Api = ({navigation: {goBack}}) => {
  const [user, setUser] = React.useState([]);

  React.useEffect(() => {
    const getRandomUser = async () => {
      const data = await axios.get('https://randomuser.me/api');
      setUser(data.data.results);
    };
    getRandomUser();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <TouchableOpacity onPress={() => goBack()}>
          <Icon name="arrow-back-circle-outline" size={25} />
        </TouchableOpacity>

        <Text style={styles.heading}>Api Screen</Text>
        <View style={styles.formContainer}>
          <Text>Title: {user[0]?.name?.title}</Text>
          <Text>First Name: {user[0]?.name?.first}</Text>
          <Text>Last Name: {user[0]?.name?.last}</Text>
          <Text>Email: {user[0]?.email}</Text>
          <Text>Gender: {user[0]?.gender}</Text>

          <Image
            source={{uri: user[0]?.picture?.medium}}
            style={{height: 150, width: 150, marginTop: 40, borderRadius: 100}}
            resizeMode="contain"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

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

export default Api;
