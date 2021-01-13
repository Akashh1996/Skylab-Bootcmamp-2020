import React, { useState, useEffect } from 'react';
import {
  ImageBackground, Text, View, TextInput,
  ScrollView, Image, TouchableOpacity,
} from 'react-native';
import { Overlay, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import {
  createEntry, createNote, deleteEntry, deleteNote, editEntry, editNote,
} from './CharacterNotesFunctions';
import { updateCharacter } from '../../redux/actions/characterActions';
import NavigationBar from '../NavigationBar/NavigationBar';
import Header from '../Header/Header';
import styles from './CharacterNotesStyles';
import absalomBackground from '../../images/absalom-background.png';
import tansparentAddIcon from '../../images/add-icon-transparent.png';
import addBlueIcon from '../../images/add-icon-blue.png';
import dotIcon from '../../images/dot-icon.png';

function CharacterNotes({
  characterItem, userItem, dispatch, navigation,
}) {
  const [character, setCharacter] = useState(characterItem);
  const [addNoteModalView, setAddNoteModalView] = useState(false);
  const [editNoteModalView, setEditNoteModalView] = useState(false);
  const [editNoteModalValue, setEditNoteModalValue] = useState('');
  const [deleteNoteModalView, setDeleteNoteModalView] = useState(false);
  const [addEntryModalView, setAddEntryModalView] = useState(false);
  const [addEntryModalValue, setAddEntryModalValue] = useState('');
  const [editEntryModalView, setEditEntryModalView] = useState(false);
  const [editEntryModalValue, setEditEntryModalValue] = useState('');
  const [deleteEntryModalView, setDeleteEntryModalView] = useState(false);
  const [entryKey, setEntryKey] = useState('');
  const [newNoteName, setNewNoteName] = useState('');
  const [noteKey, setNoteKey] = useState('');

  useEffect(() => {
    setCharacter(characterItem);
  });

  return (
    <ImageBackground source={absalomBackground} style={styles.backgroundImage}>
      <Header navigation={navigation} userId={userItem._id} dispatch={dispatch} />
      {character ? (
        <>
          <ScrollView style={styles.container}>
            <View style={styles.notes}>
              <View style={styles.character__title}>
                <View style={styles.title__bar} />
                <Text style={styles.character__name}>{`${character.name} Notes`}</Text>
                <View style={styles.title__bar} />
              </View>
              {character.notes.characterNotes.length
                ? character.notes.characterNotes.map((note) => (
                  <View style={styles.notes__note} key={performance.now()}>
                    <View style={styles.inventory__category__title}>
                      <View style={styles.category__title__name}>
                        <TouchableOpacity
                          onPress={() => {
                            setNoteKey(note.uniqueKey);
                            setEditNoteModalValue(note.title);
                            setEditNoteModalView(!editNoteModalView);
                          }}
                        >
                          <Text style={styles.inventory__category__title__text}>{note.title}</Text>
                        </TouchableOpacity>
                      </View>
                      <TouchableOpacity onPress={() => {
                        setNoteKey(note.uniqueKey);
                        setAddEntryModalView(!addEntryModalView);
                      }}
                      >
                        <Image source={tansparentAddIcon} style={styles.addBlueIcon} />
                      </TouchableOpacity>
                    </View>
                    {note.entries.map((entry) => (
                      <View style={styles.note__row} key={performance.now()}>
                        <View style={styles.note__row__dot}>
                          <Image source={dotIcon} style={styles.dotIcon} />
                        </View>
                        <TouchableOpacity
                          style={styles.note__row__entry}
                          onPress={() => {
                            setEntryKey(entry.uniqueKey);
                            setNoteKey(note.uniqueKey);
                            setEditEntryModalValue(entry.text);
                            setEditEntryModalView(!editNoteModalView);
                          }}
                        >
                          <Text style={styles.note__row__entry__text}>{entry.text}</Text>
                        </TouchableOpacity>
                      </View>
                    ))}
                  </View>
                )) : (
                  <TouchableOpacity
                    style={styles.characterSheet__no_images}
                    onPress={() => setAddNoteModalView(!addNoteModalView)}
                  >
                    <Text
                      style={styles.characterSheet__no_images__text}
                    >
                      Add some notes to start!
                    </Text>
                  </TouchableOpacity>
                )}
            </View>
          </ScrollView>
        </>
      ) : (
        <View style={styles.character__title}>
          <View style={styles.title__bar} />
          <Text style={styles.character__name}>No Character</Text>
          <View style={styles.title__bar} />
        </View>
      )}
      <TouchableOpacity
        style={styles.addIcon__block}
        onPress={() => setAddNoteModalView(!addNoteModalView)}
      >
        <Image source={addBlueIcon} style={styles.addIcon} />
      </TouchableOpacity>
      <Overlay
        name="add note modal"
        isVisible={addNoteModalView}
        overlayStyle={styles.noteModal}
        backdropStyle={styles.noteModal__background}
        animationType="fade"
        onBackdropPress={() => {
          setAddNoteModalView(!addNoteModalView);
          setNewNoteName('');
        }}
      >
        <View style={styles.noteModal__block}>
          <Text style={styles.noteModal__title}>Add new note</Text>
          <TextInput
            style={styles.noteModal__text}
            placeholder="Note Name"
            maxLength={20}
            autoCorrect={false}
            value={newNoteName}
            onChangeText={(text) => setNewNoteName(text)}
          />
          <Button
            buttonStyle={styles.noteModal__button}
            title="Create Note"
            onPress={() => {
              setNewNoteName('');
              setAddNoteModalView(!addNoteModalView);
              createNote(character, newNoteName, updateCharacter, dispatch);
            }}
          />
        </View>
      </Overlay>
      <Overlay
        name="edit note modal"
        isVisible={editNoteModalView}
        overlayStyle={styles.noteModal}
        animationType="fade"
        onBackdropPress={() => {
          setEditNoteModalView(!editNoteModalView);
          setEditNoteModalValue('');
          setNoteKey('');
        }}
      >
        <View style={styles.noteModal__block}>
          <Text style={styles.noteModal__title}>Edit Note</Text>
          <TextInput
            style={styles.noteModal__text}
            placeholder="Note Name"
            multiline
            maxLength={30}
            autoCorrect={false}
            value={editNoteModalValue}
            onChangeText={(text) => setEditNoteModalValue(text)}
          />
          <View style={styles.editNoteModal__buttons}>
            <Button
              buttonStyle={styles.editNoteModal__editButton}
              title="Edit"
              onPress={() => {
                editNote(
                  character, noteKey, editNoteModalValue, updateCharacter, dispatch,
                );
                setEditNoteModalValue('');
                setNoteKey('');
                setEditNoteModalView(!editNoteModalView);
              }}
            />
            <Button
              buttonStyle={styles.editNoteModal__deleteButton}
              title="Delete"
              onPress={() => {
                setEditNoteModalView(!editNoteModalView);
                setDeleteNoteModalView(!deleteNoteModalView);
              }}
            />
          </View>
        </View>
      </Overlay>
      <Overlay
        name="delete note modal"
        isVisible={deleteNoteModalView}
        overlayStyle={styles.noteModal}
        animationType="fade"
        fullScreen
        onBackdropPress={() => {
          setDeleteNoteModalView(!deleteNoteModalView);
        }}
      >
        <View style={styles.deleteNoteModal__block}>
          <Text style={styles.deleteNoteModal__text}>
            You are about to delete
          </Text>
          <Text style={styles.deleteNoteModal__note__name}>
            {editNoteModalValue}
          </Text>
          <Text style={styles.deleteNoteModal__text}>
            and all the entries it contains.
          </Text>
          <View style={styles.editModal__textBlock}>
            <Text style={styles.deleteNoteModal__warningText}>
              This action is irreversible.
            </Text>
          </View>
          <Button
            title="Delete"
            buttonStyle={styles.editNoteModal__deleteButton}
            onPress={() => {
              deleteNote(character, noteKey, updateCharacter, dispatch);
              setNoteKey('');
              setEditNoteModalValue('');
              setDeleteNoteModalView(!deleteNoteModalView);
            }}
          />
        </View>
      </Overlay>
      <Overlay
        name="add entry modal"
        isVisible={addEntryModalView}
        overlayStyle={styles.entryModal}
        backdropStyle={styles.noteModal__background}
        animationType="fade"
        onBackdropPress={() => {
          setAddEntryModalView(!addEntryModalView);
          setAddEntryModalValue('');
        }}
      >
        <View style={styles.noteModal__block}>
          <Text style={styles.entryModal__title}>Add new entry</Text>
          <ScrollView style={{ width: '90%' }}>
            <TextInput
              style={styles.entryModal__text}
              placeholder="Entry"
              multiline
              autoCorrect={false}
              value={addEntryModalValue}
              onChangeText={(text) => setAddEntryModalValue(text)}
            />
          </ScrollView>
          <Button
            buttonStyle={styles.noteModal__button}
            title="Create Entry"
            onPress={() => {
              createEntry(character, noteKey, addEntryModalValue, updateCharacter, dispatch);
              setAddEntryModalValue('');
              setAddEntryModalView(!addEntryModalView);
            }}
          />
        </View>
      </Overlay>
      <Overlay
        name="edit entry modal"
        isVisible={editEntryModalView}
        overlayStyle={styles.entryModal}
        backdropStyle={styles.noteModal__background}
        animationType="fade"
        onBackdropPress={() => {
          setEditEntryModalView(!editEntryModalView);
          setEditEntryModalValue('');
        }}
      >
        <View style={styles.noteModal__block}>
          <Text style={styles.entryModal__title}>Edit entry</Text>
          <ScrollView style={{ width: '90%' }}>
            <TextInput
              style={styles.entryModal__text}
              placeholder="Entry"
              multiline
              autoCorrect={false}
              value={editEntryModalValue}
              onChangeText={(text) => setEditEntryModalValue(text)}
            />
          </ScrollView>
          <View style={styles.editNoteModal__buttons}>
            <Button
              buttonStyle={styles.editNoteModal__editButton}
              title="Edit"
              onPress={() => {
                editEntry(
                  character, noteKey, entryKey, editEntryModalValue, updateCharacter, dispatch,
                );
                setEditEntryModalValue('');
                setEditEntryModalView(!editEntryModalView);
              }}
            />
            <Button
              buttonStyle={styles.editNoteModal__deleteButton}
              title="Delete"
              onPress={() => {
                setEditEntryModalView(!editEntryModalView);
                setDeleteEntryModalView(!deleteEntryModalView);
              }}
            />
          </View>
        </View>
      </Overlay>
      <Overlay
        name="delete entry modal"
        isVisible={deleteEntryModalView}
        overlayStyle={styles.noteModal}
        animationType="fade"
        fullScreen
        onBackdropPress={() => {
          setDeleteEntryModalView(!deleteEntryModalView);
        }}
      >
        <View style={styles.deleteNoteModal__block}>
          <Text style={styles.deleteNoteModal__text}>
            You are about to delete this entry
          </Text>
          <View style={styles.editModal__textBlock}>
            <Text style={styles.deleteNoteModal__warningText}>
              This action is irreversible.
            </Text>
          </View>
          <Button
            title="Delete"
            buttonStyle={styles.editNoteModal__deleteButton}
            onPress={() => {
              deleteEntry(character, noteKey, entryKey, updateCharacter, dispatch);
              setEntryKey('');
              setEditEntryModalValue('');
              setDeleteEntryModalView(!deleteEntryModalView);
            }}
          />
        </View>
      </Overlay>
      <NavigationBar navigation={navigation} userId={userItem._id} dispatch={dispatch} />
    </ImageBackground>
  );
}

function mapStateToProps({ charactersReducer, usersReducer }) {
  return {
    characterItem: charactersReducer.characterItem,
    userItem: usersReducer.userItem,
  };
}

export default connect(mapStateToProps)(CharacterNotes);
