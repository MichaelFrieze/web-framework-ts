import { User } from './models/User';

const user = new User({ name: 'new record', age: 77 });

// // using a get accessor to assign a reference to the on() method in the eventing class
// const on = user.on;

// // for example:
// // also, calling on() needs an event name and a callback
// on('change', () => {
//   console.log('user changed');
// });

// to simplify this:
user.on('change', () => {
  console.log('user changed');
});
