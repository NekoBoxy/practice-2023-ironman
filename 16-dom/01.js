// const body = document.querySelector("body");
// const btn = document.querySelector("#btn");

// body.addEventListener("click", () => {
//   console.log("body");
// });

// btn.addEventListener("click", () => {
//   console.log("btn");
// });

// btn.addEventListener("click", () => {
//   console.log("btn capture");
// }, { capture: true });

// body.addEventListener("click", () => {
//   console.log("body capture");
// }, { capture: true });

// addEventListener 基本使用
// Q1. 按下按鈕在控制台出現一段話
// const btn = document.querySelector("#btn");
// btn.addEventListener("click", function () {
//   console.log("被點惹>///<");
// });

// event.target 的操作
// Q. 按下 btn 可改變 p 的內容
// const buttons = document.querySelectorAll('button');
// const output = document.getElementById('output');

// function handleButtonClick(event) {
//   let content = event.target.textContent;
//   output.textContent = `"${content}" is clicked!`;
// }

// buttons.forEach(button => {
//   button.addEventListener('click', handleButtonClick);
// });

// Q. event.target.value 取值
// const input = document.getElementById('input');

// input.addEventListener('input', function (e) {
//   const content = e.target.value;
//   console.log('Input value:', content);
// });

// Q. event.target.style 更改 css style
// const colorBox = document.querySelector('.color-box');

// function changeColor(event) {
//   const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
//   event.target.style.backgroundColor = randomColor;
// }

// colorBox.addEventListener('click', changeColor);

// Q. event.target.files 的實作
const input = document.getElementById('fileInput');
const output = document.getElementById('output');

input.addEventListener('change', function (e) {
  const files = e.target.files;

  if (files.length > 0) {
    const file = files[0];
    output.textContent = `文件名稱：${file.name}, 文件大小：${file.size} 位元組`;
  } else {
    output.textContent = '沒有選擇文件。';
  }
});