export function createCategory(character, modalValue, updateCharacterFunction, dispatch) {
  const updatedCharacter = { ...character };
  const newCategory = {
    title: modalValue,
    items: [],
    uniqueKey: `${performance.now()}${performance.now()}`,
  };
  if (!modalValue.length) {
    newCategory.title = 'New Category';
  }
  newCategory.uniqueKey = `${Date.now()}${performance.now()}`;
  updatedCharacter.inventory.categories.push(newCategory);
  dispatch(updateCharacterFunction(updatedCharacter._id, updatedCharacter));
}

export function editCategory(
  character, categoryKey, newTitle, updateCharacterFunction, dispatch,
) {
  const updatedCharacter = { ...character };
  updatedCharacter.inventory.categories.forEach(
    (category) => {
      if (category.uniqueKey === categoryKey) {
        if (!newTitle.length) {
          category.title = 'New Category';
        } else {
          category.title = newTitle;
        }
      }
    },
  );
  dispatch(updateCharacterFunction(updatedCharacter._id, updatedCharacter));
}

export function deleteCategory(
  character, categoryKey, updateCharacterFunction, dispatch,
) {
  const updatedCharacter = { ...character };
  updatedCharacter.inventory.categories = updatedCharacter.inventory.categories.filter(
    (category) => category.uniqueKey !== categoryKey,
  );
  dispatch(updateCharacterFunction(updatedCharacter._id, updatedCharacter));
}

export function createItem(
  character, categoryKey, newItemName, itemProperties,
  updateCharacterFunction, dispatch,
) {
  const updatedCharacter = { ...character };
  const newItemProperties = [];
  for (let index = 1; index < itemProperties.length; index += 1) {
    newItemProperties.push(itemProperties[index]);
  }
  const newItem = {
    itemTitle: newItemName,
    properties: newItemProperties,
    uniqueKey: `${performance.now()}${performance.now()}`,
    categoryKey,
  };

  if (!newItem.itemTitle.length) {
    newItem.itemTitle = 'New Item';
  }

  newItem.properties = newItem.properties.map((property) => {
    let newProperty = null;
    if (!property.name.length) {
      newProperty = { ...property, name: 'Property' };
    } else {
      newProperty = { ...property };
    }
    return newProperty;
  });

  updatedCharacter.inventory.categories.forEach(
    (category) => {
      if (category.uniqueKey === categoryKey) {
        category.items.push(newItem);
      }
    },
  );

  dispatch(updateCharacterFunction(updatedCharacter._id, updatedCharacter));
}

export function editItem(
  character, item, newItemName, itemProperties, updateCharacterFunction, dispatch,
) {
  const updatedCharacter = { ...character };
  const updatedItem = { ...item };

  if (!updatedItem.itemTitle.length) {
    updatedItem.itemTitle = 'New Item';
  } else {
    updatedItem.itemTitle = newItemName;
  }
  updatedItem.properties = [...itemProperties];
  updatedItem.properties = updatedItem.properties.map((property) => {
    let newProperty = null;
    if (!property.name.length) {
      newProperty = { ...property, name: 'Property' };
    } else {
      newProperty = { ...property };
    }
    return newProperty;
  });

  updatedCharacter.inventory.categories.forEach(
    (category) => {
      if (category.uniqueKey === updatedItem.categoryKey) {
        category.items.forEach((actualItem) => {
          if (actualItem.uniqueKey === updatedItem.uniqueKey) {
            actualItem.itemTitle = updatedItem.itemTitle;
            actualItem.properties = [...updatedItem.properties];
          }
        });
      }
    },
  );

  dispatch(updateCharacterFunction(updatedCharacter._id, updatedCharacter));
}

export function deleteItemProperty(itemProperties, propertyId, setItemModalProperties) {
  const newItemModalProperties = itemProperties.filter(
    (actualProperty) => actualProperty.uniqueKey !== propertyId,
  );
  setItemModalProperties(newItemModalProperties);
}

export function deleteItem(character, item, updateCharacterFunction, dispatch) {
  const updatedCharacter = { ...character };

  updatedCharacter.inventory.categories.forEach((category) => {
    if (category.uniqueKey === item.categoryKey) {
      category.items = category.items.filter(
        (actualItem) => actualItem.uniqueKey !== item.uniqueKey,
      );
    }
  });

  dispatch(updateCharacterFunction(updatedCharacter._id, updatedCharacter));
}
