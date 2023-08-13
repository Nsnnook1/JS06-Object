const state1 = { username: "john", point: 100, loading: true };

const state2 = {
  ...state1, //คัดลอก state1 & แก้ไขค่า properties
  loading: false,
  point: 75,
  success: true,
};

console.log(state2);
