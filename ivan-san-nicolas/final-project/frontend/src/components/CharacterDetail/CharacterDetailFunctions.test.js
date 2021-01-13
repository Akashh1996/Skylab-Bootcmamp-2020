import * as characterDetailFunctions from './CharacterDetailFunctions';

describe('CharacterDetailsFunctions', () => {
  describe('changeSetVisibility', () => {
    const actualCharacter = {
      inventory: {
        public: true,
      },
      sheet: {
        public: true,
      },
      notes: {
        public: true,
      },
      _id: 'id',
    };
    const setCharacterFunction = jest.fn();
    const actualSetVisibility = {
      inventoryVisibility: 'inventory',
      sheetVisibility: 'sheet',
      notesVisibility: 'notes',
    };
    const dispatch = jest.fn();

    test('should call dispatch when inventory is true', () => {
      const setId = actualSetVisibility.inventoryVisibility;

      characterDetailFunctions.changeSetVisibility(
        actualCharacter, setCharacterFunction,
        setId, actualSetVisibility, dispatch,
      );

      expect(dispatch).toHaveBeenCalled();
    });
    test('should call dispatch when inventory is false', () => {
      const setId = actualSetVisibility.inventoryVisibility;
      actualCharacter.inventory.public = false;

      characterDetailFunctions.changeSetVisibility(
        actualCharacter, setCharacterFunction,
        setId, actualSetVisibility, dispatch,
      );

      expect(dispatch).toHaveBeenCalled();
    });

    test('should call dispatch when sheet is true', () => {
      const setId = actualSetVisibility.sheetVisibility;

      characterDetailFunctions.changeSetVisibility(
        actualCharacter, setCharacterFunction,
        setId, actualSetVisibility, dispatch,
      );

      expect(dispatch).toHaveBeenCalled();
    });
    test('should call dispatch when sheet is false', () => {
      const setId = actualSetVisibility.sheetVisibility;
      actualCharacter.sheet.public = false;

      characterDetailFunctions.changeSetVisibility(
        actualCharacter, setCharacterFunction,
        setId, actualSetVisibility, dispatch,
      );

      expect(dispatch).toHaveBeenCalled();
    });

    test('should call dispatch when notes is true', () => {
      const setId = actualSetVisibility.notesVisibility;

      characterDetailFunctions.changeSetVisibility(
        actualCharacter, setCharacterFunction,
        setId, actualSetVisibility, dispatch,
      );

      expect(dispatch).toHaveBeenCalled();
    });
    test('should call dispatch when notes is false', () => {
      const setId = actualSetVisibility.notesVisibility;
      actualCharacter.notes.public = false;

      characterDetailFunctions.changeSetVisibility(
        actualCharacter, setCharacterFunction,
        setId, actualSetVisibility, dispatch,
      );

      expect(dispatch).toHaveBeenCalled();
    });

    test('should break when there is no switch case', () => {
      characterDetailFunctions.changeSetVisibility(
        actualCharacter, setCharacterFunction,
        'setId', actualSetVisibility, dispatch,
      );

      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe('displayDeleteCharacterModal', () => {
    test('should call setModalVisibility', () => {
      const setDeleteCharacterModalView = jest.fn();
      const deleteCharacterModalView = null;

      characterDetailFunctions.displayDeleteCharacterModal(
        setDeleteCharacterModalView, deleteCharacterModalView,
      );

      expect(setDeleteCharacterModalView).toHaveBeenCalled();
    });
  });

  describe('displayEditModal', () => {
    test('should call setModalVisibility', () => {
      const setModalVisibility = jest.fn();
      const modalVisibility = null;

      characterDetailFunctions.displayEditModal(setModalVisibility, modalVisibility);

      expect(setModalVisibility).toHaveBeenCalled();
    });
  });

  describe('editCharacterMethods', () => {
    const actualCharacter = {
      _id: 'id',
    };
    let text = 'text';
    const setCharacterFunction = jest.fn();
    const dispatch = jest.fn();

    test('should call dispatch in editCharacterName modifying empty text', () => {
      text = '';
      characterDetailFunctions.editCharacterMethods
        .editCharacterName(actualCharacter, text, setCharacterFunction, dispatch);
    });
    test('should call dispatch in editCharacterName without modify empty text', () => {
      text = 'string';
      characterDetailFunctions.editCharacterMethods
        .editCharacterName(actualCharacter, text, setCharacterFunction, dispatch);
    });

    test('should call dispatch in editCharacterGame', () => {
      characterDetailFunctions.editCharacterMethods
        .editCharacterGame(actualCharacter, text, setCharacterFunction, dispatch);
    });

    test('should call dispatch in editCharacterRace', () => {
      characterDetailFunctions.editCharacterMethods
        .editCharacterRace(actualCharacter, text, setCharacterFunction, dispatch);
    });

    test('should call dispatch in editCharacterClass', () => {
      characterDetailFunctions.editCharacterMethods
        .editCharacterClass(actualCharacter, text, setCharacterFunction, dispatch);
    });

    test('should call dispatch in editCharacterLvl', () => {
      characterDetailFunctions.editCharacterMethods
        .editCharacterLvl(actualCharacter, text, setCharacterFunction, dispatch);
    });
  });

  describe('editCharacters', () => {
    const characterMethods = {
      editCharacterName: jest.fn(),
      editCharacterGame: jest.fn(),
      editCharacterRace: jest.fn(),
      editCharacterClass: jest.fn(),
      editCharacterLvl: jest.fn(),
      editName: 'editName',
      editGame: 'editGame',
      editRace: 'editRace',
      editClass: 'editClass',
      editLvl: 'editLvl',
    };
    const displayEditModal = jest.fn();

    test('should call editCharacterName when editType is editName', () => {
      const editType = characterMethods.editName;

      characterDetailFunctions.editCharacter(
        editType, null, null,
        characterMethods, displayEditModal,
      );

      expect(characterMethods.editCharacterName).toHaveBeenCalled();
    });

    test('should call editCharacterGame when editType is editGame', () => {
      const editType = characterMethods.editGame;

      characterDetailFunctions.editCharacter(
        editType, null, null,
        characterMethods, displayEditModal,
      );

      expect(characterMethods.editCharacterGame).toHaveBeenCalled();
    });

    test('should call editCharacterRace when editType is editRace', () => {
      const editType = characterMethods.editRace;

      characterDetailFunctions.editCharacter(
        editType, null, null,
        characterMethods, displayEditModal,
      );

      expect(characterMethods.editCharacterRace).toHaveBeenCalled();
    });

    test('should call editCharacterClass when editType is editClass', () => {
      const editType = characterMethods.editClass;

      characterDetailFunctions.editCharacter(
        editType, null, null,
        characterMethods, displayEditModal,
      );

      expect(characterMethods.editCharacterClass).toHaveBeenCalled();
    });

    test('should call editCharacterLvl when editType is editLvl', () => {
      const editType = characterMethods.editLvl;

      characterDetailFunctions.editCharacter(
        editType, null, null,
        characterMethods, displayEditModal,
      );

      expect(characterMethods.editCharacterLvl).toHaveBeenCalled();
    });

    test('should break when there is no case in switch function', () => {
      const editType = 'none';

      characterDetailFunctions.editCharacter(
        editType, null, null,
        characterMethods, displayEditModal,
      );

      expect(displayEditModal).toHaveBeenCalled();
    });
  });
});
