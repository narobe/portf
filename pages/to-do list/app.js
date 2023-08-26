//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const todov = document.querySelector('.todo-container');
const filterOption = document.querySelector('.filter-todo');

//EventListeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

//Functions
function addTodo(event) {
    event.preventDefault()

    const todoDiv = document.createElement("div");
    todoDiv.classList.add('todo');
    todoList.appendChild(todoDiv)

    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    const completeButton = document.createElement("button");
    completeButton.innerText = 'C';
    completeButton.classList.add('complete-btn');
    todoDiv.appendChild(completeButton);

    const trashButton = document.createElement("button");
    trashButton.innerText = 'Del';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    todoInput.value = "";

}

function deleteCheck(e) {
    //console.log(e.target)

    //Delete Item
    const item = e.target;
    const pp = item.parentElement;

    if (item.classList[0] === 'trash-btn') {
        pp.classList.add("fall")
        pp.addEventListener('transitionend', () => {
            pp.remove()
        })
    }

    //Check Mark
    if (item.classList[0] === 'complete-btn') {
        pp.classList.toggle("completed")
    }
}
function filterTodo(e) {
    // console.log(e.target.value)
    const tods = todoList.childNodes;
    tods.forEach((todo) => {
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;

            case "completed":
                if (todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none'
                }
                break;
            case "uncompleted":
                if (!todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                }
                else {
                    todo.style.display = 'none'
                }
                break;
        }
    })

}