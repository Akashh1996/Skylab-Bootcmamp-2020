/* eslint-disable react/prop-types */
import React from 'react';
import { View, Image, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { loadCharactersByOwner } from '../../redux/actions/charactersActions';
import styles from './HeaderStyles';
import absalomIcon from '../../images/absalom-icon.png';
import userIcon from '../../images/user-icon.png';

function Header({ navigation, userId, dispatch }) {
  return (
    <View styles={styles.container}>
      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            dispatch(loadCharactersByOwner(userId));
            navigation.navigate('UserDetail');
          }}
        >
          <Image source={userIcon} style={styles.userIcon} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            dispatch(loadCharactersByOwner(userId));
            navigation.navigate('CharacterList');
          }}
        >
          <Text style={styles.absalom__title}>ABSALOM</Text>
        </TouchableOpacity>
        <View style={styles.button}>
          <View style={styles.navigationIcon} />
        </View>
      </View>
    </View>
  );
}

export default Header;
