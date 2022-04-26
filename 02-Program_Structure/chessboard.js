/* Write a program that creates a string that represents an 8×8 grid, using newline
characters to separate lines. At each position of the grid there is either a space
or a "#" character. The characters should form a chessboard.
Passing this string to console.log should show something like this:

# # # #
 # # # #
# # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #

When you have a program that generates this pattern, define a binding size
= 8 and change the program so that it works for any size, outputting a grid
of the given width and height.

let str = ``;
const firstString = "##  ##  ##  ##  ";
const secondString = "  ##  ##  ##  ##";
for (let i = 0; i < 4; i++) {
  str += `${firstString}\n${secondString}\n`;
}
console.log(str); */

const size = 20;
let str = ``;
for (let i = 1; i <= size; i++) {
  for (let j = 0; j < size; j++) {
    if ((i + j) % 2 === 0) {
      // doubled " " and "#" for a better rendering of the board
      str += "  ";
    } else {
      str += "##";
    }
  }
  if (i < size) {
    //check to awoid \n at the end
    str += "\n";
  }
}

console.log(str);

// Solution from the book:
// let size = 8;
// let board = "";
// for (let y = 0; y < size; y++) {
//   for (let x = 0; x < size; x++) {
//     if ((x + y) % 2 == 0) {
//       board += " ";
//     } else {
//       board += "#";
//     }
//   }
//   board += "\n";
// }
// console.log(board);
