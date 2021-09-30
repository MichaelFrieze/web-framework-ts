import { User } from './models/User';

const user = new User({ name: 'Michael Frieze', age: 33 });

user.on('change', () => {});
user.on('change', () => {});
user.on('moreChange', () => {});

console.log(user);
