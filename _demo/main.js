console.log("learn object");
//DataTypes
// -primaitive : Boolean,Number,String etc.
// -nonprimitive : object

// ##Object Declaration
//{} == stand for-object / scope
//{ recode_1 , recode_2 , recode_3 , .... }
//each record => <key_name> : <value>
//<value> any datatype
//<key_name> Datatype : String
//แต่ละ record === property (คุณสมบัติมสิ่งที่มี) == key-value pair

let user = {
  firstName: "nansinee",
  lastName: "sirimontakan",
  age: 23,
  isAdmin: true,
  "link human": true, //ไม่ควรใช้
};

console.log(user);

//---------------------------------------------------

// ## Access, Modify, Delete

//every action need key_name !!!!!
//Dot Notation <obj> . <key_name> ===== <Value>
//ข้อจำกัด! เข้าถึง key ที่มี ช่องว่างไม่ได้ ต้องใส่[]

// GET, POLL, READ
console.log(user.firstName === "nansinee");
console.log(user.lastName);
console.log(user.age);
console.log(user.isAdmin);
console.log(user["link human"]);

//Modify , UPDATE
//Syntax : <obj> . <old_key_name> = newValue
user.firstName = "pravit";
user.age = 25;
user.age += 2;
user.age++;
console.log(user.age);

//ADD
//Syntax : <obj> . <New_key_name>
user.address = "bangkok";
console.log(user.address);

//DELETE
//Syntax : delete <obj> . <key_name>
delete user.isAdmin;
console.log(user);

//---------------------------------------------------

// ## Nested object

const employee = {
  fullname: "nook nsn ",
  salary: 500_000,
  address: {
    district: "phaya thai",
    province: "burirum",
    countyy: "bkk",
  },
};

console.log(employee.address);
console.log(employee.salary);
console.log(employee.address.province);

// Prevent Crash !!
//Dot ใช้กับ Object เท่านั้น!
//ห้ามมมมมมมมมมมมมมมมมมม ใช้กับ undefined!!!!!!!!!
//วิธีแก้ optinal chaining ==> <undefined>> ?. <key>
console.log(employee.addr);
console.log(employee.address?.village); //undefined province

const product = {
  id: 277,
  name: "Iphone",
  price: "50_000",
  //   discount: 0.05,
};
console.log(product.discount); //undefined

//In Operator
//Syntax : <key_name_string> in <obj>
// "name" in product; // => true, false
console.log("discount" in product);
console.log("name" in product);

//method hasOwnProperty
//syntax : <obj>.hasOwnProperty(<key_name>) => return boole
console.log(product.hasOwnProperty("name"));
console.log(product.hasOwnProperty("discount"));

//---------------------------------------------------

// ## 5. Breacket Notation []

//Syntax : <obj>[ <key_name_string>]
///********1. ใช้ bracket เมื่อไหร่ ชื่อkey ข้างในต้องเป็น string******** */
///********2. ถ้าไม่ใช้ string ต้องเป็นตัวแปรที่เก็บ string************* */ 
//Access key-value ผ่านชื่อตัวแปรได้
product.id;
product["id"];

console.log(product.id);
console.log(product["id"]);
console.log(product["is mobile"]);

product["name"] = "Iphone-15";
// console.log(product)

let aaaa = "name";

console.log(product.aaaa); //ชื่อkey
console.log(product[aaaa]); // ===product.aaaa
console.log(product["name"]);
