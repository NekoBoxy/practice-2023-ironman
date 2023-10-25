// 問題 1: 使用三元運算子，比較兩個數字並找出最大值。
const x = 5;
const y = 3;
const ans = x > y ? "x" : "y";
console.log(`最大值是 ${ans}`);

// 問題 2: 使用三元運算子，確認給定的數字是正數、負數還是零。
const num = 5;

const res =
  num > 0 ? "正值"
    : num < 0 ? "負值"
      : "等於零";

console.log(`給的數值是 ${res}`);