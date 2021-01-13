import React, { useState, useEffect } from 'react';
import {
  Image, View, Platform, Text, Dimensions,
  ImageBackground, ScrollView, TouchableOpacity,
} from 'react-native';
import { Overlay, Button } from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';
import ImageZoom from 'react-native-image-pan-zoom';
import { connect } from 'react-redux';
import pickImageFromDevice from './CharacterSheetFunctions/CharacterSheetPickImage';
import addImage from './CharacterSheetFunctions/CharacterSheetAddImage';
import editImage from './CharacterSheetFunctions/CharacterSheetEditImage';
import deleteImage from './CharacterSheetFunctions/CharacterSheetDeleteImage';
import { updateCharacter, loadError } from '../../redux/actions/characterActions';
import Header from '../Header/Header';
import NavigationBar from '../NavigationBar/NavigationBar';
import styles from './CharacterSheetStyles';
import addIcon from '../../images/add-icon-blue.png';
import absalomBackground from '../../images/absalom-background.png';
import defaultImage from '../../images/default-image.png';

function CharacterSheet({
  characterItem, navigation, userItem, dispatch,
}) {
  const [images, setImages] = useState([]);
  const [fullImageModalView, setFullImageModalView] = useState(false);
  const [fullImageModalValue, setFullImageModalValue] = useState('');
  const [imageKey, setImageKey] = useState('');
  const [editImageModalView, setEditImageModalView] = useState(false);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  useEffect(() => {
    setImages(characterItem.sheet.uploads);
  }, [characterItem]);

  return (
    <ImageBackground
      source={absalomBackground}
      style={styles.backgroundImage}
    >
      <Header navigation={navigation} userId={userItem._id} dispatch={dispatch} />
      <ScrollView style={styles.container}>
        <View style={styles.characterSheet}>
          <View style={styles.title__bar} />
          <Text style={styles.characterList__title}>{`${characterItem.name} Sheet`}</Text>
          <View style={styles.title__bar} />
          {characterItem.sheet.uploads.length ? (
            images.map((image) => (
              image.imageBase64 ? (
                <View key={performance.now()}>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.characterSheet__image__container}
                    onPress={() => {
                      setFullImageModalValue(image.imageBase64);
                      setFullImageModalView(!fullImageModalView);
                    }}
                    onLongPress={() => {
                      setImageKey(image.uniqueKey);
                      setEditImageModalView(!editImageModalView);
                    }}
                  >
                    <Image
                      style={styles.characterSheet__image}
                      source={{ uri: `data:image/png;base64,${image.imageBase64}` }}
                    />
                  </TouchableOpacity>
                </View>
              ) : (
                <View key={performance.now()}>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.characterSheet__image__container}
                    onPress={() => {
                      setImageKey(image.uniqueKey);
                      setFullImageModalValue(image.imageBase64);
                      setFullImageModalView(!fullImageModalView);
                    }}
                  >
                    <Image
                      style={styles.characterSheet__image}
                      source={defaultImage}
                    />
                  </TouchableOpacity>
                </View>
              )))
          ) : (
            <TouchableOpacity
              style={styles.characterSheet__no_images}
              onPress={() => pickImageFromDevice(
                ImagePicker, characterItem, addImage, updateCharacter, dispatch, loadError,
              )}
            >
              <Text style={styles.characterSheet__no_images__text}>Add some images to start!</Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.addIcon__block}
        onPress={() => pickImageFromDevice(
          ImagePicker, characterItem, addImage, updateCharacter, dispatch, loadError,
        )}
      >
        <Image source={addIcon} style={styles.addIcon} />
      </TouchableOpacity>
      <Overlay
        name="add image modal"
        isVisible={fullImageModalView}
        overlayStyle={styles.imageModal}
        animationType="fade"
        onBackdropPress={() => {
          setFullImageModalView(!fullImageModalView);
          setFullImageModalValue('');
        }}
      >
        <ImageZoom
          cropWidth={Dimensions.get('window').width}
          cropHeight={Dimensions.get('window').height}
          imageWidth={380}
          imageHeight={537.43}
          enableSwipeDown
          onSwipeDown={() => setFullImageModalView(!fullImageModalView)}
        >
          <Image
            style={styles.characterSheet__image}
            source={{ uri: `data:image/jpeg;base64,${fullImageModalValue}` }}
          />
        </ImageZoom>
      </Overlay>
      <Overlay
        name="edit image modal"
        isVisible={editImageModalView}
        overlayStyle={styles.editModal}
        animationType="fade"
        onBackdropPress={() => {
          setEditImageModalView(!editImageModalView);
          setFullImageModalValue('');
        }}
      >
        <View style={styles.editModal__block}>
          <Text style={styles.editModal__text}>Edit Image</Text>
          <View style={styles.editModal__options}>
            <Button
              buttonStyle={styles.editModal__editButton}
              title="Choose Image"
              onPress={() => {
                pickImageFromDevice(
                  ImagePicker, characterItem, editImage,
                  updateCharacter, dispatch, imageKey, loadError,
                );
              }}
            />
            <Button
              buttonStyle={styles.editModal__deleteButton}
              title="Delete"
              onPress={() => {
                setEditImageModalView(!editImageModalView);
                deleteImage(
                  characterItem, updateCharacter,
                  dispatch, imageKey,
                );
                setFullImageModalValue('');
                setImageKey('');
              }}
            />
          </View>
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

export default connect(mapStateToProps)(CharacterSheet);
