import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
	createUserWithEmail
} from '../redux/actions/auth-actions';
import { LongPressGestureHandler } from 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth'

const Signup = ({ createdUser, registerLoading, errorSignUp,  navigation, dispatch }) => {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [loggedMessage, setLoggedMessage] = useState('HOLA CARACOLA');

  registerUser = () => {
    if(email === '' && password === '') {
      Alert.alert('Enter details to signup!')
    } else {
      auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        res.user.updateProfile({
          displayName: displayName
        })
        console.log(res)
        console.log('User registered successfully!')
        setIsLoading(false)
        setLoggedMessage(`${res.user.uid}`)
        setEmail('')
        setPassword('')
        // navigation.navigate('Login')
      })
      .catch(error => setLoggedMessage(error.message))     
    }
  }

  if (isLoading) {
    return (
      <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
    );
  };
       
   return (
      <View style={styles.container}>  
        <Text>{loggedMessage}</Text>
        <TextInput
          autoCapitalize={'none'}
          style={styles.inputStyle}
          placeholder="Name"
          value={displayName}
          onChangeText={val => setDisplayName(val)}
        />      
        <TextInput
          autoCapitalize={'none'}
          style={styles.inputStyle}
          placeholder="Email"
          value={email}
          onChangeText={val => setEmail(val)}
        />
        <TextInput
          autoCapitalize={'none'}
          style={styles.inputStyle}
          placeholder="Password"
          value={password}
          onChangeText={val => setPassword(val)}
          maxLength={15}
          secureTextEntry={true}
        />   
        <Button
          color="#3740FE"
          title="Signup"
          onPress={() => registerUser()}
        />

        <Text 
          style={styles.loginText}
          onPress={() => navigation.navigate('Login')}>
          Already Registered? Click here to login
        </Text>                          
      </View>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 35,
    backgroundColor: '#fff'
  },
  inputStyle: {
    width: '100%',
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: "center",
    borderColor: "#ccc",
    borderBottomWidth: 1
  },
  loginText: {
    color: '#3740FE',
    marginTop: 25,
    textAlign: 'center'
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
});

function mapStateToProps({ authReducer }) {
	return {
    // createdUser: authReducer.createdUser,
    // registerLoading: authReducer.registerLoading,
    // errorSignUp: authReducer.errorSignUp
	};
}

// function mapDispatchToProps(dispatch) {
// 	return {
// 		actions: bindActionCreators({ createUserWithEmail }, dispatch),
// 	};
// };

connect();
export default connect(mapStateToProps)(Signup);