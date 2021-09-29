import { User } from './models/User';

const user = new User({ name: 'Michael Frieze', age: 33 });

// user.get('name');
console.log(
  "🚀 ~ file: index.ts ~ line 6 ~ user.get('name')",
  user.get('name')
);

// user.get('age');
console.log("🚀 ~ file: index.ts ~ line 9 ~ user.get('age')", user.get('age'));
