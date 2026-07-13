const { add } = require('./app');

test('1 + 1 equals 2', () => {
  expect(1 + 1).toBe(2);
});

test('add function works', () => {
  expect(add(2, 3)).toBe(5);
});
