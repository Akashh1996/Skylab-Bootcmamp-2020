import * as characterNotesFunctions from './CharacterNotesFunctions';

describe('Character Notes Functions', () => {
  test('should call dispatch in createNote without modify the new note title', () => {
    const character = {
      notes: {
        characterNotes: [],
      },
    };
    const noteName = 'string';
    const updateCharacter = jest.fn();
    const dispatch = jest.fn();

    characterNotesFunctions.createNote(character, noteName, updateCharacter, dispatch);

    expect(dispatch).toHaveBeenCalled();
  });
  test('should call dispatch in createNote modifying the new note title', () => {
    const character = {
      notes: {
        characterNotes: [],
      },
    };
    const noteName = '';
    const updateCharacter = jest.fn();
    const dispatch = jest.fn();

    characterNotesFunctions.createNote(character, noteName, updateCharacter, dispatch);

    expect(dispatch).toHaveBeenCalled();
  });

  test('should call dispatch in editNote without modify the new note title', () => {
    const character = {
      notes: {
        characterNotes: [
          {
            title: 'string',
            uniqueKey: 'string',
          },
          {
            title: 'string',
            uniqueKey: 'Dont match',
          },
        ],
      },
    };
    const noteKey = 'string';
    const noteTitle = 'string';
    const updateCharacter = jest.fn();
    const dispatch = jest.fn();

    characterNotesFunctions.editNote(character, noteKey, noteTitle, updateCharacter, dispatch);

    expect(dispatch).toHaveBeenCalled();
  });
  test('should call dispatch in editNote modifying the new note title', () => {
    const character = {
      notes: {
        characterNotes: [
          {
            title: 'string',
            uniqueKey: 'string',
          },
          {
            title: 'string',
            uniqueKey: 'Dont match',
          },
        ],
      },
    };
    const noteKey = 'string';
    const noteTitle = '';
    const updateCharacter = jest.fn();
    const dispatch = jest.fn();

    characterNotesFunctions.editNote(character, noteKey, noteTitle, updateCharacter, dispatch);

    expect(dispatch).toHaveBeenCalled();
  });

  test('should call dispatch in deleteNote removing one note', () => {
    const character = {
      notes: {
        characterNotes: [
          {
            title: 'string',
            uniqueKey: 'string',
          },
          {
            title: 'string',
            uniqueKey: 'Dont match',
          },
        ],
      },
    };
    const noteKey = 'string';
    const updateCharacter = jest.fn();
    const dispatch = jest.fn();

    characterNotesFunctions.deleteNote(character, noteKey, updateCharacter, dispatch);

    expect(dispatch).toHaveBeenCalled();
  });

  test('should call dispatch in createEntry adding one entry without modify the new text', () => {
    const character = {
      notes: {
        characterNotes: [
          {
            title: 'string',
            uniqueKey: 'string',
            entries: [],
          },
          {
            title: 'string',
            uniqueKey: '',
            entries: [],
          },
        ],
      },
    };
    const noteKey = 'string';
    const entryText = 'string';
    const updateCharacter = jest.fn();
    const dispatch = jest.fn();

    characterNotesFunctions.createEntry(character, noteKey, entryText, updateCharacter, dispatch);

    expect(dispatch).toHaveBeenCalled();
  });
  test('should call dispatch in createEntry without adding one entry but modifying the new text', () => {
    const character = {
      notes: {
        characterNotes: [
          {
            text: 'string',
            uniqueKey: '',
            entries: [],
          },
          {
            text: 'string',
            uniqueKey: '',
            entries: [],
          },
        ],
      },
    };
    const noteKey = 'string';
    const entryText = '';
    const updateCharacter = jest.fn();
    const dispatch = jest.fn();

    characterNotesFunctions.createEntry(character, noteKey, entryText, updateCharacter, dispatch);

    expect(dispatch).toHaveBeenCalled();
  });

  test('should call dispatch in editEntry without modify the new entry name and finding one entry', () => {
    const character = {
      notes: {
        characterNotes: [
          {
            title: 'string',
            uniqueKey: 'match',
            entries: [
              {
                uniqueKey: 'match',
              },
            ],
          },
          {
            title: 'string',
            uniqueKey: 'dont match',
            entries: [
              {
                uniqueKey: 'match',
              },
            ],
          },
        ],
      },
    };
    const noteKey = 'match';
    const entryKey = 'match';
    const entryText = 'string';
    const updateCharacter = jest.fn();
    const dispatch = jest.fn();

    characterNotesFunctions.editEntry(
      character, noteKey, entryKey, entryText, updateCharacter, dispatch,
    );

    expect(dispatch).toHaveBeenCalled();
  });
  test('should call dispatch in editEntry modifying the new entry name but without find one entry', () => {
    const character = {
      notes: {
        characterNotes: [
          {
            title: 'string',
            uniqueKey: 'dont match',
            entries: [
              {
                uniqueKey: 'match',
              },
            ],
          },
          {
            title: 'string',
            uniqueKey: 'match',
            entries: [
              {
                uniqueKey: 'match',
              },
            ],
          },
        ],
      },
    };
    const noteKey = 'match';
    const entryKey = 'dont match';
    const entryText = '';
    const updateCharacter = jest.fn();
    const dispatch = jest.fn();

    characterNotesFunctions.editEntry(
      character, noteKey, entryKey, entryText, updateCharacter, dispatch,
    );

    expect(dispatch).toHaveBeenCalled();
  });

  test('should call dispatch in deleteEntry removing one entry', () => {
    const character = {
      notes: {
        characterNotes: [
          {
            title: 'string',
            uniqueKey: 'dont match',
            entries: [
              {
                uniqueKey: 'match',
              },
            ],
          },
          {
            title: 'string',
            uniqueKey: 'match',
            entries: [
              {
                uniqueKey: 'match',
              },
            ],
          },
        ],
      },
    };
    const noteKey = 'match';
    const entryKey = 'dont match';
    const updateCharacter = jest.fn();
    const dispatch = jest.fn();

    characterNotesFunctions.deleteEntry(
      character, noteKey, entryKey, updateCharacter, dispatch,
    );

    expect(dispatch).toHaveBeenCalled();
  });
});
