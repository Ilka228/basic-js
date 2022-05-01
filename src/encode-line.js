const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++){
    let j = 1;
    while( i < str.length && str[i] === str[i + 1]) {
      j++;
      i++;
    }
    if( j !== 1) {
    arr.push(j);
    
    }
    arr.push(str[i]);
  }
  return arr.join('');
}

module.exports = {
  encodeLine
};
