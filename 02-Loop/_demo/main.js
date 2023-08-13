const user1 = {
  firstName: "Codecamp",
  lastName: "Software park",
  age: 15,
  //   key: "JaAEEE",
};

//For IN : Loop through Object
//for (let <key_variable> in <obj>){}

//a(key_variable) คือ ตัวแปร ทุกครั้งที่ loop ค่าจะเปลี่ยน จนครบ obj.
for (let a in user) {
  console.log(a); //dynamics assign by JS
  //1st :  let key 1 = 'firstName'
  //2nd : let key 2 = 'lastName'
  //3rd : let key 3 = 'age

  console.log(user[a]); // need to access by bracket (computed key)
}
//1st :  user[key_variable]  = user['firstName'] ==>
//2nd : user[key_variable]  = user['lastName']
//3rd : user[key_variable]  = user['age']

const user = {
  name: "John",
  age: "33",
  isMarried: false,
  address: {
    village: "Rama3",
    province: "BKK",
  },
};

// GET Data
log(user.name);
log(user["name"]);

let a = "name";
log(user.a); //user["name"]; => john
log(user[a]); // วิ่งไปห่ key a =>  undefined

//Note : เมื่อชื่อ key ถูกเก็บไว้ในตัวแปร ต้อง acces ผ่าน[]

// delete user.isMarried;
log(user);
// delete user["age"];
log(user);
let b = "address";
// delete user[b];
log(user);

let x = 5;
x = x + 2;

user.age = user.age + 1;
user.age += 1;
log(user.village);
//container = value +1

user["age"] = user["age"] + 5;
log(user.age);
user["age"] += 5;
log(user.age);
user["age"]++;
log(user.age);

//use key variable
let key = "age";

//computed key
user[key] = user[key] + 5;
log(user.age);
//user['age'] = user['age'] + 5

user[key] += 1;
user[key]++;
log(user.key);
log(user.age);

//Critical Point
// bracket notation ใช้กับคัย์ที่เป็น string หรือต้องใช่ตัแปรที่เก็บ  string
// for( <key> in <obj>) LS  จะ Auto reassign key ใหม่ทุกรอบ (string)
//obj[key] = obj[key  + new =>container = value + new
