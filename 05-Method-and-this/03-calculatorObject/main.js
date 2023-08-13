const calulate = {
  read() {
    this.x = +prompt("Enter num1");
    this.y = +prompt("Enter num2");
  },
  sum: function () {
    return this.x + this.y;
  },
  mul: function () {
    return this.x * this.y;
  },
};

calulate.read();
alert(calulate.sum());
alert(calulate.mul());