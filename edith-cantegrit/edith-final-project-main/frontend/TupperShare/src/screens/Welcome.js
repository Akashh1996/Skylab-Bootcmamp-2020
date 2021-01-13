import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator } from 'react-native';
import auth from '@react-native-firebase/auth';

function Welcome({ navigation }) {
    // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }
  function signOut() {
    auth().signOut().then(() => {
      navigation.navigate('Login')
    })
    .catch(error => setLoggedMessage(error.message))
    } 

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <View>
          <Button
          color="#3740FE"
          title="Login"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
        <Text style = {styles.textStyle}>
            Welcome {user.email}
            {/* Welcome {displayName}
            Welcome {displayId}
            Error: {loggedMessage} */}
        </Text>
        <Button
          color="#3740FE"
          title="Logout"
          onPress={() => signOut()}
        />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      display: "flex",
      justifyContent: 'center',
      alignItems: 'center',
      padding: 35,
      backgroundColor: '#fff'
    },
    textStyle: {
      fontSize: 15,
      marginBottom: 20
    }
});

export default Welcome;