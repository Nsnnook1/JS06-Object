const employees = {
  john: {
    salary: 1000,
    address: { district: "Ratchathewi", province: "Bangkok" },
  },
  peter: {
    salary: 1500,
    address: { district: "Pathumwan", province: "Bangkok" },
  },
  mike: {
    salary: 800,
    address: { district: "Pakkret", province: "Nonthaburi" },
  },
  sarah: {
    salary: 2200,
    address: { district: "Sriraja", province: "Chonburi" },
  },
};

const employeeName = prompt("Enter employee's name:");
const employee = employees[employeeName];

if (employee) {
  const { salary, address } = employee;
  const { district, province } = address;
  console.log(`Name: ${employeeName}, salary: ${salary}, address: ${district}, ${province}`);
} else {
  console.log("Not Found");
}