import * as characterInventoryFunctions from './CharacterInventoryFunctions';

describe('CharacterInventoryFunctions', () => {
  test('should call dispatch once in createCategory modifying category title', () => {
    const character = {
      inventory: {
        categories: [],
      },
    };
    const modalValue = '';
    const updateCharacter = jest.fn();
    const dispatch = jest.fn();

    characterInventoryFunctions.createCategory(character, modalValue, updateCharacter, dispatch);

    expect(dispatch).toHaveBeenCalled();
  });
  test('should call dispatch once in createCategory without modifying category title', () => {
    const character = {
      inventory: {
        categories: [],
      },
    };
    const modalValue = 'length';
    const updateCharacter = jest.fn();
    const dispatch = jest.fn();

    characterInventoryFunctions.createCategory(character, modalValue, updateCharacter, dispatch);

    expect(dispatch).toHaveBeenCalled();
  });

  test('should call dispatch once in editCategory with newTitle length', () => {
    const character = {
      inventory: {
        categories: [
          { uniqueKey: 'string' },
        ],
      },
    };
    const categoryKey = 'string';
    const newTitle = 'string';
    const updateCharacter = jest.fn();
    const dispatch = jest.fn();

    characterInventoryFunctions.editCategory(
      character, categoryKey, newTitle, updateCharacter, dispatch,
    );

    expect(dispatch).toHaveBeenCalled();
  });
  test('should call dispatch once in editCategory without newTitle length', () => {
    const character = {
      inventory: {
        categories: [
          { uniqueKey: 'string' },
        ],
      },
    };
    const categoryKey = 'string';
    const newTitle = '';
    const updateCharacter = jest.fn();
    const dispatch = jest.fn();

    characterInventoryFunctions.editCategory(
      character, categoryKey, newTitle, updateCharacter, dispatch,
    );

    expect(dispatch).toHaveBeenCalled();
  });
  test('should call dispatch once in editCategory without modifying updated character when there is no uniqueKey match', () => {
    const character = {
      inventory: {
        categories: [
          { uniqueKey: 'string' },
        ],
      },
    };
    const categoryKey = 'dont match';
    const newTitle = '';
    const updateCharacter = jest.fn();
    const dispatch = jest.fn();

    characterInventoryFunctions.editCategory(
      character, categoryKey, newTitle, updateCharacter, dispatch,
    );

    expect(dispatch).toHaveBeenCalled();
  });

  test('should call dispatch once in deleteCategory modifying the categories property of character inventory when there is a match with uniqueKey', () => {
    const character = {
      inventory: {
        categories: [
          { uniqueKey: 'string' },
        ],
      },
    };
    const categoryKey = 'string';
    const updateCharacter = jest.fn();
    const dispatch = jest.fn();

    characterInventoryFunctions.deleteCategory(
      character, categoryKey, updateCharacter, dispatch,
    );

    expect(dispatch).toHaveBeenCalled();
  });
  test('should call dispatch once in deleteCategory without modifying the categories property of character inventory when there is not a match with uniqueKey', () => {
    const character = {
      inventory: {
        categories: [
          { uniqueKey: 'string' },
        ],
      },
    };
    const categoryKey = "don't match";
    const updateCharacter = jest.fn();
    const dispatch = jest.fn();

    characterInventoryFunctions.deleteCategory(
      character, categoryKey, updateCharacter, dispatch,
    );

    expect(dispatch).toHaveBeenCalled();
  });

  test('should call dispatch once in createItem', () => {
    const character = {
      inventory: {
        categories: [
          { uniqueKey: 'string', items: [] },
        ],
      },
    };
    const categoryKey = 'string';
    const newItemName = 'string';
    const itemProperties = [{ name: 'title' }, { name: 'String' }, { name: '' }];
    const updateCharacter = jest.fn();
    const dispatch = jest.fn();

    characterInventoryFunctions.createItem(
      character, categoryKey, newItemName, itemProperties, updateCharacter, dispatch,
    );

    expect(dispatch).toHaveBeenCalled();
  });
  test('should call dispatch once ignoring other categories in createItem', () => {
    const character = {
      inventory: {
        categories: [
          { uniqueKey: 'string', items: [] },
          { uniqueKey: 'dont match', items: [] },
        ],
      },
    };
    const categoryKey = 'string';
    const newItemName = '';
    const itemProperties = [{ name: 'string' }, { name: '' }];
    const updateCharacter = jest.fn();
    const dispatch = jest.fn();

    characterInventoryFunctions.createItem(
      character, categoryKey, newItemName, itemProperties, updateCharacter, dispatch,
    );
    expect(dispatch).toHaveBeenCalled();
  });

  test('should call dispatch once in editItem updating character', () => {
    const character = {
      inventory: {
        categories: [
          {
            uniqueKey: 'string',
            items: [
              { uniqueKey: 'string' },
            ],
          },
        ],
      },
    };
    const item = {
      itemTitle: 'string',
      uniqueKey: 'string',
      categoryKey: 'string',
    };
    const newItemName = 'string';
    const itemProperties = [{ name: 'string' }, { name: 'string' }];
    const updateCharacter = jest.fn();
    const dispatch = jest.fn();

    characterInventoryFunctions.editItem(
      character, item, newItemName, itemProperties, updateCharacter, dispatch,
    );

    expect(dispatch).toHaveBeenCalled();
  });
  test('should call dispatch once in editItem without updating item', () => {
    const character = {
      inventory: {
        categories: [
          {
            uniqueKey: 'string',
            items: [
              { uniqueKey: 'dont match' },
            ],
          },
        ],
      },
    };
    const item = {
      itemTitle: 'string',
      uniqueKey: 'string',
      categoryKey: 'string',
    };
    const newItemName = 'string';
    const itemProperties = [{ name: 'string' }, { name: 'string' }];
    const updateCharacter = jest.fn();
    const dispatch = jest.fn();

    characterInventoryFunctions.editItem(
      character, item, newItemName, itemProperties, updateCharacter, dispatch,
    );

    expect(dispatch).toHaveBeenCalled();
  });
  test('should call dispatch once in editItem without finding mathing category', () => {
    const character = {
      inventory: {
        categories: [
          {
            uniqueKey: 'string',
            items: [
              { uniqueKey: 'dont match' },
            ],
          },
        ],
      },
    };
    const item = {
      itemTitle: 'string',
      uniqueKey: 'string',
      categoryKey: 'dont match',
    };
    const newItemName = 'string';
    const itemProperties = [{ name: 'string' }, { name: 'string' }];
    const updateCharacter = jest.fn();
    const dispatch = jest.fn();

    characterInventoryFunctions.editItem(
      character, item, newItemName, itemProperties, updateCharacter, dispatch,
    );

    expect(dispatch).toHaveBeenCalled();
  });
  test('should call dispatch once in editItem modifying updatedItem title', () => {
    const character = {
      inventory: {
        categories: [
          {
            uniqueKey: 'string',
            items: [
              { uniqueKey: 'dont match' },
            ],
          },
        ],
      },
    };
    const item = {
      itemTitle: '',
      uniqueKey: 'string',
      categoryKey: 'string',
    };
    const newItemName = 'string';
    const itemProperties = [{ name: 'string' }, { name: 'string' }];
    const updateCharacter = jest.fn();
    const dispatch = jest.fn();

    characterInventoryFunctions.editItem(
      character, item, newItemName, itemProperties, updateCharacter, dispatch,
    );

    expect(dispatch).toHaveBeenCalled();
  });
  test('should call dispatch once in editItem modifying property name', () => {
    const character = {
      inventory: {
        categories: [
          {
            uniqueKey: 'string',
            items: [
              { uniqueKey: 'dont match' },
            ],
          },
        ],
      },
    };
    const item = {
      itemTitle: '',
      uniqueKey: 'string',
      categoryKey: 'string',
    };
    const newItemName = 'string';
    const itemProperties = [{ name: '' }, { name: '' }];
    const updateCharacter = jest.fn();
    const dispatch = jest.fn();

    characterInventoryFunctions.editItem(
      character, item, newItemName, itemProperties, updateCharacter, dispatch,
    );

    expect(dispatch).toHaveBeenCalled();
  });

  test('should call setItemModalProperties once in deleteItemProperty', () => {
    const itemProperties = [{ name: 'string' }, { name: 'dont match' }];
    const propertyId = 'string';
    const setItemModalProperties = jest.fn();

    characterInventoryFunctions.deleteItemProperty(
      itemProperties, propertyId, setItemModalProperties,
    );

    expect(setItemModalProperties).toHaveBeenCalled();
  });

  test('should call dispatch once in deleteItem without removing item', () => {
    const character = {
      inventory: {
        categories: [
          {
            uniqueKey: 'string',
            items: [{
              uniqueKey: 'string',
            }],
          },
        ],
      },
    };
    const item = {
      uniqueKey: 'string',
      categoryKey: 'string',
    };
    const updateCharacterFunction = jest.fn();
    const dispatch = jest.fn();

    characterInventoryFunctions.deleteItem(
      character, item, updateCharacterFunction, dispatch,
    );

    expect(dispatch).toHaveBeenCalled();
  });
  test('should call dispatch once in deleteItem removing item', () => {
    const character = {
      inventory: {
        categories: [
          {
            uniqueKey: 'string',
            items: [{
              uniqueKey: 'string',
            }],
          },
        ],
      },
    };
    const item = {
      uniqueKey: 'string',
      categoryKey: 'Dont match',
    };
    const updateCharacterFunction = jest.fn();
    const dispatch = jest.fn();

    characterInventoryFunctions.deleteItem(
      character, item, updateCharacterFunction, dispatch,
    );

    expect(dispatch).toHaveBeenCalled();
  });
});
