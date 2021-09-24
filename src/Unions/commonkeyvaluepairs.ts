// example
type Goose = {
  isPettable: boolean;
  hasFeathers: boolean;
  canThwartAPicnic: boolean;
};

type Moose = {
  isPettable: boolean;
  hasHoofs: boolean;
};

//@ts-expect-error
const pettingZooAnimal: Goose | Moose = { isPettable: true };

console.log(pettingZooAnimal.isPettable); // No TypeScript error
//@ts-expect-error
console.log(pettingZooAnimal.hasHoofs); // TypeScript error (not a shared key value pair)

type Like = {
  username: string;
  displayName: string;
};

type Share = {
  username: string;
  // added to fix ts errors
  displayName: string;
};

function getFriendNameFromEvent(event: Like | Share) {
  return event.displayName || event.username;
}

const newEvent = {
  username: 'vkrauss',
  displayName: 'Veronica Krauss',
};

const friendName = getFriendNameFromEvent(newEvent);

console.log(`You have an update from ${friendName}.`);
