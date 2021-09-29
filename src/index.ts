import { User } from './models/User';

const user = new User({ name: 'Michael Frieze', age: 33 });

// user.get('name');
console.log(
  "🚀 ~ file: index.ts ~ line 6 ~ user.get('name')",
  user.get('name')
);

// user.get('age');
console.log("🚀 ~ file: index.ts ~ line 9 ~ user.get('age')", user.get('age'));

console.log('setting new values');

user.set({ name: 'John Adams', age: 9999 });

// user.get('name');
console.log(
  "🚀 ~ file: index.ts ~ line 6 ~ user.get('name')",
  user.get('name')
);

// user.get('age');
console.log("🚀 ~ file: index.ts ~ line 9 ~ user.get('age')", user.get('age'));

console.log(
  'after adding optional to the UserProps interface properties, we can set 2, 1, or even 0 values. Also this makes it so that we do not have to initially provide a name and age in the constructor'
);

user.set({ name: 'Name Only' });

// user.get('name');
console.log(
  "🚀 ~ file: index.ts ~ line 6 ~ user.get('name')",
  user.get('name')
);

// user.get('age');
console.log("🚀 ~ file: index.ts ~ line 9 ~ user.get('age')", user.get('age'));
