export function addHero(hero) {
  return {
    type: 'ADD_HERO',
    hero,
  };
}

export function deleteHero(hero) {
  return {
    type: 'DELETE_HERO',
    hero,
  };
}
