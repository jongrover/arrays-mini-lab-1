const animals = require('./app');

test('array has a length of 3', () => {
  expect(animals.length).toBe(3);
});

test('array returns the correct value', () => {
  expect(animals.join(',')).toEqual('Cat,Dog,Lion');
});
