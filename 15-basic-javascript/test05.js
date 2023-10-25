// 練習 1：比較兩個數字
/* 問題：請撰寫一個程式，比較兩個數字 x 和 y，
如果它們相等，則輸出 "x 等於 y"，否則輸出 "x 不等於 y"。*/
const x = 3;
const y = 5;

if (x == y) {
  console.log("x 等於 y");
} else {
  console.log("x 不等於 y");
}

// 練習 2：判斷成績等級
/* 問題：請撰寫一個程式，根據學生的分數判斷其等級。
如果分數大於等於 90，輸出 "A"；
如果分數在 80 到 89 之間，輸出 "B"；
如果分數在 70 到 79 之間，輸出 "C"；
否則輸出 "D"。*/

const score = 79;

if (score >= 90) {
  console.log("A");
} else if (80 <= score) {
  console.log("B");
} else if (70 <= score) {
  console.log("C");
} else {
  console.log("D");
}

// 注意! 寫這樣 else if (80 <= score <= 89) JS 讀出來會是 (80 <= score) <= 89
// if (score >= 90) {
//   console.log("A");
// } else if (80 <= score && score <= 89) {
//   console.log("B");
// } else if (70 <= score && score <= 79) {
//   console.log("C");
// } else {
//   console.log("D");
// }