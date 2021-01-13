import * as characterListFunctions from './CharacterListFunctions';

describe('characterListFunctions', () => {
  test('should call setAddCharacterModalView', () => {
    const setAddCharacterModalView = jest.fn();
    const addCharacterModalView = null;

    characterListFunctions.displayAddCharacterModal(
      setAddCharacterModalView, addCharacterModalView,
    );
    expect(setAddCharacterModalView).toHaveBeenCalled();
  });

  describe('addNewCharacter', () => {
    test('should call dispatch function with empty properties of character', () => {
      const character = {};
      const setCharacterList = jest.fn();
      const setAddCharacterModalView = jest.fn();
      const createCharacter = jest.fn();
      const dispatch = jest.fn();

      characterListFunctions.addNewCharacter(
        character, 'userId', [],
        setAddCharacterModalView, false,
        createCharacter, dispatch,
      );

      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe('addNewCharacter', () => {
    test('should call dispatch function without modify properties of character', () => {
      const character = {
        name: 'name',
        game: 'game',
        race: 'race',
        characterClass: 'class',
        lvl: 'lvl',
      };
      const setCharacterList = jest.fn();
      const setAddCharacterModalView = jest.fn();
      const createCharacter = jest.fn();
      const dispatch = jest.fn();

      characterListFunctions.addNewCharacter(
        character, 'userId', [],
        setAddCharacterModalView, false,
        createCharacter, dispatch,
      );

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
