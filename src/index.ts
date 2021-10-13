import { User } from './models/User';

const user = new User({ name: 'new record', age: 77 });

// only works if get method in Attributes is an arrow function because of 'this'
console.log(user.get('name'));

user.on('change', () => {
  console.log('user changed');
});

user.trigger('change');
