/* eslint-disable no-bitwise */
export function displayAddCharacterModal(setAddCharacterModalView, addCharacterModalView) {
  setAddCharacterModalView(!addCharacterModalView);
}

export const newCharacterModel = {
  name: '',
  game: '',
  race: '',
  lvl: '',
  characterClass: '',
  owner: '',
  sheet: {
    public: true,
    url: '',
  },
  inventory: {
    public: true,
    categories: [],
  },
  notes: {
    public: true,
    characterNotes: [],
  },
};

export function addNewCharacter(
  character, userId, characterList,
  setAddCharacterModalView,
  addCharacterModalView, createCharacter,
  dispatch,
) {
  const newCharacter = { ...character };

  if (!newCharacter.name) {
    newCharacter.name = 'Adventurer';
  }
  if (!newCharacter.game) {
    newCharacter.game = 'Role';
  }
  if (!newCharacter.race) {
    newCharacter.race = 'Human';
  }
  if (!newCharacter.characterClass) {
    newCharacter.characterClass = 'Warrior';
  }
  if (!newCharacter.lvl) {
    newCharacter.lvl = '1';
  }
  newCharacter.uniqueKey = `${Date.now()}${performance.now()}`;
  newCharacter.owner = userId;
  dispatch(createCharacter(newCharacter));
  characterList.push(newCharacter);
  setAddCharacterModalView(!addCharacterModalView);
}
