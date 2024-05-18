import { getListName, getTasks } from "./storage-utilities.js";
import createTaskElement from "./create-task-element.js";


// Main function
export default function displayList(listId) {
    if (isFullListVisible(listId)) {
        return;
    }

    updateHeaderName(listId);
    displayTasks(listId);
}
// ---

// Complementary functions
function isFullListVisible(listId) {
    const currentlyShownListId = document.querySelector('#list-display').dataset.listId;
    return (listId === currentlyShownListId);
}

function updateHeaderName(listId) {
    document.querySelector('#header-list-name').textContent = getListName(listId);
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