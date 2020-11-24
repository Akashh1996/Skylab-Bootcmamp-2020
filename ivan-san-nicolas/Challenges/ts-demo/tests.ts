const num = 24;
// comment
function numberToString(number: number): string {
  const string = `${number}`;
  return string;
}

console.log(numberToString(num));

interface User {
  name: string,
  race: string,
  legs: number,
}

const npc: User = {
  name: '12',
  race: 'Human',
  legs: 'two',
};

console.log(npc.legs);
