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

// another example of type narrowing
type Pasta = {
  menuName: string;
  boil: () => string;
};

type Meat = {
  menuName: string;
  panFry: () => string;
};

const fettuccine = {
  menuName: 'Fettuccine',
  boil: () => 'Heat water to 212 degrees',
};

const steak = {
  menuName: 'New York Strip Steak',
  panFry: () => 'Heat oil to 350 degrees',
};

function prepareEntree(entree: Pasta | Meat) {
  if ('panFry' in entree) {
    return entree.panFry();
  }
  return entree.boil();
}

console.log(prepareEntree(fettuccine));
