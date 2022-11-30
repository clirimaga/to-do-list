const addBtn = document.querySelector("#addbtn");
const tasks = document.querySelector("#tasks");
const text = document.querySelector("#text");
const mainText = document.querySelector("#maintext");

const createList = () => {
  if (mainText.value !== "") {
    const tasksContainer = document.createElement("div");
    tasksContainer.classList.add(
      "col",
      "d-flex",
      "justify-content-center",
      "mt-3"
    );
    tasksContainer.setAttribute("id", "tasksContainer");
    tasks.appendChild(tasksContainer);

    const content = document.createElement("div");
    tasksContainer.appendChild(content);

    const input1 = document.createElement("input");
    input1.classList.add("bg-warning", "rounded-pill", "fs-3");
    input1.setAttribute("id", "text");
    input1.setAttribute("type", "text");
    input1.setAttribute("readonly", "readonly");
    input1.value = mainText.value;
    mainText.value = "";
    content.appendChild(input1);

    const actions = document.createElement("div");
    tasksContainer.appendChild(actions);

    const btnEdit = document.createElement("button");
    btnEdit.classList.add(
      "bg-dark",
      "text-info",
      "rounded-pill",
      "ms-2",
      "me-2"
    );
    btnEdit.setAttribute("id", "edit");
    btnEdit.innerHTML = "Edit";
    actions.appendChild(btnEdit);
    btnEdit.addEventListener("click", () => {
      // this also works, but the btn.innerText won't change
      //input1.toggleAttribute("readonly");

      if (btnEdit.innerHTML === "Edit") {
        input1.removeAttribute("readonly");
        btnEdit.innerHTML = "Save";
      } else {
        input1.setAttribute("readonly", "readonly");
        btnEdit.innerHTML = "Edit";
      }
    });

    const btnDelete = document.createElement("button");
    btnDelete.classList.add("bg-dark", "text-danger", "rounded-pill");
    btnDelete.setAttribute("id", "edit");
    btnDelete.innerHTML = "Delete";
    btnDelete.addEventListener("click", () => tasksContainer.remove());

    actions.appendChild(btnDelete);

    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.classList.add("ms-2");
    checkbox.addEventListener("change", (e) => {
      const checked = e.target.checked;
      //console.log(checked);
      checked
        ? input1.classList.add("checked")
        : input1.classList.remove("checked");
    });

    actions.appendChild(checkbox);
  } else {
    alert("Please add a Todo 🤓");
  }
};

addBtn.addEventListener("click", createList);
mainText.addEventListener("keyup", (e) => {
  //console.log(e.keyCode);
  if (e.keyCode === 13 && mainText.value !== "") {
    createList();
  }
});
