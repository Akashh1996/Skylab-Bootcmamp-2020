import React, { useState } from 'react';
import {
  ImageBackground, Text, View, ScrollView,
  Image, TextInput, TouchableOpacity,
} from 'react-native';
import { Button, Overlay } from 'react-native-elements';
import { connect } from 'react-redux';
// import { PropTypes } from 'prop-types';
import { deleteUser, updateUser } from '../../redux/actions/userActions';
import { setCharacterId, loadCharacterByKey } from '../../redux/actions/characterActions';
import { editUser, deleteListValue } from './UserDetailFunctions';
import Header from '../Header/Header';
import NavigationBar from '../NavigationBar/NavigationBar';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import ListRow from './ListRow/ListRow';
import styles from './UserDetailStyles';
import addBlueIcon from '../../images/add-icon-blue.png';

import absalomBackground from '../../images/absalom-background.png';

function UserDetail({
  userItem, dispatch, navigation, charactersArray,
}) {
  const [editModalView, setEditModalView] = useState(false);
  const [editModalTextValue, setEditModalTextValue] = useState('');

  const [editListModalView, setEditListModalView] = useState(false);
  const [editListModalArrayCategory, setEditListModalArrayCategory] = useState('');
  const [editListModalArrayValue, setEditListModalArrayValue] = useState([]);

  const [deleteUserModalView, setDeleteUserModalView] = useState(false);
  const [confirmDeleteUserModalView, setConfirmDeleteUserModalView] = useState(false);

  function changeListValue(value, text) {
    value.title = text;
  }

  return (
    <ImageBackground source={absalomBackground} style={styles.backgroundImage}>
      <Header navigation={navigation} userId={userItem._id} dispatch={dispatch} />
      <ScrollView style={styles.container} alwaysBounceVertical>
        {(userItem && userItem?._id) ? (
          <View style={styles.user}>
            <View style={styles.user__title} name="user title">
              <View style={styles.title__bar} />
              <Text style={styles.user__name}>{userItem.userName}</Text>
              <View style={styles.title__bar} />
            </View>
            <View style={styles.user__profilePic}>
              <Image
                source={{ uri: userItem.profilePic }}
                style={styles.user__profilePic__image}
              />
            </View>
            <View style={styles.user__userName}>
              <View style={styles.user__userName__block__title}>
                <Text style={styles.user__userName__text}>Name:</Text>
              </View>
              <TouchableOpacity
                style={styles.user__userName__block}
                onPress={() => {
                  setEditModalTextValue(userItem.userName);
                  setEditModalView(!editModalView);
                }}
              >
                <Text style={styles.user__userName__name}>{userItem.userName}</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              name="games"
              style={styles.user__games}
              onPress={() => {
                setEditListModalArrayCategory('games');
                setEditListModalArrayValue([...userItem.favouriteGames]);
                setEditListModalView(true);
              }}
            >
              <View style={styles.user__games__title__block}>
                <Text style={styles.user__userName__text}>Favourite Games</Text>
              </View>
              <View style={styles.user__games__block}>
                {userItem.favouriteGames.map((actualGame) => (
                  <View style={styles.user__game__block} key={`${Math.random()}${Math.random()}`}>
                    <Text style={styles.user__game__block__title}>{actualGame.title}</Text>
                  </View>
                ))}
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              name="languages"
              style={styles.user__games}
              onPress={() => {
                setEditListModalArrayCategory('languages');
                setEditListModalArrayValue([...userItem.languages]);
                setEditListModalView(true);
              }}
            >
              <View style={styles.user__games__title__block}>
                <Text style={styles.user__userName__text}>Languages</Text>
              </View>
              <View style={styles.user__games__block}>
                {userItem.languages.map((actualLanguage) => (
                  <View style={styles.user__game__block} key={`${Math.random()}${Math.random()}`}>
                    <Text style={styles.user__game__block__title}>{actualLanguage.title}</Text>
                  </View>
                ))}
              </View>
            </TouchableOpacity>
            <View style={styles.user__characters} name="user characters">
              <View style={styles.title__bar} />
              <Text style={styles.user__name}>
                {userItem.userName}
                {' '}
                Characters
              </Text>
              <View style={styles.title__bar} />
            </View>
            <View style={styles.user__characters__list}>
              {charactersArray?.length ? charactersArray.map((character) => (
                <TouchableOpacity
                  style={styles.user__characters__list__block}
                  key={`${character._id}${Math.random()}`}
                  activeOpacity={0.8}
                  onPress={() => {
                    dispatch(setCharacterId(character._id));
                    dispatch(loadCharacterByKey(character.uniqueKey, userItem._id));
                    navigation.navigate('CharacterDetail');
                  }}
                >
                  <View style={styles.user__characters__list__block__row}>
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
                  <View style={styles.user__characters__list__block__row}>
                    <Text
                      id={Math.random()}
                      style={styles.characters__secondRow__text}
                    >
                      {character.game}
                    </Text>
                    <Text
                      id={Math.random()}
                      style={styles.characters__secondRow__text}
                    >
                      {character.race}
                    </Text>
                    <Text
                      id={Math.random()}
                      style={styles.characters__secondRow__text}
                    >
                      {character.characterClass}
                    </Text>
                  </View>
                </TouchableOpacity>
              )) : (<View />)}
            </View>
            <View style={styles.user__deleteButton__container}>
              <Button
                type="solid"
                title="Delete User"
                buttonStyle={styles.button__delete}
                onPress={() => setDeleteUserModalView(!deleteUserModalView)}
              />
            </View>
            <Overlay
              name="edit modal"
              isVisible={editModalView}
              overlayStyle={styles.editModal}
              backdropStyle={styles.modal__background}
              animationType="fade"
              onBackdropPress={() => {
                setEditModalView(!editModalView);
                setEditModalTextValue('');
              }}
            >
              <View style={styles.editModal__block}>
                <Text style={styles.editModal__title}>
                  Edit you user name
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
                  onPress={() => {
                    editUser(userItem, editModalTextValue, updateUser, dispatch, 'user');
                    setEditModalTextValue('');
                    setEditModalView(!editModalView);
                  }}
                />
              </View>
            </Overlay>
            <Overlay
              name="delete user modal"
              isVisible={deleteUserModalView}
              overlayStyle={styles.deleteModal}
              backdropStyle={styles.editModal__background}
              animationType="fade"
              fullScreen
              onBackdropPress={() => {
                setDeleteUserModalView(false);
              }}
            >
              <View style={styles.editModal__block}>
                <Text style={styles.editModal__title}>
                  You are about to delete
                </Text>
                <View style={styles.editModal__textBlock}>
                  <Text style={styles.deleteModal__userName}>{userItem.userName}</Text>
                </View>
                <View style={styles.editModal__textBlock}>
                  <Text style={styles.deleteModal__warningText}>This action is irreversible.</Text>
                </View>
                <Button
                  title="Delete"
                  buttonStyle={styles.button__delete}
                  onPress={() => {
                    setDeleteUserModalView(!deleteUserModalView);
                    setConfirmDeleteUserModalView(!confirmDeleteUserModalView);
                  }}
                />
              </View>
            </Overlay>
            <Overlay
              name="confirm delete user modal"
              isVisible={confirmDeleteUserModalView}
              overlayStyle={styles.deleteModal}
              backdropStyle={styles.editModal__background}
              animationType="fade"
              fullScreen
              onBackdropPress={() => {
                setConfirmDeleteUserModalView(!confirmDeleteUserModalView);
              }}
            >
              <View style={styles.editModal__block}>
                <Text style={styles.editModal__title}>Sad to hear...</Text>
                <Text style={styles.editModal__title}>
                  We hope you to comeback someday and live more adventures in Absalom!
                </Text>
                <Text style={styles.deleteModal__warningText}>Confirm one last time</Text>
                <Button
                  title="Delete"
                  buttonStyle={styles.button__delete}
                  onPress={() => {
                    dispatch(deleteUser(userItem.uniqueKey));
                    navigation.navigate('LoginScreen');
                  }}
                />
              </View>
            </Overlay>
            <Overlay
              name="edit list modal"
              isVisible={editListModalView}
              overlayStyle={styles.editModal}
              backdropStyle={styles.modal__background}
              animationType="fade"
              onBackdropPress={() => {
                setEditListModalView(!editListModalView);
                setEditListModalArrayValue([]);
                setEditListModalArrayCategory('');
              }}
            >
              <ScrollView>
                <View style={styles.editModal__block}>
                  <Text style={styles.editModal__title}>
                    Edit you user
                    {' '}
                    {editListModalArrayCategory}
                  </Text>
                  {editListModalArrayValue.map((value) => (
                    <View style={styles.editListModal__block} key={performance.now()}>
                      <ListRow
                        value={value}
                        styles={styles}
                        listCategory={editListModalArrayValue}
                        changeListValue={changeListValue}
                        deleteListValue={deleteListValue}
                        setEditListModalArrayValue={setEditListModalArrayValue}
                      />
                    </View>
                  ))}
                  <TouchableOpacity
                    onPress={() => {
                      setEditListModalArrayValue([...editListModalArrayValue, { title: '', uniqueKey: `${Date.now()}${performance.now()}` }]);
                    }}
                  >
                    <Image source={addBlueIcon} style={styles.addIcon} />
                  </TouchableOpacity>
                  <View style={styles.editItemModal__buttons}>
                    <Button
                      title="Confirm"
                      buttonStyle={styles.buttonConfirmEditModal}
                      onPress={() => {
                        editUser(
                          userItem, editListModalArrayValue,
                          updateUser, dispatch, editListModalArrayCategory,
                        );
                        setEditListModalView(!editListModalView);
                      }}
                    />
                  </View>
                </View>
              </ScrollView>
            </Overlay>
          </View>
        ) : (
          <View style={styles.character}>
            <View style={styles.title__bar} />
            <Text style={styles.no__user__title} />
            <View style={styles.title__bar} />
            <LoadingSpinner />
          </View>
        )}
      </ScrollView>
      <NavigationBar navigation={navigation} userId={userItem._id} dispatch={dispatch} />
    </ImageBackground>
  );
}

function mapStateToProps({ charactersReducer, usersReducer }) {
  return {
    charactersArray: charactersReducer.charactersArray,
    userId: usersReducer.userId,
    userItem: usersReducer.userItem,
  };
}

export default connect(mapStateToProps)(UserDetail);
