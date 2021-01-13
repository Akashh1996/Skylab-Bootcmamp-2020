const pickImageFromLibrary = async (
  ImagePickerFunctions,
  actualCharacter,
  imageFunction,
  updateCharacterFunction,
  dispatchFunction,
  actualImageKey,
  loadError,
) => {
  try {
    const result = await ImagePickerFunctions.launchImageLibraryAsync({
      mediaTypes: ImagePickerFunctions.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
      base64: true,
    });
    if (!result.cancelled && result.base64) {
      imageFunction(
        actualCharacter,
        result.base64,
        updateCharacterFunction,
        dispatchFunction,
        actualImageKey,
      );
    }
  } catch (error) {
    dispatchFunction(loadError(error));
  }
};

export default pickImageFromLibrary;
