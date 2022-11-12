const inputItem = document.getElementsByClassName('inputval')[0]
const addTask = document.getElementsByClassName('btn')[0]


addTask.addEventListener('click', () => {

    if (inputItem.value.trim() != 0) {
        let localItems = JSON.parse(localStorage.getItem('localItem'))
        if (localItems === null) {
            taskList = []
        } else {
            taskList = localItems;
        }
        taskList.push(inputItem.value)
        localStorage.setItem('localItem', JSON.stringify(taskList))
    }

    showList();
})

function showList() {

    let outPut = '';
    let taskListShow = document.querySelector('.todolistitems')
    let localItems = JSON.parse(localStorage.getItem('localItem'))
    if (localItems === null) {
        taskList = []
    } else {
        taskList = localItems;
    }

    taskList.forEach((data, index) => {
        outPut += `
        <div class="todolist">
        <p class="ptext">${data}</p>
        <button class="deletetask" onclick="deleteItem(${index})">x</button>
    </div>
        `
    });
    taskListShow.innerHTML = outPut;
    inputItem.value = ""
}
showList()

function deleteItem(index) {
    let localItems = JSON.parse(localStorage.getItem('localItem'))
    taskList.splice(index, 1)
    localStorage.setItem('localItem', JSON.stringify(taskList))
    showList()
}

function clearTask() {
    localStorage.clear()
    showList()
}







// // This is the array that will hold the todo list items
// let todoItems = [];

// // This function will create a new todo object based on the
// // text that was entered in the text input, and push it into
// // the `todoItems` array
// function addTodo(text) {
//   const todo = {
//     text,
//     checked: false,
//     id: Date.now(),
//   };

//   todoItems.push(todo);
//   console.log(todoItems);
// }

// // Select the form element
// const form = document.querySelector('.js-form');
// // Add a submit event listener
// form.addEventListener('submit', event => {
//   // prevent page refresh on form submission
//   event.preventDefault();
//   // select the text input
//   const input = document.querySelector('.js-todo-input');

//   // Get the value of the input and remove whitespace
//   const text = input.value.trim();
//   if (text !== '') {
//     addTodo(text);
//     input.value = '';
//     input.focus();
//   }
// });