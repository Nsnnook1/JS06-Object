//#1 สำรหรับ รับ input\
let name = prompt("Enter ProductName");
let quantity = +prompt("Enter Quantity");
let price = +prompt("Enter Price");
let discount = +prompt("Enter Discount");

//#2 create obj
// const product = {
//   name: name,
//   quantity: quantity,
//   price: price,
//   discount: discount,
// };

//******เมื่อชื่อ key ตรงกับชื่อตัวแปร ที่เก็บ value สามารถยุบ syntax
// (property shorthand)
const product = {
  name,
  quantity,
  price,
  discount,
};

if (discount != 0) {
  product["discount"] = discount;
}
console.log(product);

//#3 calulate price

// function calcPirce(price, quantity, discount) {
//   let toptalPrice = price * quantity * (1 - discount);
//   return toptalPrice;
// }

// let result = calcPirce(product.price,product.quantity,product.discount);
// console.log(result);

// calcPirce({name,quantity,price,discount}) {
function calcPirce(productsObj) {
  let price = productsObj.price;
  let quantity = productsObj.quantity;
  let discount = productsObj.discount ? productsObj.discount : 0;
  return price * quantity * (1 - discount);
}
let result = calcPirce(product);

console.log(result);
