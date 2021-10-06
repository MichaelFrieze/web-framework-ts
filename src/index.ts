import { User } from './models/User';

const user = new User({ name: 'new record', age: 77 });

user.events.on('change', () => {
  console.log('change!');
});

user.events.trigger('change');
