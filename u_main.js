window.addEventListener("load", () => {
  // FORM for handle add
  const form = document.querySelector("#new-task-form");
  const input = document.querySelector("#new-task-input");
  const list_el = document.querySelector("#tasks");

  form.addEventListener("submit", (e) => {
    // event.preventDefault for stop submit
    e.preventDefault();
    //use variable task to take input text
    const task = input.value;

    // Div tag and css
    const task_el = document.createElement("div");
    task_el.classList.add("task");
    //替div加上task class
    // https://www.runoob.com/jsref/prop-element-classlist.html

    // task內容
    const task_content_el = document.createElement("div");
    task_content_el.classList.add("content");
    // 增加到文件
    task_el.appendChild(task_content_el);

    const task_input_el = document.createElement("input");
    task_input_el.classList.add("text");
    task_input_el.type = "text";
    task_input_el.value = task;
    // setAttribute 修改或增加標籤屬性 第一個參數是你要修改的屬性名稱，第二個是要改成的內容
    //after added become readonly 
    task_input_el.setAttribute("readonly", "readonly");
    //加進 to do list 中
    task_content_el.appendChild(task_input_el);
    
    //這裡應該就是編輯按鈕
    const task_actions_el = document.createElement("div");
    task_actions_el.classList.add("actions");

    Edit button 
    const task_edit_el = document.createElement("button");
    task_edit_el.classList.add("edit");
    task_edit_el.innerText = "Edit";

    const task_delete_el = document.createElement("button");
    task_delete_el.classList.add("delete");
    task_delete_el.innerText = "Delete";

    task_actions_el.appendChild(task_edit_el);
    task_actions_el.appendChild(task_delete_el);

    task_el.appendChild(task_actions_el);

    list_el.appendChild(task_el);

    input.value = "";

    task_edit_el.addEventListener("click", (e) => {
      if (task_edit_el.innerText.toLowerCase() == "edit") {
        task_edit_el.innerText = "Save";
        task_input_el.removeAttribute("readonly");
        task_input_el.focus();
      } else {
        task_edit_el.innerText = "Edit";
        task_input_el.setAttribute("readonly", "readonly");
      }
    });

    task_delete_el.addEventListener("click", (e) => {
      list_el.removeChild(task_el);
    });
  });
});
