// const div = document.querySelector(".box");
// console.log(div);

// const li = document.querySelectorAll("li");
// console.log(li);
// const list = document.querySelector(".list");
// const newDiv = document.createElement('div');
// newDiv.className = 'test';
// newDiv.textContent = '這是做出來的 div';
// list.appendChild(newDiv);



// const parent = document.getElementById('parent');
// const childNodes = parent.childNodes;

// for (let i = 0; i < childNodes.length; i++) {
//   if (childNodes[i].nodeType === Node.ELEMENT_NODE) {
//     console.log(childNodes[i].textContent);
//   }
// }

// 找到要掛的父元素
const list = document.querySelector(".list");
const ul = list.querySelector("ul");
// 建立一個新元素
const newLi = document.createElement('li');
// 設置元素的屬性和內容
newLi.textContent = '這是做出來的 li';
// 將元素掛到父元素的末端
ul.appendChild(newLi);

// 使用 innerHTML 來添加元素
const parent = document.getElementById("parent");
console.log(parent.innerHTML); // 抓取包含 HTML 與內容的元素字串
parent.innerHTML += "<p> Paragraph 4</p>\n";

