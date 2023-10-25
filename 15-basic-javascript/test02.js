// // 1. 求每個名字的長度，用陣列表示
// const names = ['Alice', 'Bob', 'Charlie', 'David'];

// let length = names.map(function (name) {
//   return name.length;
// });

// console.log(length);

// // 2. 找出年紀大於 18 者。以陣列表示
// const ages = [15, 22, 18, 30, 16, 25];

// let over18 = ages.filter(function (age) {
//   return age >= 18;
// });

// console.log(over18);

// let over = ages.filter(function (age) {
//   if (age >= 18) {
//     return;
//   }
//   return age;
// });

// console.log(over);

// let over2 = ages.filter(function (age) {
//   if (age >= 18) {
//     return age;
//   }
// });

// console.log(over2);

// // 阿 Q 修改版：這類回傳 true/false 的內建方法，
// let over3 = ages.filter(function (age) {
//   let isChildren = false;
//   if (age < 18) {
//     isChildren = true;
//   } else {
//     isChildren = false;
//   }
//   return isChildren;
// });

// console.log(over3);


// // 3. 計算陣列中數字的總和
// const numbers = [1, 2, 3, 4, 5];

// let sum = numbers.reduce(function (accumulator, currentValue, currentIndex, array) {
//   console.log("accumulator", accumulator);
//   console.log("currentValue", currentValue);
//   return accumulator + currentValue;
// }, 0);

// console.log(sum); // 15

// let sum2 = numbers.reduce(function (accumulator, currentValue, currentIndex, array) {
//   console.log("accumulator", accumulator);
//   console.log("currentValue", currentValue);
//   return accumulator + currentValue;
// }); // 15

// console.log(sum2);

// 串聯這兩個陣列
// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];

// let newArr = array1.concat(array2);

// console.log(newArr); // 1, 2, 3, 4, 5, 6 

// // 找到陣列中的第一個偶數元素
// const arr = [1, 2, 3, 4, 5, 6];
// let ans = arr.find(function (item) {
//   return item % 2 === 0;
// });

// console.log(ans); // 2

// 找到陣列中的第一個不為空的字符串
// const arr = ["", "Hello", "World"];

// let ans = arr.find(function (item) {
//   return item != "";
// });

// console.log(ans); // Hello

// 找到陣列中第一個偶數元素的索引
const arr = [1, 2, 3, 4, 5, 6];

let index = arr.findIndex(function (item) {
  return item % 2 === 0;
});

console.log(index); // 1