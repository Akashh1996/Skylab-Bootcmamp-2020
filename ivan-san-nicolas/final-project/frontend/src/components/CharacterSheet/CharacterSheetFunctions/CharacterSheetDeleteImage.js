export default function deleteImage(
  character,
  updateCharacterFunction,
  dispatch,
  imageKey,
) {
  const newCharacter = { ...character };

  newCharacter.sheet.uploads = newCharacter.sheet.uploads.filter(
    (upload) => upload.uniqueKey !== imageKey,
  );

  dispatch(updateCharacterFunction(newCharacter._id, newCharacter));
}
