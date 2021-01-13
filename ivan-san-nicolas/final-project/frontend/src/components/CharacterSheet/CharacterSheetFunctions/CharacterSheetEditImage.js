export default function editImage(
  character,
  imageUri,
  updateCharacterFunction,
  dispatch,
  imageKey,
) {
  const newCharacter = { ...character };

  newCharacter.sheet.uploads.forEach((upload) => {
    if (upload.uniqueKey === imageKey) {
      upload.imageBase64 = imageUri;
    }
  });

  dispatch(updateCharacterFunction(newCharacter._id, newCharacter));
}
