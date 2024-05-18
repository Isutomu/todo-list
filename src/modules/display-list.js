import { getListName, getTasks } from "./storage-utilities.js";
import createTaskElement from "./create-task-element.js";


// Main function
export default function displayList(listId) {
    if (isFullListVisible(listId)) {
        return;
    }
    
    updateHeaderName(listId);
    displayTasks(listId);

    if(listId === '0') {
        document.querySelector('#header-list-name input').setAttribute('disabled', '');
    }
}
// ---

// Complementary functions
function isFullListVisible(listId) {
    const currentlyShownListId = document.querySelector('#list-display').dataset.listId;
    return (listId === currentlyShownListId);
}

function updateHeaderName(listId) {
    document.querySelector('#header-list-name input').setAttribute('disabled', '');
    document.querySelector('#header-list-name input').value = getListName(listId);
    document.querySelector('#header-list-name input').removeAttribute('disabled');
    document.querySelector('#list-display').dataset.listId = listId;
}

function displayTasks(listId) {
    const tasksList = document.querySelector('#tasks-list');
    tasksList.innerHTML = '';
    const tasksData = getTasks(listId);
    for (task in tasksData) {
        tasksList.appendChild(createTaskElement(task, tasksData[task].name));
    }
}
// ---