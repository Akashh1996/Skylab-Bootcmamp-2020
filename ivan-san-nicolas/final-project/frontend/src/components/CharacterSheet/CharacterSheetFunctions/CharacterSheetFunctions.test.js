import addImage from './CharacterSheetAddImage';
import deleteImage from './CharacterSheetDeleteImage';
import editImage from './CharacterSheetEditImage';
import pickImageFromLibrary from './CharacterSheetPickImage';

describe('CharacterSheetFunctions', () => {
  const character = {
    sheet: {
      uploads: [
        {
          uniqueKey: 'string',
        },
        {
          uniqueKey: 'match',
        },
      ],
    },
  };
  let imageUri = 'string';
  const updateCharacter = jest.fn();
  const dispatch = jest.fn();
  let imageKey = 'match match';

  afterEach(() => {
    character.sheet.uploads = [
      {
        uniqueKey: 'string',
      },
      {
        uniqueKey: 'match',
      },
    ];
    imageUri = 'string';
    imageKey = 'string';
    jest.resetAllMocks();
  });

  test('should call dispatch once pushing the new image', () => {
    addImage(character, imageUri, updateCharacter, dispatch);
    expect(dispatch).toHaveBeenCalled();
  });
  test('should not call dispatch', () => {
    imageUri = null;
    addImage(character, imageUri, updateCharacter, dispatch);
    expect(dispatch).toHaveBeenCalledTimes(0);
  });

  test('should call dispatch once updating character images', () => {
    deleteImage(character, updateCharacter, dispatch, imageKey);
    expect(dispatch).toHaveBeenCalled();
  });
  test('should call dispatch once without update character images', () => {
    deleteImage(character, updateCharacter, dispatch, imageKey);
    expect(dispatch).toHaveBeenCalled();
  });

  test('should call dispatch once updating one character image', () => {
    editImage(character, imageUri, updateCharacter, dispatch, imageKey);
    expect(dispatch).toHaveBeenCalled();
  });

  test('should loadError function once when there is no response', () => {
    const imageFunction = jest.fn();
    const result = { cancelled: false, base64: 'string' };
    const ImagePicker = {
      launchImageLibraryAsync: jest.fn().mockRejectedValueOnce(result),
    };
    const loadError = jest.fn();
    pickImageFromLibrary(
      ImagePicker, character, imageFunction,
      updateCharacter, dispatch, imageKey, loadError,
    );
    expect(loadError).toHaveBeenCalled();
  });
  test('should dispatch function once when there is response', async () => {
    const imageFunction = jest.fn();
    const result = { cancelled: false, base64: 'string' };
    const ImagePicker = {
      launchImageLibraryAsync: jest.fn().mockResolvedValueOnce(result),
    };
    const loadError = jest.fn();
    await pickImageFromLibrary(
      ImagePicker, character, imageFunction,
      updateCharacter, dispatch, imageKey, loadError,
    );
    expect(imageFunction).toHaveBeenCalled();
  });
});
