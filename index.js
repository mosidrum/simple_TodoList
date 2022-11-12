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