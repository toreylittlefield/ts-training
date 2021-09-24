interface Developer extends Human1 {
  code: () => void;
}

// Add your interface here
interface Human1 {
  name: string;
  hobbies: string[];
}

const me: Developer = {
  code: () => console.log('Headphones on. Coffee brewed. Editor open.'),
  name: 'Corrina',
  hobbies: ['Building rockets'],
};

me.code();
