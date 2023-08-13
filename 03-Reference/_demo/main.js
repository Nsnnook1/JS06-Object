const log = console.log;
log("Learn Ref.");

//copied ny value
//copied ny Reference


//Primitive
let message = "hello";
let word = message;

console.log(message);
log(word);

message = "hi";
log(message);
log(word);


//obj
let user = {
  name: "John",
};

let employee = user;
user.name = "Jane";
console.log(user.name);
employee.name = "Joe";
console.log(user.name);
console.log(employee.name);
