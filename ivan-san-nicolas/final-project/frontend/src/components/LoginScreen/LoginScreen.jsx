import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  Image, ImageBackground, Text,
  TouchableOpacity, View,
} from 'react-native';
import { loadCharactersByOwner } from '../../redux/actions/charactersActions';
import { setUserId, loginGoogle } from '../../redux/actions/userActions';
import styles from './LoginScreenStyles';
import absalomLogo from '../../images/absalom-icon.png';
import googleLogo from '../../images/google-logo.png';

import absalomBackground from '../../images/absalom-background.png';

function LoginScreen({
  navigation, userItem, userId, dispatch,
}) {
  useEffect(() => {
    if (userItem && !userId?.length) {
      setUserId(userItem._id);
    }
    if (userItem?.email) {
      dispatch(loadCharactersByOwner(userItem._id));
      navigation.navigate('CharacterList');
    } else {
      navigation.navigate('LoginScreen');
    }
  });
  return (
    <ImageBackground source={absalomBackground} style={styles.imageBackground}>
      <View style={styles.loginScreen}>
        <View style={styles.login__title__block}>
          <Text style={styles.login__title__headline}>Welcome To</Text>
          <View style={styles.login__title__bar} />
          <Text style={styles.login__title}>ABSALOM</Text>
          <View style={styles.login__title__bar} />
        </View>
        <TouchableOpacity onPress={() => dispatch(loginGoogle())}>
          <Image source={absalomLogo} style={styles.absalomLogo} />
        </TouchableOpacity>
        <TouchableOpacity
          title="Login with Google"
          style={styles.login__button__container}
          onPress={() => dispatch(loginGoogle())}
        >
          <Image source={googleLogo} style={styles.login__button__logo} />
          <Text style={styles.login__button__text}>Login with Google</Text>
        </TouchableOpacity>
        <View name="filler" />
      </View>
    </ImageBackground>
  );
}

function mapStateToProps({ usersReducer }) {
  return {
    userItem: usersReducer.userItem,
    userId: usersReducer.userId,
  };
}

export default connect(mapStateToProps)(LoginScreen);
