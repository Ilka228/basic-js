const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
const b = `${n}`;
let a = b.split('');
 for(let i = 0; i < a.length; i++){
   if(Number(a[i + 1]) > Number(a[i]) || Number(a[i]) === Math.min(...a)){
    a[i] = '';
    break;
   }
 }
 return (Number(a.join('')));
  
  
}
deleteDigit(10);
module.exports = {
  deleteDigit
};
