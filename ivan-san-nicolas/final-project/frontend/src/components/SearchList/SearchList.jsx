import React, { useState, useEffect } from 'react';
import {
  ScrollView, ImageBackground,
  View, Text, TouchableOpacity, Image,
} from 'react-native';
import { connect } from 'react-redux';
import { loadUser, setUserId } from '../../redux/actions/userActions';
import {
  setCharacterId, loadCharacterByKey,
} from '../../redux/actions/characterActions';
import { loadCharactersByOwner } from '../../redux/actions/charactersActions';
import Header from '../Header/Header';
import NavigationBar from '../NavigationBar/NavigationBar';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import styles from './SearchListStyles';
import absalomBackground from '../../images/absalom-background.png';
import addIcon from '../../images/add-icon-blue.png';

function SearchList({
  userItem, userId, charactersArray, dispatch, navigation,
}) {
  const [characterList, setCharacterList] = useState([]);
  const [addCharacterModalView, setAddCharacterModalView] = useState(false);

  useEffect(() => {
    if (!userId?.length) {
      dispatch(setUserId('5fc3f007332636744ff4a820'));
    }

    if (!userItem?._id) {
      dispatch(loadUser(userItem._id));
      setCharacterList([]);
    }

    if (userId && (!charactersArray || !charactersArray?.length)) {
      dispatch(loadCharactersByOwner(userItem._id));
    }

    setCharacterList(charactersArray || null);
  }, [userItem, userId, charactersArray]);
  return (
    <ImageBackground source={absalomBackground} style={styles.backgroundImage}>
      <Header navigation={navigation} userId={userItem._id} dispatch={dispatch} />
      <ScrollView style={styles.container}>
        {(characterList?.length && userItem?.userName) ? (
          <View style={styles.characterList}>
            <View style={styles.title__bar} />
            <Text style={styles.characterList__title}>{`${userItem.userName} Characters`}</Text>
            <View style={styles.title__bar} />
            <View style={styles.characterList__list}>
              {characterList.map((character) => (
                <TouchableOpacity
                  style={styles.characterList__list__block}
                  key={`${character._id}${Math.random()}`}
                  activeOpacity={0.8}
                  onPress={() => {
                    dispatch(setCharacterId(character._id));
                    dispatch(loadCharacterByKey(character.uniqueKey, userItem._id));
                    navigation.navigate('CharacterDetail');
                  }}
                >
                  <View style={styles.characterList__list__block__row}>
                    <View style={styles.characterList__character__firstRow__name__block}>
                      <Text style={styles.characterList__character__firstRow__name__text}>
                        {character.name}
                      </Text>
                    </View>
                    <Text
                      testID="LevelText"
                      style={styles.characterList__character__firstRow__text}
                    >
                      Level:
                      {' '}
                      {character.lvl}
                    </Text>
                  </View>
                  <View style={styles.characterList__list__block__row}>
                    <Text
                      id={Math.random()}
                      style={styles.characterList__character__secondRow__text}
                    >
                      {character.game}
                    </Text>
                    <Text
                      id={Math.random()}
                      style={styles.characterList__character__secondRow__text}
                    >
                      {character.race}
                    </Text>
                    <Text
                      id={Math.random()}
                      style={styles.characterList__character__secondRow__text}
                    >
                      {character.characterClass}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ) : (
          <View style={styles.characterList}>
            <Text style={styles.characterList__title}>You have no characters</Text>
            <Text style={styles.characterList__title}>Add a character to start!</Text>
            <LoadingSpinner />
          </View>
        )}
      </ScrollView>
      <TouchableOpacity
        style={styles.addIcon__block}
        onPress={() => setAddCharacterModalView(!addCharacterModalView)}
      >
        <Image source={addIcon} style={styles.icon} />
      </TouchableOpacity>
      <NavigationBar navigation={navigation} userId={userItem._id} dispatch={dispatch} />
    </ImageBackground>
  );
}

function mapStateToProps({ usersReducer, charactersReducer }) {
  return {
    usersArray: usersReducer.usersArray,
    charactersArray: charactersReducer.charactersArray,
  };
}

export default connect(mapStateToProps)(SearchList);
