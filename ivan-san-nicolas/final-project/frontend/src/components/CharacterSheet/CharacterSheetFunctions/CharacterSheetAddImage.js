export default function addImage(
  character,
  imageUri,
  updateCharacterFunction,
  dispatch,
) {
  const newCharacter = { ...character };

  const newImage = {
    imageBase64: imageUri,
    uniqueKey: `${performance.now()}${performance.now()}`,
  };

  if (newImage.imageBase64) {
    newCharacter.sheet.uploads.push(newImage);

    dispatch(updateCharacterFunction(newCharacter._id, newCharacter));
  }
}
