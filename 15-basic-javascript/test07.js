// 問題 1：基本轉換：給定一個字串陣列，請將每個字串轉換成大寫並存儲在新的陣列中。
// const strs = ["apple", "banana", "cherry"];
// const res = strs.map(function toUpper(item) {
//   return item.toUpperCase();
// });

// console.log(res); // [ 'APPLE', 'BANANA', 'CHERRY' ]

// 延伸：反轉字母大小寫
// 問題：寫一個程式，接受一個字串，將該字串的字母大小寫反轉，即大寫變小寫，小寫變大寫。
const str = "Otter Say Hi";
// 先把字串變成陣列
const arr = [];
let newArr = [];

function toArr(str) {
  for (let i = 0; i < str.length; i++) {
    let cut = str[i];
    arr.push(cut);
  }
};
toArr(str);
console.log(arr);

function reverse(arr) {
  arr.map(function (item, index) {
    let judge = item.charCodeAt();
    // 先判斷是大寫還是小寫，再進行對應的處理
    // judge 值 65-90 間=大寫
    // judge 值 97-122 間=小寫
    if (judge >= 65 && judge <= 90) {
      let str = item.toLowerCase();
      newArr.push(str);
    } else if (judge >= 97 && judge <= 122) {
      let str = item.toUpperCase();
      newArr.push(str);
    } else {
      console.log(item);
    }
  });
  newArr.splice(0, ',');
};

reverse(arr);
console.log(newArr);