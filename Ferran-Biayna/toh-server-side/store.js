function descriptionHero(hero, description) {
  const newArray = Object.entries(hero[description]);
  let li = '';
  for (let index = 0; index < newArray.length; index += 1) {
    if (
      newArray[index][1] !== null
        && newArray[index][1] !== undefined
        && newArray[index][1] !== '-'
        && newArray[index][1] !== ''
    ) {
      li += `<li>${newArray[index][0].toLowerCase()}: ${newArray[index][1]}<li>`;
    }
  }
  return li;
}

export default descriptionHero;
