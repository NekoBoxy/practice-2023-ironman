// 阿 Q 說這例子不好
//使用 Object.entries() 以及其他相關的方法，找出並印出所有成績高於等於90分的學生的姓名和成績。
const score = {
  Alice: 95,
  Bob: 88,
  Carol: 92,
  Dave: 78,
  Eve: 85
};

// 1. 先取 pair
// 2. 再取大於等於90
// 3. 回傳

let pair = Object.entries(score);

console.log(pair);

let over90 = pair.filter(function (value, index) {
  return value >= 90;
});

console.log(over90);