const multiplyNumeric = (object, num) => {
  for (let key in object) {
    let value = object[key];
    if (typeof value === "number") {
      //   object[(key = value * num)];
      object[key] *= num;

      //menu['widht'] = 200*3
      //menu['height'] = 200*3
    }
  }
};

// before
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

multiplyNumeric(menu, 10);
console.log(menu);

let menuObj = {
  width: 200,
};

menu.width = menu.width * 2;
menu["width"] = menu["width"] * 2;

//ในแต่ละรอบของ Loop fro..in
let key = "width";
menuObj[key] = menuObj[key] * 2;
