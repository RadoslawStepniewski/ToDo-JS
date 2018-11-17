const form = document.querySelector('form');
const ul = document.querySelector('ul')
const spn = document.querySelector(' h1 span')
const list = document.querySelectorAll('li.task')
const input = document.querySelector('input')


const addTask = (e) => {
    e.preventDefault()

    const titleTasks = input.value
    if (titleTasks !== "") {
        const task = document.createElement('li');
        task.className = 'task'
        task.innerHTML = titleTasks + "<button>Usuń</button>"
        ul.appendChild(task)
    }
    input.value = ""
}


form.addEventListener('submit', addTask)