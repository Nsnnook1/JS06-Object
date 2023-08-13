//Obj => BOOL

function isEmptyObj(obj) {
  let isEmpnty = true;
  for (let key in obj) {
    ifEmpty = false;
  }
  return isEmpnty;
}
console.log(isEmptyObj({age:12}))
