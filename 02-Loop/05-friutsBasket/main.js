// const fruits = {};

// //Accept Input
// let key = prompt("Enter Fruits");
// let value = prompt("Enter Quantity");

// //Update fruits

// if (value == 1) {
//   fruits[key] = value;
// }else if(value > 1) {
//     fruits[`${key}s`] = value;
// }

// console.log(fruits); //{apple: 10}

const Terminate = "stop";
const fruits = {};

let key;
let value;

do {
  key = prompt("Enter Fruits");
  value = +prompt("Enter Quantity");

  if (+value == 1) {
    fruits[key] = value;
  } else if (+value > 1) {
    fruits[`${key}s`] = value;
  }
  //   console.log(key != Terminate && value != Terminate);
} while (key != Terminate && value != Terminate);

console.log(fruits); //{apple: 10}
