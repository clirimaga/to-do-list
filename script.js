const addBtn = document.querySelector('#addbtn');
const tasks = document.querySelector('#tasks');
const text = document.querySelector('#text');
const mainText = document.querySelector('#maintext');


const createList = () => {
    const tasksContainer = document.createElement('div');
    tasksContainer.classList.add('col','d-flex','justify-content-center',"mt-3");
    tasksContainer.setAttribute('id','tasksContainer');
    tasks.appendChild(tasksContainer);
    
    const content = document.createElement('div');
    tasksContainer.appendChild(content);
    
    const input1 = document.createElement('input');
    input1.classList.add("bg-warning", "rounded-pill");
    input1.setAttribute('id', 'text');
    input1.setAttribute('type','text');
    input1.setAttribute('readonly','readonly');
    input1.value = mainText.value;
    
    content.appendChild(input1);
    
    
    const actions = document.createElement('div');
    tasksContainer.appendChild(actions);
    
    const btnEdit = document.createElement('button');
    btnEdit.classList.add("bg-dark", "text-info" ,"rounded-pill", "ms-2","me-2");
    btnEdit.setAttribute('id', 'edit');
    btnEdit.innerHTML= 'Edit';
    actions.appendChild(btnEdit);
    
    const btnDelete = document.createElement('button');
    btnDelete.classList.add("bg-dark", "text-danger" ,"rounded-pill");
    btnDelete.setAttribute('id', 'edit');
    btnDelete.innerHTML= 'Delete';
    btnDelete.addEventListener('click', () => tasksContainer.remove());
    
    actions.appendChild(btnDelete);
    
    
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type','checkbox');
    checkbox.classList.add('ms-2');
    
    actions.appendChild(checkbox);
};
// John was here

addBtn.addEventListener('click', createList);