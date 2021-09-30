import { User } from './models/User';

const user = new User({ name: 'Michael Frieze', age: 33 });

user.on('change', () => {
  console.log('Change #1');
});
user.on('change', () => {
  console.log('Change #2');
});
user.on('save', () => {
  console.log('Save was triggered');
});

user.trigger('change');
user.trigger('save');
user.trigger('does not work');
