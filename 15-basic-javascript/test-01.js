// foreach 中，使用一般函式與箭頭函式的 this 指向
let arr = [1, 2, 3];

arr.forEach((item) => {
  console.log("item1", item);
  console.log("this1", this); // {}, 空物件?

  return item;
});

arr.forEach(function (item) {
  console.log("item2", item);
  console.log("this2", this); // 全域?
  return item;
});

// let arr2 = [1, 3, 5, 7];

// arr2.forEach(function (item, index, array) {
//   console.log(item, index, array);
//   return item;
// });

// const callback = (item, index) => {
//   if (index % 2 === 0) return; // 若 index 除以 2 的餘數完全等於 0 -> 跳出迴圈
//   console.log(item, index); // 不等於零的才會顯示
// }
// [0, 1, 2, 3, 4, 5, 6, 7].forEach(callback)

let arr2 = [1, 3, 5, 7, 9, 10, 11];
let newArr = [];

arr2.forEach(function (element) {
  if (element % 5 === 0) {
    return
  };
  newArr.push(element);
})

console.log(newArr); // 1, 3, 7, 9, 11 