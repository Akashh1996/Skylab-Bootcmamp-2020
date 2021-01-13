export function createNote(character, noteName, updateCharacterFunction, dispatch) {
  const updatedCharacter = { ...character };
  const newNote = {
    title: noteName,
    entries: [],
    uniqueKey: `${performance.now()}${performance.now()}`,
  };
  if (!noteName.length) {
    newNote.title = 'New Note';
  }
  newNote.uniqueKey = `${Date.now()}${performance.now()}`;
  updatedCharacter.notes.characterNotes.push(newNote);
  dispatch(updateCharacterFunction(updatedCharacter._id, updatedCharacter));
}

export function editNote(character, noteKey, noteTitle, updateCharacterFunction, dispatch) {
  const updatedCharacter = { ...character };
  let newTitle = noteTitle;
  if (!newTitle.length) {
    newTitle = 'New Note';
  }
  updatedCharacter.notes.characterNotes.forEach((note) => {
    if (note.uniqueKey === noteKey) {
      note.title = newTitle;
    }
  });
  dispatch(updateCharacterFunction(updatedCharacter._id, updatedCharacter));
}

export function deleteNote(
  character, noteKey, updateCharacterFunction, dispatch,
) {
  const updatedCharacter = { ...character };
  updatedCharacter.notes.characterNotes = updatedCharacter.notes.characterNotes.filter(
    (note) => note.uniqueKey !== noteKey,
  );
  dispatch(updateCharacterFunction(updatedCharacter._id, updatedCharacter));
}

export function createEntry(character, noteKey, entryText, updateCharacterFunction, dispatch) {
  const updatedCharacter = { ...character };
  const newEntry = {
    text: entryText,
    uniqueKey: '',
  };
  if (!newEntry.text.length) {
    newEntry.text = 'New Entry';
  }
  newEntry.uniqueKey = `${Date.now()}${performance.now()}`;

  updatedCharacter.notes.characterNotes.forEach((note) => {
    if (note.uniqueKey === noteKey) {
      note.entries.push(newEntry);
    }
  });
  dispatch(updateCharacterFunction(updatedCharacter._id, updatedCharacter));
}

export function editEntry(
  character, noteKey, entryKey, entryText, updateCharacterFunction, dispatch,
) {
  debugger;
  const updatedCharacter = { ...character };
  let newEntryText = entryText;

  if (!newEntryText.length) {
    newEntryText = 'New Entry';
  }

  updatedCharacter.notes.characterNotes.forEach((note) => {
    if (note.uniqueKey === noteKey) {
      note.entries.forEach((entry) => {
        if (entry.uniqueKey === entryKey) {
          entry.text = newEntryText;
        }
      });
    }
  });
  dispatch(updateCharacterFunction(updatedCharacter._id, updatedCharacter));
}

export function deleteEntry(
  character, noteKey, entryKey, updateCharacterFunction, dispatch,
) {
  const updatedCharacter = { ...character };
  updatedCharacter.notes.characterNotes.forEach((note) => {
    if (note.uniqueKey === noteKey) {
      note.entries = note.entries.filter((entry) => entry.uniqueKey !== entryKey);
    }
  });
  dispatch(updateCharacterFunction(updatedCharacter._id, updatedCharacter));
}
