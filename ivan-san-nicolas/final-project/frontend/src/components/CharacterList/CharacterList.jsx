import React, { useState, useEffect } from 'react';
import {
  ScrollView, ImageBackground, TextInput,
  View, Text, TouchableOpacity, Image,
} from 'react-native';
import { connect } from 'react-redux';
import { Overlay, Button } from 'react-native-elements';
import {
  setCharacterId, createCharacter, loadCharacterByKey,
} from '../../redux/actions/characterActions';
import { loadCharactersByOwner } from '../../redux/actions/charactersActions';
import { displayAddCharacterModal, addNewCharacter, newCharacterModel } from './CharacterListFunctions';
import Header from '../Header/Header';
import NavigationBar from '../NavigationBar/NavigationBar';
import styles from './CharacterListStyles';
import absalomBackground from '../../images/absalom-background.png';
import addIcon from '../../images/add-icon-blue.png';

function CharacterList({
  userItem, charactersArray, dispatch, navigation,
}) {
  const [addCharacterModalView, setAddCharacterModalView] = useState(false);

  const [newCharacter, setNewCharacter] = useState(newCharacterModel);

  useEffect(() => {
    if (userItem && (!charactersArray || !charactersArray?.length)) {
      dispatch(loadCharactersByOwner(userItem._id));
    }
  }, [userItem, charactersArray?.length]);

  return (
    <ImageBackground source={absalomBackground} style={styles.backgroundImage}>
      <Header navigation={navigation} userId={userItem._id} dispatch={dispatch} />
      <ScrollView style={styles.container}>
        {(charactersArray?.length && userItem?.userName) ? (
          <View style={styles.characterList}>
            <View style={styles.title__bar} />
            <Text style={styles.characterList__title}>{`${userItem.userName} Characters`}</Text>
            <View style={styles.title__bar} />
            <View style={styles.characterList__list}>
              {charactersArray.map((character) => (
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
            <View style={styles.title__bar} />
            <Text style={styles.characterList__title}>{`${userItem.userName} Characters`}</Text>
            <View style={styles.title__bar} />
            <TouchableOpacity
              style={styles.no__character__block}
              onPress={() => setAddCharacterModalView(!addCharacterModalView)}
            >
              <Text style={styles.no__character__text}>You have no characters</Text>
              <Text style={styles.no__character__text}>Add a character to start!</Text>
            </TouchableOpacity>
          </View>
        )}
        <Overlay
          name="add character modal"
          isVisible={addCharacterModalView}
          overlayStyle={styles.addCharacterModal}
          backdropStyle={styles.addCharacterModal__background}
          animationType="fade"
          onBackdropPress={() => {
            displayAddCharacterModal(setAddCharacterModalView, addCharacterModalView);
            setNewCharacter(newCharacterModel);
          }}
        >
          <View style={styles.addCharacterModal__block}>
            <Text style={styles.addCharacterModal__title}>
              Add a new character
            </Text>
            <View style={styles.addCharacterModal__row}>
              <Text style={styles.addCharacterModal__text}>Name:</Text>
              <View style={styles.addCharacterModal__input}>
                <TextInput
                  style={styles.addCharacterModal__textInput}
                  placeholder="Name"
                  autoCorrect={false}
                  value={newCharacter.name}
                  onChangeText={(text) => setNewCharacter({ ...newCharacter, name: text })}
                />
              </View>
            </View>
            <View style={styles.addCharacterModal__row}>
              <Text style={styles.addCharacterModal__text}>Game:</Text>
              <View style={styles.addCharacterModal__input}>
                <TextInput
                  style={styles.addCharacterModal__textInput}
                  placeholder="Game"
                  autoCorrect={false}
                  value={newCharacter.game}
                  onChangeText={(text) => setNewCharacter({ ...newCharacter, game: text })}
                />
              </View>
            </View>
            <View style={styles.addCharacterModal__row}>
              <Text style={styles.addCharacterModal__text}>Race:</Text>
              <View style={styles.addCharacterModal__input}>
                <TextInput
                  style={styles.addCharacterModal__textInput}
                  placeholder="Race"
                  autoCorrect={false}
                  value={newCharacter.race}
                  onChangeText={(text) => setNewCharacter({ ...newCharacter, race: text })}
                />
              </View>
            </View>
            <View style={styles.addCharacterModal__row}>
              <Text style={styles.addCharacterModal__text}>Class:</Text>
              <View style={styles.addCharacterModal__input}>
                <TextInput
                  style={styles.addCharacterModal__textInput}
                  placeholder="Class"
                  autoCorrect={false}
                  value={newCharacter.characterClass}
                  onChangeText={(text) => setNewCharacter(
                    { ...newCharacter, characterClass: text },
                  )}
                />
              </View>
            </View>
            <View style={styles.addCharacterModal__row}>
              <Text style={styles.addCharacterModal__text}>Level:</Text>
              <View style={styles.addCharacterModal__input}>
                <TextInput
                  style={styles.addCharacterModal__textInput}
                  placeholder="Level"
                  autoCorrect={false}
                  value={newCharacter.lvl}
                  onChangeText={(text) => setNewCharacter({ ...newCharacter, lvl: text })}
                />
              </View>
            </View>
            <Button
              title="Create Character"
              buttonStyle={styles.buttonConfirmAddCharacterModal}
              onPress={() => addNewCharacter(
                newCharacter, userItem._id, charactersArray,
                setAddCharacterModalView,
                addCharacterModalView, createCharacter, dispatch,
              )}
            />
          </View>
        </Overlay>

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
    userItem: usersReducer.userItem,
    userId: usersReducer.userId,
    charactersArray: charactersReducer.charactersArray,
  };
}

export default connect(mapStateToProps)(CharacterList);
