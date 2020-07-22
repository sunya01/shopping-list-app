"use strict";

/*
기능
1. input창에 사용자가 값을 입력하고
2. enter키나 add btn를 누르면 값을 전달 
3. 전달받은 값을 list items 창에 추가
4. 빈 값을 입력하면 list items 창에 추가하지 않음
5. delete btn을 누르면 item을 삭제
6. clear btn을 누르면 리스트창 전체 삭제
7. undo btn을 누르면 리스트창 복구
*/

const listItems = document.querySelector(".list__items");
const input = document.querySelector(".list__input");
const addBtn = document.querySelector(".item__add--btn");
const clearBtn = document.querySelector(".list__clear--btn");
const undoBtn = document.querySelector(".list__undo--btn");

function onAdd() {
  const text = input.value;
  if (text == "") {
    input.focus();
    return;
  }

  const itemName = document.createElement("span");
  itemName.setAttribute("class", "item__name");
  itemName.textContent = text;

  const backSpace = document.createElement("i");
  backSpace.setAttribute("class", "fas fa-backspace");

  const deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("class", "item__delete--btn");
  deleteBtn.appendChild(backSpace);
  deleteBtn.addEventListener("click", () => {
    listItems.removeChild(itemBox);
  });

  const itemBox = document.createElement("li");
  itemBox.setAttribute("class", "item__box");
  itemBox.appendChild(itemName);
  itemBox.appendChild(deleteBtn);

  input.value = "";
  input.focus();

  listItems.appendChild(itemBox);

  itemBox.scrollIntoView({ block: "end", behavior: "smooth" });
}

addBtn.addEventListener("click", onAdd);

input.addEventListener("keyup", (e) => {
  if (e.keyCode == 13) {
    onAdd();
  }
});

let tempItems = new Array();

clearBtn.addEventListener("click", () => {
  let clearItems = document.querySelectorAll(".item__box");

  for (let i = 0; i < clearItems.length; i++) {
    tempItems[i] = clearItems[i];
  }

  clearItems.forEach((cItem) => {
    listItems.removeChild(cItem);
  });
});

undoBtn.addEventListener("click", () => {
  tempItems.forEach((tItem) => {
    listItems.appendChild(tItem);
  });
});
