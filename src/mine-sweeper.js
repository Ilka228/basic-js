const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  // let arr = [];
  // let bin = [-1, 0, 1];
    
  //   for (let i = 0;i < matrix.length; i++){
  //     for (let j = 0; j < matrix[0].length; j++) {
  //       let  count = -matrix[i][j] 
  //         for(let x of bin){
  //           for(let y of bin){
  //             if (0<=i+x && i+x<matrix.length && 0<=j+y  && j+y<matrix[0].length){
  //               count += matrix[i+x][j+y];
  //               console.log(count);

            
  //             }
  //           }
  //         }
  //       arr[i].push(count);
  //       }  
  //   }
  //   console.log(arr);          
  //   return arr;
}
minesweeper([
  [true, false, false],
  [false, true, false],
  [false, false, false],
])
module.exports = {
  minesweeper
};
