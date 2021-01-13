import { updateCharacter } from '../../redux/actions/characterActions';

export const setVisibility = {
  sheetVisibility: 'Sheet visibility',
  inventoryVisibility: 'Inventory visibility',
  notesVisibility: 'Notes visibility',
};

export function changeSetVisibility(
  actualCharacter, setCharacterFunction, setId, actualSetVisibility, dispatch,
) {
  const updatedcharacter = { ...actualCharacter };
  const characterId = updatedcharacter._id;
  switch (setId) {
    case actualSetVisibility.inventoryVisibility:
      if (updatedcharacter.inventory.public) {
        updatedcharacter.inventory.public = false;
      } else {
        updatedcharacter.inventory.public = true;
      }
      break;
    case actualSetVisibility.sheetVisibility:
      if (updatedcharacter.sheet.public) {
        updatedcharacter.sheet.public = false;
      } else {
        updatedcharacter.sheet.public = true;
      }
      break;
    case actualSetVisibility.notesVisibility:
      if (updatedcharacter.notes.public) {
        updatedcharacter.notes.public = false;
      } else {
        updatedcharacter.notes.public = true;
      }
      break;

    default:
      break;
  }
  setCharacterFunction(updatedcharacter);
  dispatch(updateCharacter(characterId, updatedcharacter));
}

export function displayDeleteCharacterModal(setDeleteCharacterModalView, deleteCharacterModalView) {
  setDeleteCharacterModalView(!deleteCharacterModalView);
}

export function displayEditModal(setModalVisibility, modalVisibility) {
  setModalVisibility(!modalVisibility);
}

export const editCharacterMethods = {
  editCharacterName(actualCharacter, text, setCharacterFunction, dispatch) {
    const updatedCharacter = { ...actualCharacter };
    const characterId = updatedCharacter._id;
    let newText = text;

    if (!newText.length) {
      newText = 'Adventurer';
    }

    updatedCharacter.name = newText;

    setCharacterFunction(text);
    dispatch(updateCharacter(characterId, updatedCharacter));
  },
  editCharacterGame(actualCharacter, text, setCharacterFunction, dispatch) {
    const updatedCharacter = { ...actualCharacter };
    const characterId = updatedCharacter._id;

    updatedCharacter.game = text;

    setCharacterFunction(text);
    dispatch(updateCharacter(characterId, updatedCharacter));
  },
  editCharacterRace(actualCharacter, text, setCharacterFunction, dispatch) {
    const updatedCharacter = { ...actualCharacter };
    const characterId = updatedCharacter._id;

    updatedCharacter.race = text;

    setCharacterFunction(text);
    dispatch(updateCharacter(characterId, updatedCharacter));
  },
  editCharacterClass(actualCharacter, text, setCharacterFunction, dispatch) {
    const updatedCharacter = { ...actualCharacter };
    const characterId = updatedCharacter._id;

    updatedCharacter.characterClass = text;

    setCharacterFunction(text);
    dispatch(updateCharacter(characterId, updatedCharacter));
  },
  editCharacterLvl(actualCharacter, text, setCharacterFunction, dispatch) {
    const updatedCharacter = { ...actualCharacter };
    const characterId = updatedCharacter._id;

    updatedCharacter.lvl = text;

    setCharacterFunction(text);
    dispatch(updateCharacter(characterId, updatedCharacter));
  },
  editName: 'Edit Name',
  editGame: 'Edit Game',
  editRace: 'Edit Race',
  editClass: 'Edit Class',
  editLvl: 'Edit Level',
};

export function editCharacter(
  editType, actualCharacter, actualTextValue, characterMethods, displayModal,
  setEditModalView, editModalView, setCharacterName, setCharacterGame, setCharacterRace,
  setCharacterClass, setCharacterLvl, dispatch,
) {
  switch (editType) {
    case characterMethods.editName:
      characterMethods.editCharacterName(actualCharacter, actualTextValue,
        setCharacterName, dispatch);
      break;
    case characterMethods.editGame:
      characterMethods.editCharacterGame(actualCharacter, actualTextValue,
        setCharacterGame, dispatch);
      break;
    case characterMethods.editRace:
      characterMethods.editCharacterRace(actualCharacter, actualTextValue,
        setCharacterRace, dispatch);
      break;
    case characterMethods.editClass:
      characterMethods.editCharacterClass(actualCharacter, actualTextValue,
        setCharacterClass, dispatch);
      break;
    case characterMethods.editLvl:
      characterMethods.editCharacterLvl(actualCharacter, actualTextValue,
        setCharacterLvl, dispatch);
      break;
    default:
      break;
  }
  displayModal(setEditModalView, editModalView);
}
