import React, { useState } from 'react';
import {
  View, TextInput, TouchableOpacity, Image,
} from 'react-native';
import garbageIcon from '../../../images/garbage-icon.png';

export default function ListRow({
  value, styles, changeListValue, listCategory,
  deleteListValue, setEditListModalArrayValue,
}) {
  debugger;
  const [editValue, setEditValue] = useState(value.title);
  return (
    <View style={styles.addItemModal__block__row}>
      <View>
        <TextInput
          placeholder="add new entry"
          maxLength={30}
          multiline
          style={styles.addItemModal__inputText}
          autoCorrect={false}
          value={editValue}
          onChangeText={(text) => {
            setEditValue(text);
            changeListValue(value, text);
          }}
        />
      </View>
      <View>
        <TouchableOpacity
          style={styles.addItemModal__row__garbage}
          onPress={() => deleteListValue(listCategory, value.uniqueKey, setEditListModalArrayValue)}
        >
          <Image source={garbageIcon} style={styles.garbageIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
