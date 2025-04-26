const { add } = require('./somma');
const { sub } = require('./somma');

test('add(2, 3) should return 5', () => {
  expect(add(2, 3)).toBe(5);
});

test('add(-1, 1) should return 0', () => {
  expect(add(-1, 1)).toBe(0);
});

test('add(0, 0) should return 0', () => {
  expect(add(0, 0)).toBe(0);
});

test('sub(5, 3) should return 2', () => {
  expect(sub(5, 3)).toBe(2);
}
);
test('sub(3, 5) should return -2', () => {
  expect(sub(3, 5)).toBe(-2);
});
test('sub(0, 0) should return 0', () => {
  expect(sub(0, 0)).toBe(0);
});

test('sub(5, 5) should return 0', () => {
  expect(sub(5, 5)).toBe(0);
}
);