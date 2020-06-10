// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // -- unicode-safe
  return Array.from(str).reverse().join('');

  // -- Classic
  return str.split('').reverse().join('');

  // -- without using reverse
  let revArr = [];
  Array.from(str).forEach(letter => revArr.unshift(letter));
  return revArr.join('');

  // -- old-school backwards
  let revStr = '';
  for (let xx = str.length - 1; xx >= 0; xx--) {
    revStr += str[xx];
  }
  return revStr;
}

module.exports = reverse;
