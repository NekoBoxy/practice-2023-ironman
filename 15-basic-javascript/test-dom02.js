// Q. 使用 getAttribute() 從元素中獲取屬性值
// const elA = document.querySelector('a');
// const elAHref = elA.getAttribute("href");
// console.log(elAHref);

// Q. 使用 setAttribute() 更改元素的屬性值
// const elA = document.querySelector('a');
// elA.setAttribute("href", "https://www.google.com");

// Q. 使用 data-* 屬性存放與使用自定義資料
// const targetDiv = document.querySelector('#user');
// targetDiv.setAttribute("data-user-name", "JohnDoe");
// targetDiv.setAttribute("user-gender", "otter");
// const userName = targetDiv.getAttribute("data-user-name");
// const userId = targetDiv.getAttribute("data-user-id");

// 使用者名稱：JohnDoe；使用者ID：123
// console.log(`使用者名稱：${userName}；使用者ID：${userId}`);

// Q. dataset 的使用
// const userGender = targetDiv.dataset;
// console.log(userGender);
/*
{
  "userId": "123",
  "userName": "JohnDoe"
}
*/

// innerHTML 的使用
// Q1
// function updateContent() {
//   const myDiv = document.getElementById('myDiv');
//   if (myDiv.innerHTML == '原始內容') {
//     myDiv.innerHTML = '新的內容';
//   } else {
//     myDiv.innerHTML = '原始內容';
//   }
// };

// Q2
// function addListItem() {
//   const myList = document.getElementById('myList');
//   const listItem = document.createElement('li');
//   listItem.innerHTML = '新的li';
//   myList.appendChild(listItem);
// };

// innerHTML 的使用
// Q1
// function updateText() {
//   const myDiv = document.getElementById('innerTextDiv');
//   myDiv.innerText = '文字內容被更新惹';
// };


// innerHTML 的使用
// Q1
function updateDiv() {
  const content = document.getElementById('textContentDiv');
  content.textContent = '新的內容';
};
