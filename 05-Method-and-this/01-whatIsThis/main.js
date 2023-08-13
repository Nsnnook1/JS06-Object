let user = {
  name: "John",
  sayHi: function () {
    console.log(this.name);
  },
};

user.sayHi(); // *John :this เป็น Obj, user มี property name เป็น "John"
