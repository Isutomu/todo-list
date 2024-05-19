import createList from "./modules/create-list.js";
import createTask from "./modules/create-task.js";
import { disableModificationsTask } from "./modules/task-options-utilities.js";
import { updateTaskData } from "./modules/storage-utilities.js";
import displayList from "./modules/display-list.js";
import updateListName from "./modules/update-list-name.js";

import './style/reset.css';
import './style/common.css'
import './style/list-sidebar.css';
import './style/list-display.css';
import './style/task-options.css';

document.querySelector('#task-options').style.display = "none";
localStorage.clear();
if(localStorage.getItem('0')) {
    displayList('0');
} else {
    localStorage.setItem('0', JSON.stringify({
        "name": 'My day',
        "tasks":{}
    }));
    displayList('0');
}
document.querySelector('#list-sidebar li[data-list-id="0"]').addEventListener('click', (e) => {
    displayList('0');
});

const newListBtn = document.querySelector('#add-list-button');
newListBtn.addEventListener('click', () => {
    disableModificationsTask();
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
newTaskInput.addEventListener('keydown', (e) => {
    if(e.key==='Enter' && e.target.value!=='') {
        const inputField = e.target;
        const currentListId = document.querySelector('#list-display').dataset.listId;
        document.querySelector('#tasks-list').appendChild(createTask(currentListId, inputField.value));
        disableModificationsTask();
        inputField.value = '';
    }
});

const listNameDisplay = document.querySelector('#header-list-name input');
listNameDisplay.addEventListener('change', (e) => {
    const listId = e.target.closest('section').dataset.listId;
    if(listId !== '0') {
        updateListName(listId, e.target.value)
    }
});

const closeTaskOptions = document.querySelector('#close-task-options');
closeTaskOptions.addEventListener('click', () => {
    disableModificationsTask();
});

const taskNameOptions = document.querySelector('#task-options header input');
taskNameOptions.addEventListener('change', (e) => {
    const taskId = e.target.closest('section').dataset.taskId;
    const taskName = e.target.value;
    updateTaskData(taskId, 'name', taskName);
    document.querySelector(`#tasks-list li[data-task-id="${taskId}"] span`).textContent = taskName;
});
const taskDuedateOptions = document.querySelector('#duedate');
taskDuedateOptions.addEventListener('change', (e) => {
    const taskId = e.target.closest('section').dataset.taskId;
    const taskDuedate = e.target.value;
    updateTaskData(taskId, 'dueDate', taskDuedate);
});
const taskUrgentOptions = document.querySelector('#task-priority');
taskUrgentOptions.addEventListener('click', (e) => {
    const taskId = e.target.closest('section').dataset.taskId;
    e.target.classList.toggle('task-urgent');
    const taskUrgent = e.target.classList.contains('task-urgent');
    updateTaskData(taskId, 'urgent', taskUrgent);
});
const taskDescriptionOptions = document.querySelector('#task-options textarea');
taskDescriptionOptions.addEventListener('change', (e) => {
    const taskId = e.target.closest('section').dataset.taskId;
    const taskDescription = e.target.value;
    updateTaskData(taskId, 'description', taskDescription);
});