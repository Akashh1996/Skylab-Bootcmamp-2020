import React, { useEffect, useState } from 'react';
import {
  ScrollView, ImageBackground, TextInput,
  View, Text, TouchableOpacity, Image,
} from 'react-native';
import { Overlay, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { updateCharacter } from '../../redux/actions/characterActions';
import {
  createCategory, createItem, deleteCategory, deleteItem,
  editCategory, editItem,
} from './CharacterInventoryFunctions';
import Header from '../Header/Header';
import NavigationBar from '../NavigationBar/NavigationBar';
import styles from './CharacterInventoryStyles';
import absalomBackground from '../../images/absalom-background.png';
import addBlueIcon from '../../images/add-icon-blue.png';
import tansparentAddIcon from '../../images/add-icon-transparent.png';
import PropertyRow from './PropertyRow/PropertyRow';

function CharacterInventory({
  characterItem, userItem, dispatch, navigation,
}) {
  const [character, setCharacter] = useState(characterItem);
  const [categoryModalView, setCategoryModalView] = useState(false);
  const [categoryModalValue, setCategoryModalValue] = useState('');

  const [editCategoryModalView, setEditCategoryModalView] = useState(false);
  const [categoryKey, setCategoryKey] = useState('');
  const [editCategoryModalValue, setEditCategoryModalValue] = useState('');

  const [deleteCategoryModalView, setDeleteCategoryModalView] = useState(false);
  const [CategoryTitle, setCategoryTitle] = useState(false);

  const [addItemModalView, setAddItemModalView] = useState(false);
  const [itemModalProperties, setItemModalProperties] = useState([]);

  const [editItemModalView, setEditItemModalView] = useState(false);

  const [actualItem, setActualItem] = useState(null);
  const [newItemName, setNewItemName] = useState('');

  const [deleteItemModalView, setDeleteItemModalView] = useState(false);

  useEffect(() => {
    setCharacter(characterItem);
  }, [characterItem]);

  function changePropertyValue(property, value, text) {
    property[value] = text;
  }

  return (
    <ImageBackground source={absalomBackground} style={styles.backgroundImage}>
      <Header navigation={navigation} userId={userItem._id} dispatch={dispatch} />
      {character ? (
        <ScrollView style={styles.container}>
          <View style={styles.inventory}>
            <View style={styles.inventory__title}>
              <View style={styles.title__bar} />
              <Text style={styles.inventory__title__text}>{`${character.name} Inventory`}</Text>
              <View style={styles.title__bar} />
            </View>
            {character.inventory.categories ? character.inventory.categories.map((category) => (
              <View style={styles.inventory__category} key={performance.now()}>
                <View style={styles.inventory__category__title}>
                  <View style={styles.category__title__name}>
                    <TouchableOpacity
                      onPress={() => {
                        setCategoryTitle(category.title);
                        setCategoryKey(category.uniqueKey);
                        setEditCategoryModalView(!editCategoryModalView);
                        setEditCategoryModalValue(category.title);
                      }}
                    >
                      <Text style={styles.inventory__category__title__text}>
                        {category.title}
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity
                    style={styles.category__title__addIcon}
                    onPress={() => {
                      setCategoryKey(category.uniqueKey);
                      setItemModalProperties([{ name: 'Item Name', value: '' }]);
                      setAddItemModalView(!addItemModalView);
                    }}
                  >
                    <Image source={tansparentAddIcon} style={styles.addIcon} />
                  </TouchableOpacity>
                </View>
                {category.items.map((item) => (
                  <TouchableOpacity
                    style={styles.inventory__category__item}
                    key={performance.now()}
                    onPress={() => {
                      setCategoryKey(category.uniqueKey);
                      setActualItem(item);
                      setItemModalProperties(item.properties);
                      setNewItemName(item.itemTitle);
                      setEditItemModalView(!editItemModalView);
                    }}
                  >
                    <View style={styles.inventory__category__item__title}>
                      <Text
                        style={styles.inventory__category__item__title__text}
                      >
                        {item.itemTitle}
                      </Text>
                    </View>
                    {item.properties.map((property) => {
                      if (property !== 'itemTitle' && property !== '_id' && property !== 'properties') {
                        return (
                          <View
                            style={styles.inventory__category__item__row}
                            key={performance.now()}
                          >
                            <View style={styles.inventory__category__item__row__name}>
                              <Text style={styles.inventory__category__item__text}>{`${property.name}`}</Text>
                            </View>
                            <View style={styles.inventory__category__item__row__value}>
                              <Text
                                style={styles.inventory__category__item__text}
                              >
                                {property.value}
                              </Text>
                            </View>
                          </View>
                        );
                      }
                    })}
                  </TouchableOpacity>
                ))}
              </View>
            )) : (
              <TouchableOpacity
                style={styles.characterSheet__no_images}
                onPress={() => setCategoryModalView(!categoryModalView)}
              >
                <Text
                  style={styles.characterSheet__no_images__text}
                >
                  Add some categories to start!
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </ScrollView>
      ) : (
        <View>
          <Text style={{ marginTop: 40, textAlign: 'center' }}>No Character</Text>
        </View>
      )}
      <TouchableOpacity
        style={styles.addIcon__block}
        onPress={() => setCategoryModalView(!categoryModalView)}
      >
        <Image source={addBlueIcon} style={styles.addIcon} />
      </TouchableOpacity>
      <Overlay
        name="add category modal"
        isVisible={categoryModalView}
        overlayStyle={styles.categoryModal}
        backdropStyle={styles.categoryModal__background}
        animationType="fade"
        onBackdropPress={() => {
          setCategoryModalView(!categoryModalView);
          setCategoryModalValue('');
        }}
      >
        <View style={styles.categoryModal__block}>
          <Text style={styles.categoryModal__title}>Add new category</Text>
          <TextInput
            style={styles.categoryModal__text}
            maxLength={60}
            multiline
            placeholder="Category Name"
            autoCorrect={false}
            value={categoryModalValue}
            onChangeText={(text) => setCategoryModalValue(text)}
          />
          <Button
            buttonStyle={styles.categoryModal__button}
            title="Create Category"
            onPress={() => {
              setCategoryModalView(!categoryModalView);
              setCategoryModalValue('');
              createCategory(character, categoryModalValue, updateCharacter, dispatch);
            }}
          />
        </View>
      </Overlay>
      <Overlay
        name="edit category modal"
        isVisible={editCategoryModalView}
        overlayStyle={styles.editCategoryModal}
        backdropStyle={styles.categoryModal__background}
        animationType="fade"
        onBackdropPress={() => {
          setEditCategoryModalView(!editCategoryModalView);
          setEditCategoryModalValue('');
        }}
      >
        <View style={styles.categoryModal__block}>
          <Text style={styles.categoryModal__title}>
            Edit category
          </Text>
          <TextInput
            style={styles.categoryModal__text}
            placeholder="Category Name"
            maxLength={60}
            multiline
            autoCorrect={false}
            value={editCategoryModalValue}
            onChangeText={(text) => setEditCategoryModalValue(text)}
          />
          <View style={styles.editCategoryModal__buttons}>
            <Button
              buttonStyle={styles.editCategoryModal__editButton}
              title="Edit"
              onPress={() => {
                editCategory(
                  character, categoryKey, editCategoryModalValue, updateCharacter, dispatch,
                );
                setEditCategoryModalView(!editCategoryModalView);
              }}
            />
            <Button
              buttonStyle={styles.editCategoryModal__deleteButton}
              title="Delete"
              onPress={() => {
                setEditCategoryModalView(!editCategoryModalView);
                setDeleteCategoryModalView(!deleteCategoryModalView);
              }}
            />
          </View>
        </View>
      </Overlay>
      <Overlay
        name="delete category modal"
        isVisible={deleteCategoryModalView}
        overlayStyle={styles.deleteCategoryModal}
        backdropStyle={styles.categoryModal__background}
        animationType="fade"
        fullScreen
        onBackdropPress={() => {
          setDeleteCategoryModalView(!deleteCategoryModalView);
        }}
      >
        <View style={styles.deleteCategoryModal__block}>
          <Text style={styles.deleteCategoryModal__text}>
            You are about to delete
          </Text>
          <Text style={styles.deleteCategoryModal__category__name}>
            {CategoryTitle}
          </Text>
          <Text style={styles.deleteCategoryModal__text}>
            and all the items it contains.
          </Text>
          <View style={styles.editModal__textBlock}>
            <Text style={styles.deleteCategoryModal__warningText}>
              This action is irreversible.
            </Text>
          </View>
          <Button
            title="Delete"
            buttonStyle={styles.editCategoryModal__deleteButton}
            onPress={() => {
              deleteCategory(character, categoryKey, updateCharacter, dispatch);
              setDeleteCategoryModalView(!deleteCategoryModalView);
            }}
          />
        </View>
      </Overlay>
      <Overlay
        name="add item modal"
        isVisible={addItemModalView}
        overlayStyle={styles.addItemModal}
        backdropStyle={styles.categoryModal__background}
        animationType="fade"
        fullScreen
        onBackdropPress={() => {
          setNewItemName('');
          setAddItemModalView(!addItemModalView);
        }}
      >
        <ScrollView>
          <View style={styles.addItemModal__block}>
            <Text style={styles.addItemModal__title}>Add item</Text>
            {itemModalProperties.map((property) => (
              property.name !== itemModalProperties[0].name ? (
                <PropertyRow
                  property={property}
                  styles={styles}
                  changePropertyValue={changePropertyValue}
                  key={performance.now()}
                  itemModalProperties={itemModalProperties}
                  setItemModalProperties={setItemModalProperties}
                />
              ) : (
                <View
                  key="title"
                  style={styles.addItemModal__block__title__row}
                >
                  <View style={styles.addItemModal__row__name}>
                    <Text style={styles.addItemModal__itemName}>{property.name}</Text>
                  </View>
                  <View style={styles.addItemModal__row__value}>
                    <TextInput
                      style={styles.addItemModal__inputText}
                      placeholder="Name"
                      maxLength={60}
                      multiline
                      autoCorrect={false}
                      value={newItemName}
                      onChangeText={(text) => setNewItemName(text)}
                    />
                  </View>
                </View>
              )
            ))}
            <TouchableOpacity
              onPress={() => {
                setItemModalProperties([...itemModalProperties, { name: '', value: '', uniqueKey: `${performance.now()}${performance.now()}` }]);
              }}
            >
              <Image source={addBlueIcon} style={styles.addBlueIcon} />
            </TouchableOpacity>
            <Button
              title="Add Item"
              buttonStyle={styles.addItemModal__button}
              onPress={() => {
                createItem(
                  character, categoryKey, newItemName, itemModalProperties,
                  updateCharacter, dispatch,
                );
                setNewItemName('');
                setAddItemModalView(!addItemModalView);
              }}
            />
          </View>
        </ScrollView>
      </Overlay>
      <Overlay
        name="edit item modal"
        isVisible={editItemModalView}
        overlayStyle={styles.addItemModal}
        backdropStyle={styles.categoryModal__background}
        animationType="fade"
        fullScreen
        onBackdropPress={() => {
          setNewItemName('');
          setEditItemModalView(!editItemModalView);
        }}
      >
        <ScrollView>
          <View style={styles.addItemModal__block}>
            <Text style={styles.addItemModal__title}>Edit</Text>
            <TextInput
              style={styles.addItemModal__title__input}
              maxLength={30}
              multiline
              autoCorrect={false}
              value={newItemName}
              onChangeText={(text) => setNewItemName(text)}
            />
            {itemModalProperties.map((property) => (
              property.name !== 'itemTitle' ? (
                <PropertyRow
                  property={property}
                  styles={styles}
                  changePropertyValue={changePropertyValue}
                  key={performance.now()}
                  itemModalProperties={itemModalProperties}
                  setItemModalProperties={setItemModalProperties}
                />
              ) : (
                <View
                  key="title"
                  style={styles.addItemModal__block__row}
                >
                  <View style={styles.addItemModal__row__name}>
                    <Text style={styles.addItemModal__itemName}>Item Name:</Text>
                  </View>
                  <View style={styles.addItemModal__row__value}>
                    <TextInput
                      placeholder="value"
                      maxLength={30}
                      multiline
                      style={styles.addItemModal__inputText}
                      autoCorrect={false}
                      value={newItemName}
                      onChangeText={(text) => setNewItemName(text)}
                    />
                  </View>
                </View>
              )
            ))}
            <TouchableOpacity
              onPress={() => {
                setItemModalProperties([...itemModalProperties, { name: '', value: '', uniqueKey: `${performance.now()}${performance.now()}` }]);
              }}
            >
              <Image source={addBlueIcon} style={styles.addBlueIcon} />
            </TouchableOpacity>
            <View style={styles.editItemModal__buttons}>
              <Button
                title="Delete Item"
                buttonStyle={styles.editItemModal__editButton}
                onPress={() => {
                  setDeleteItemModalView(!deleteItemModalView);
                  setEditItemModalView(!editItemModalView);
                }}
              />
              <Button
                title="Edit Item"
                buttonStyle={styles.editItemModal__deleteButton}
                onPress={() => {
                  editItem(
                    character, actualItem, newItemName,
                    itemModalProperties, updateCharacter, dispatch,
                  );
                  setNewItemName('');
                  setEditItemModalView(!editItemModalView);
                }}
              />
            </View>
          </View>
        </ScrollView>
      </Overlay>
      <Overlay
        name="delete item modal"
        isVisible={deleteItemModalView}
        overlayStyle={styles.deleteCategoryModal}
        backdropStyle={styles.categoryModal__background}
        animationType="fade"
        fullScreen
        onBackdropPress={() => {
          setDeleteItemModalView(!deleteItemModalView);
        }}
      >
        <View style={styles.deleteCategoryModal__block}>
          <Text style={styles.deleteCategoryModal__text}>
            You are about to delete
          </Text>
          <Text style={styles.deleteCategoryModal__category__name}>
            {newItemName}
          </Text>
          <Text style={styles.deleteCategoryModal__text}>
            and all the properties it contains.
          </Text>
          <View style={styles.editModal__textBlock}>
            <Text style={styles.deleteCategoryModal__warningText}>
              This action is irreversible.
            </Text>
          </View>
          <Button
            title="Delete"
            buttonStyle={styles.editCategoryModal__deleteButton}
            onPress={() => {
              deleteItem(character, actualItem, updateCharacter, dispatch);
              setNewItemName('');
              setDeleteItemModalView(!deleteItemModalView);
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

export default connect(mapStateToProps)(CharacterInventory);
