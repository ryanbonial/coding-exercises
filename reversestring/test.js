const reverse = require('./index');

test('Reverse function exists', () => {
  expect(reverse).toBeDefined();
});

test('Reverse reverses a string', () => {
  expect(reverse('abcd')).toEqual('dcba');
});

test('Reverse reverses a string with spaces', () => {
  expect(reverse('  abcd')).toEqual('dcba  ');
});

test('Reverse reverses a string with unicode', () => {
  expect(reverse('🚀abcd')).toEqual('dcba🚀');
});
