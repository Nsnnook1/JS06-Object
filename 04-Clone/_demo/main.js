// const log = console.log;
// log("Object Clone");
// let todo = {
//   task: "Do Hw",
//   complete: false,
//   due_date: "13-08-2023",
// };

// //Clone
// const newTodo = {};

// //1. เอาต้นแบบม loop แล้ว asing  ทละ key:value ให้ obj ใหม่
// for (let key in todo) {
//   //assing ทีละ key:value ให้  newTodo
//   newTodo[key] = todo[key];
//   //newTodo[''task] = todo[''task] => 'Do HW'
//   //newTodo[''complete] = todo[''complete] => 'false'
//   //newTodo[''due_date] = todo[''due_date] => '13-08-2023'
// }
// console.log(newTodo);

// newTodo.complete = true;
// console.log(newTodo.complete);
// console.log(todo.complete);

//2. Obj.assing

const newTodo = {};

//Merge direction : Right --> Left
Object.assign(newTodo.todo);

log(newTodo);
