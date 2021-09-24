// type gaurding example
function formatStatistic(stat: string | number) {
  if (typeof stat === 'number') {
    return stat.toFixed(2);
  }
  if (typeof stat === 'string') {
    return stat.toUpperCase();
  }
}

console.log(formatStatistic('Win'));
console.log(formatStatistic(0.364));

// custom type guarding example
type Cat = {
  name: string;
  run: () => string;
};

type Fish = {
  name: string;
  swim: () => string;
};

const siameseCat = {
  name: 'Proxie',
  run: () => 'pitter pat',
};

const bettaFish = {
  name: 'Neptune',
  swim: () => 'bubble blub',
};

function move(pet: Cat | Fish) {
  if ('run' in pet) {
    return pet.run();
  }
  return pet.swim();
}

console.log(move(siameseCat));
