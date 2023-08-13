let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

function isEmptyObj(obj) {
  let isEmpty = true; //empty = ว่าง
  for (let key in obj) {
    isEmpty = false;
  }
  return isEmpty;
}

function CalSalalaries(object) {
  //1 Validate => แยก service.
  if (isEmptyObj(object)) return 0;
  // 2. calculate
  let sum = 0;
  for (let key in object) {
    // console.log(object[key]);
    sum += object[key];
  }
  return sum;
}

let totle = CalSalalaries(salaries);
console.log(totle);
