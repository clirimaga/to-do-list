const addBtn = document.querySelector("#addbtn");
const tasks = document.querySelector("#tasks");
const text = document.querySelector("#text");
const mainText = document.querySelector("#maintext");
const clear = document.querySelector(".clear");
const clearList = document.querySelector("#tasks");

const localStorageItems = localStorage.getItem("items");
const items = localStorageItems ? JSON.parse(localStorageItems) : [];

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

    const input1 = document.createElement("textarea");
    input1.classList.add("bg-warning", "fs-5", "rounded");
    input1.setAttribute("id", "text");
    input1.setAttribute("rows", 1);
    input1.setAttribute("type", "text");
    input1.setAttribute("readonly", "readonly");
    input1.value = mainText.value;
    content.appendChild(input1);

    ////localStorage
    items.push(mainText.value);
    localStorage.setItem("items", JSON.stringify(items));

    const actions = document.createElement("div");
    tasksContainer.appendChild(actions);
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.classList.add("ms-2", "form-check-input");
    checkbox.addEventListener("change", (e) => {
      const checked = e.target.checked;
      checked
        ? input1.classList.add("checked")
        : input1.classList.remove("checked");
    });

    actions.appendChild(checkbox);

    const btnEdit = document.createElement("button");
    btnEdit.classList.add(
      "btn",
      "active",
      "btn-sm",
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
      if (btnEdit.innerHTML === "Edit") {
        input1.removeAttribute("readonly");
        btnEdit.innerHTML = "Save";
      } else {
        input1.setAttribute("readonly", "readonly");
        btnEdit.innerHTML = "Edit";
      }
    });

    const btnDelete = document.createElement("button");
    btnDelete.classList.add(
      "btn",
      "active",
      "btn-sm",
      "btn-danger",
      "rounded-pill",
      "ms-2"
    );
    btnDelete.setAttribute("id", "edit");
    btnDelete.innerHTML = "Delete";
    btnDelete.addEventListener("click", () => tasksContainer.remove());

    actions.appendChild(btnDelete);

    mainText.value = "";
  } else {
    alert("Please add a Todo 🤓");
  }
};

addBtn.addEventListener("click", createList);

mainText.addEventListener("keyup", (e) => {
  if (e.keyCode === 13 && mainText.value !== "") {
    createList();
  }
});

//localStorage
const displayItems = () => {
  items.forEach((el) => {
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

    const input1 = document.createElement("textarea");
    input1.classList.add("bg-warning", "fs-5", "rounded");
    input1.setAttribute("id", "text");
    input1.setAttribute("type", "text");
    input1.setAttribute("rows", 1);
    input1.setAttribute("readonly", "readonly");
    input1.value = el;
    content.appendChild(input1);

    const actions = document.createElement("div");
    tasksContainer.appendChild(actions);
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.classList.add("ms-2", "form-check-input");
    checkbox.addEventListener("change", (e) => {
      const checked = e.target.checked;
      checked
        ? input1.classList.add("checked")
        : input1.classList.remove("checked");
    });

    actions.appendChild(checkbox);

    const btnEdit = document.createElement("button");
    btnEdit.classList.add(
      "btn",
      "active",
      "btn-sm",
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
      if (btnEdit.innerHTML === "Edit") {
        input1.removeAttribute("readonly");
        btnEdit.innerHTML = "Save";
      } else {
        input1.setAttribute("readonly", "readonly");
        btnEdit.innerHTML = "Edit";
      }
    });

    const btnDelete = document.createElement("button");
    btnDelete.classList.add(
      "btn",
      "active",
      "btn-sm",
      "btn-danger",
      "rounded-pill",
      "ms-2"
    );
    btnDelete.setAttribute("id", "edit");
    btnDelete.innerHTML = "Delete";
    btnDelete.addEventListener("click", () => tasksContainer.remove());

    actions.appendChild(btnDelete);
  });
};

clear.addEventListener("click", () => {
  localStorage.removeItem("items");
  clearList.innerHTML = "";
});

displayItems();
