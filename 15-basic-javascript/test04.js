// number 1
// let num = 1;
// let newNum;
// newNum = num;
// num = 3;

// console.log(num === newNum); // f
// console.log(newNum); // 1

// object 1
// let user = {
//   name: "amy",
//   habbit: "eat"
// };

// let newUser;
// newUser = user;
// user = { animal: "otter" };

// console.log(newUser); // name: 'amy', habbit: 'eat'
// console.log(user); // animal: 'otter'

// object 2
// let a = { animal: "otter" };
// let b = { animal: "otter" };

// console.log(a === b); // false

// let aStr = JSON.stringify(a);
// let bStr = JSON.stringify(b);
// console.log(aStr === bStr); // true

// object 3
// let user = { name: "amy" };

// function reName(obj) {
//   obj = { eat: "apple" };
//   console.log(obj);
// }

// reName(user); // eat: 'apple'
// console.log(user); // name: 'amy'

// 解決辦法 1. Object.assign()
let user = {
  name: "amy",
};

let newUser;
newUser = JSON.parse(JSON.stringify(user));
user.name = "otter";

console.log(newUser === user); // false
console.log(newUser.name); // amy
console.log(user.name); // otter
