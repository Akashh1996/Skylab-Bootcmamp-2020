import React, { useState, useEffect } from 'react';
import {
  ImageBackground, Text, View, ScrollView,
  Image, TouchableOpacity, TextInput,
} from 'react-native';
import { Button, Overlay } from 'react-native-elements';
import { connect } from 'react-redux';
// import { PropTypes } from 'prop-types';
import { deleteCharacter } from '../../redux/actions/characterActions';
import { loadCharactersSuccess } from '../../redux/actions/charactersActions';
import {
  setVisibility, changeSetVisibility, displayEditModal,
  editCharacterMethods, editCharacter, displayDeleteCharacterModal,
} from './CharacterDetailFunctions';
import Header from '../Header/Header';
import NavigationBar from '../NavigationBar/NavigationBar';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import styles from './CharacterDetailStyles';

import absalomBackground from '../../images/absalom-background.png';
import visibilityPrivateIcon from '../../images/character-private-icon.png';
import visibilityPublicIcon from '../../images/character-public-icon.png';
import characterSheetIcon from '../../images/character-sheet-icon.png';
import characterInventoryIcon from '../../images/character-inventory-icon.png';
import characterNotesIcon from '../../images/character-notes-icon.png';

function CharacterDetail({
  characterItem, characterId, userItem, dispatch, navigation,
}) {
  const [character, setCharacter] = useState(null);
  const [characterName, setCharacterName] = useState(null);
  const [characterGame, setCharacterGame] = useState(null);
  const [characterRace, setCharacterRace] = useState(null);
  const [characterClass, setCharacterClass] = useState(null);
  const [characterLvl, setCharacterLvl] = useState(null);

  const [editModalView, setEditModalView] = useState(false);
  const [editModalTextValue, setEditModalTextValue] = useState('');
  const [characterModalField, setCharacterModalField] = useState(null);

  const [deleteCharacterModalView, setDeleteCharacterModalView] = useState(false);

  useEffect(() => {
    if (characterItem || characterItem?._id !== character?._id) {
      setCharacter(characterItem);
      setCharacterName(characterItem.name);
      setCharacterGame(characterItem.game);
      setCharacterRace(characterItem.race);
      setCharacterClass(characterItem.characterClass);
      setCharacterLvl(characterItem.lvl);
    }
  }, [characterItem, characterId]);

  return (
    <ImageBackground source={absalomBackground} style={styles.backgroundImage}>
      <Header navigation={navigation} userId={userItem._id} dispatch={dispatch} />
      <ScrollView style={styles.container} alwaysBounceVertical>
        {(character && character?._id) ? (
          <View style={styles.character}>
            <View style={styles.character__title}>
              <View style={styles.title__bar} />
              <Text style={styles.character__name}>{characterName}</Text>
              <View style={styles.title__bar} />
            </View>
            <TouchableOpacity
              style={styles.character__owner}
              onPress={() => navigation.navigate('UserDetail')}
            >
              <Text style={styles.character__owner__text}>User:</Text>
              <View style={styles.character__owner__info}>
                <Text style={styles.character__owner__text}>{character.owner.userName}</Text>
                <Image
                  source={{ uri: character.owner.profilePic }}
                  style={styles.character__owner__profilePic}
                />
              </View>
            </TouchableOpacity>
            <View style={styles.character__description}>
              <View style={styles.character__description__row} name="name">
                <Text style={styles.character__description__text}>Name:</Text>
                <TouchableOpacity
                  style={styles.character__description__pressable}
                  onPress={
                        () => {
                          setEditModalTextValue(characterName);
                          setCharacterModalField(editCharacterMethods.editName);
                          displayEditModal(setEditModalView, editModalView);
                        }
                      }
                >
                  <View style={styles.character__description__button}>
                    <Text style={styles.character__description__textButton}>{characterName}</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.character__description__row} name="game">
                <Text style={styles.character__description__text}>Game:</Text>
                <TouchableOpacity
                  style={styles.character__description__pressable}
                  onPress={
                        () => {
                          setEditModalTextValue(characterGame);
                          setCharacterModalField(editCharacterMethods.editGame);
                          displayEditModal(setEditModalView, editModalView);
                        }
                      }
                >
                  <View style={styles.character__description__button}>
                    <Text style={styles.character__description__textButton}>{characterGame}</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.character__description__row} name="race">
                <Text style={styles.character__description__text}>Race:</Text>
                <TouchableOpacity
                  style={styles.character__description__pressable}
                  onPress={
                        () => {
                          setEditModalTextValue(characterRace);
                          setCharacterModalField(editCharacterMethods.editRace);
                          displayEditModal(setEditModalView, editModalView);
                        }
                      }
                >
                  <View style={styles.character__description__button}>
                    <Text style={styles.character__description__textButton}>{characterRace}</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.character__description__row} name="class">
                <Text style={styles.character__description__text}>Class:</Text>
                <TouchableOpacity
                  style={styles.character__description__pressable}
                  onPress={
                        () => {
                          setEditModalTextValue(characterClass);
                          setCharacterModalField(editCharacterMethods.editClass);
                          displayEditModal(setEditModalView, editModalView);
                        }
                      }
                >
                  <View style={styles.character__description__button}>
                    <Text style={styles.character__description__textButton}>{characterClass}</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.character__description__row} name="lvl">
                <Text style={styles.character__description__text}>Level:</Text>
                <TouchableOpacity
                  style={styles.character__description__pressable}
                  onPress={
                        () => {
                          setEditModalTextValue(characterLvl);
                          setCharacterModalField(editCharacterMethods.editLvl);
                          displayEditModal(setEditModalView, editModalView);
                        }
                      }
                >
                  <View style={styles.character__description__button}>
                    <Text style={styles.character__description__textButton}>{characterLvl}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.character__set} name="sheet">
              <TouchableOpacity
                style={styles.set__bar}
                onPress={() => navigation.navigate('CharacterSheet')}
              >
                <Text style={styles.character__set__text}>Character Sheet:</Text>
                <Image
                  source={characterSheetIcon}
                  style={styles.character__set__icon}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => changeSetVisibility(
                character, setCharacter, setVisibility.sheetVisibility, setVisibility, dispatch,
              )}
              >
                {character.sheet.public ? (
                  <Image
                    source={visibilityPublicIcon}
                    style={styles.character__set__visible__icon}
                    id={setVisibility.SheetVisibility}
                  />
                ) : (
                  <Image
                    source={visibilityPrivateIcon}
                    style={styles.character__set__visible__icon}
                    id={setVisibility.SheetVisibility}
                  />
                )}
              </TouchableOpacity>
            </View>
            <View style={styles.character__set} name="inventory">
              <TouchableOpacity
                style={styles.set__bar}
                onPress={() => navigation.navigate('CharacterInventory')}
              >
                <Text style={styles.character__set__text}>Inventory:</Text>
                <Image
                  source={characterInventoryIcon}
                  style={styles.character__set__icon}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => changeSetVisibility(
                character, setCharacter, setVisibility.inventoryVisibility, setVisibility, dispatch,
              )}
              >
                {character.inventory.public ? (
                  <Image
                    source={visibilityPublicIcon}
                    style={styles.character__set__visible__icon}
                    id={setVisibility.inventoryVisibility}
                  />
                ) : (
                  <Image
                    source={visibilityPrivateIcon}
                    style={styles.character__set__visible__icon}
                    id={setVisibility.inventoryVisibility}
                  />
                )}
              </TouchableOpacity>
            </View>
            <View style={styles.character__set} name="notes">
              <TouchableOpacity
                style={styles.set__bar}
                onPress={() => navigation.navigate('CharacterNotes')}
              >
                <Text style={styles.character__set__text}>Notes:</Text>
                <Image
                  source={characterNotesIcon}
                  style={styles.character__set__icon}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => changeSetVisibility(
                character, setCharacter, setVisibility.notesVisibility, setVisibility, dispatch,
              )}
              >
                {character.notes.public ? (
                  <Image
                    source={visibilityPublicIcon}
                    style={styles.character__set__visible__icon}
                    id={setVisibility.notesVisibility}
                  />
                ) : (
                  <Image
                    source={visibilityPrivateIcon}
                    style={styles.character__set__visible__icon}
                    id={setVisibility.notesVisibility}
                  />
                )}
              </TouchableOpacity>
            </View>
            <View style={styles.character__button__container}>
              <Button
                type="solid"
                title="Delete Character"
                buttonStyle={styles.button__delete}
                onPress={() => {
                  displayDeleteCharacterModal(
                    setDeleteCharacterModalView, deleteCharacterModalView, deleteCharacterModalView,
                  );
                }}
              />
            </View>
            <Overlay
              name="edit modal"
              isVisible={editModalView}
              overlayStyle={styles.editModal}
              backdropStyle={styles.modal__background}
              animationType="fade"
              fullScreen
              onBackdropPress={() => displayEditModal(setEditModalView, editModalView)}
            >
              <View style={styles.editModal__block}>
                <Text style={styles.character__description__text}>
                  {characterModalField}
                </Text>
                <View style={styles.editModal__textBlock}>
                  <TextInput
                    style={styles.editModal__text}
                    maxLength={30}
                    multiline
                    autoCorrect={false}
                    value={editModalTextValue}
                    onChangeText={(text) => setEditModalTextValue(text)}
                  />
                </View>
                <Button
                  title="Confirm"
                  buttonStyle={styles.buttonConfirmEditModal}
                  onPress={
                    () => {
                      editCharacter(
                        characterModalField, character, editModalTextValue, editCharacterMethods,
                        displayEditModal, setEditModalView, editModalView, setCharacterName,
                        setCharacterGame, setCharacterRace, setCharacterClass, setCharacterLvl,
                        dispatch,
                      );
                      dispatch(loadCharactersSuccess(null));
                    }
                    }
                />
              </View>
            </Overlay>
            <Overlay
              name="delete character modal"
              isVisible={deleteCharacterModalView}
              overlayStyle={styles.editModal}
              backdropStyle={styles.editModal__background}
              animationType="fade"
              fullScreen
              onBackdropPress={() => {
                displayDeleteCharacterModal(
                  setDeleteCharacterModalView, deleteCharacterModalView,
                );
              }}
            >
              <View style={styles.editModal__block}>
                <Text style={styles.character__description__text}>
                  You are about to delete
                </Text>
                <Text style={styles.character__description__textButton}>
                  {character.name}
                </Text>
                <View style={styles.editModal__textBlock}>
                  <Text style={styles.deleteModal__warningText}>
                    This action is irreversible.
                  </Text>
                </View>
                <Button
                  title="Delete"
                  buttonStyle={styles.button__delete}
                  onPress={() => {
                    displayDeleteCharacterModal(
                      setDeleteCharacterModalView, deleteCharacterModalView,
                    );
                    dispatch(deleteCharacter(characterItem._id));
                    dispatch(loadCharactersSuccess(null));
                    navigation.navigate('CharacterList');
                  }}
                />
              </View>
            </Overlay>
          </View>
        ) : (
          <View style={styles.character}>
            <View style={styles.title__bar} />
            <Text style={styles.no__character__title} />
            <View style={styles.title__bar} />
            <LoadingSpinner />
          </View>
        )}
      </ScrollView>
      <NavigationBar navigation={navigation} userId={userItem._id} dispatch={dispatch} />
    </ImageBackground>
  );
}
/*
CharacterDetail.propTypes = {
  characterItem: PropTypes.shape({
    name: PropTypes.string,
    game: PropTypes.string,
    race: PropTypes.string,
    characterClass: PropTypes.string,
    lvl: PropTypes.string,
  }),
  userItem: PropTypes.shape({
    userName: PropTypes.string,
    country: PropTypes.string,
    profilePic: PropTypes.string,
    characters: PropTypes.shape([]),
    languages: PropTypes.shape([]),
    favouriteGames: PropTypes.shape([]),
  }),
  dispatch: PropTypes.func.isRequired,
};
*/
CharacterDetail.defaultProps = {
  characterItem: {},
  userItem: {},
};

function mapStateToProps({ charactersReducer, usersReducer }) {
  return {
    characterItem: charactersReducer.characterItem,
    characterId: charactersReducer.characterId,
    userItem: usersReducer.userItem,
  };
}

export default connect(mapStateToProps)(CharacterDetail);
