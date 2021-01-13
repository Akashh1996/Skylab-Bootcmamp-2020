import React, { useState } from 'react';
import {
  View, TextInput, TouchableOpacity, Image,
} from 'react-native';
import garbageIcon from '../../../images/garbage-icon.png';
import { deleteItemProperty } from '../CharacterInventoryFunctions';

export default function PropertyRow({
  property, styles, changePropertyValue,
  itemModalProperties, setItemModalProperties,
}) {
  const [propertyName, setPropertyName] = useState(property.name);
  const [propertyValue, setPropertyValue] = useState(property.value);
  return (
    <View style={styles.addItemModal__block__row}>
      <View style={styles.addItemModal__row__name}>
        <TextInput
          placeholder="Property name"
          maxLength={30}
          multiline
          style={styles.addItemModal__inputText}
          autoCorrect={false}
          value={propertyName}
          onChangeText={(text) => {
            setPropertyName(text);
            changePropertyValue(property, 'name', text);
          }}
        />
      </View>
      <View style={styles.addItemModal__row__value}>
        <TextInput
          placeholder="Value"
          multiline
          style={styles.addItemModal__inputText}
          autoCorrect={false}
          value={propertyValue}
          onChangeText={(text) => {
            setPropertyValue(text);
            changePropertyValue(property, 'value', text);
          }}
        />
      </View>
      <TouchableOpacity
        style={styles.addItemModal__row__garbage}
        onPress={() => {
          deleteItemProperty(
            itemModalProperties, property.uniqueKey, setItemModalProperties,
          );
        }}
      >
        <Image source={garbageIcon} style={styles.garbageIcon} />
      </TouchableOpacity>
    </View>
  );
}
