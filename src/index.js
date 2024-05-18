import createList from "./modules/create-list.js";
import createTask from "./modules/create-task.js";
import { disableModificationsTask } from "./modules/task-options-utilities.js";
import { updateTaskData } from "./modules/storage-utilities.js";
import displayList from "./modules/display-list.js";


if(localStorage.getItem('0')) {
    displayList('0');
} else {
    localStorage.setItem('0', JSON.stringify({
        "name": 'My day',
        "tasks":{}
    }));
}


const newListBtn = document.querySelector('#add-list-button');
newListBtn.addEventListener('click', () => {
    document.querySelector('#lists-list').appendChild(createList());
});

const newTaskBtn = document.querySelector("#new-task-entry button");
newTaskBtn.addEventListener('click', () => {
    const inputField = document.querySelector('#new-task-entry input');
    if(inputField.value!=='') {
        const currentListId = document.querySelector('#list-display').dataset.listId;
        document.querySelector('#tasks-list').appendChild(createTask(currentListId, inputField.value));
        disableModificationsTask();
        inputField.value = '';
    }
});
const newTaskInput = document.querySelector("#new-task-entry input");
newTaskInput.addEventListener('keyword', (e) => {
    if(e.key==='Enter' && e.target.value!=='') {
        const inputField = e.target;
        const currentListId = document.querySelector('#list-display').dataset.listId;
        document.querySelector('#tasks-list').appendChild(createTask(currentListId, inputField.value));
        disableModificationsTask();
        inputField.value = '';
    }
});

const closeTaskOptions = document.querySelector('#close-tasks-options');
closeTaskOptions.addEventListener('click', () => {
    disableModificationsTask();
});

const taskNameOptions = document.querySelector('#task-options header input');
taskNameOptions.addEventListener('change', () => {
    const taskId = e.target.closest('section').dataset.taskId;
    const taskName = e.target.value;
    updateTaskData(taskId, 'name', taskName);
});
const taskDuedateOptions = document.querySelector('#duedate');
taskDuedateOptions.addEventListener('change', () => {
    const taskId = e.target.closest('section').dataset.taskId;
    const taskDuedate = e.target.value;
    updateTaskData(taskId, 'duedate', taskDuedate);
});
const taskUrgentOptions = document.querySelector('#task-priority');
taskUrgentOptions.addEventListener('click', () => {
    const taskId = e.target.closest('section').dataset.taskId;
    e.target.classList.toggle('urgent');
    const taskUrgent = e.target.classList.contains('urgent');
    updateTaskData(taskId, 'urgent', taskUrgent);
});
const taskDescriptionOptions = document.querySelector('#task-options textarea');
taskDescriptionOptions.addEventListener('change', () => {
    const taskId = e.target.closest('section').dataset.taskId;
    const taskDescription = e.target.value;
    updateTaskData(taskId, 'description', taskDescription);
});