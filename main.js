//  HTML element to variable
const addToDoButton = document.getElementById("addToDo");
const toDoContainer = document.getElementById("toDoContainer");
const inputField = document.getElementById("inputField");

// Variable with EventListener
addToDoButton.addEventListener("click", () => {
  //when "ADD" clicked create a <p></p>
  const paragraph = document.createElement("p");

  // add style on this <p> (I think just skip this styling thing )
  // paragraph.classList.add("paragraph-styling");

  //inner what we input into this <p>
  paragraph.innerText = inputField.value;
  //put the new item into list
  toDoContainer.appendChild(paragraph);
  toDoContainer.appendChild(b);

  // clean input text
  inputField.value = "";

  // click on item then add strik mark for item text
  paragraph.addEventListener("click", () => {
    paragraph.style.textDecoration = "line-through";
  });

  // double click to delete item
  paragraph.addEventListener("dblclick", () => {
    toDoContainer.removeChild(paragraph);
  });
});
// 要動態創建按鈕，可以使用js的document.createElement()方法，要為按鈕添加onclick事件，可以使用js的setAttribute方法
