import { getListName, getTasks } from "./create-list-storage.js";


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
    const currentlyShownListId = document.querySelector('#list-display').dataset.id;
    return (listId === currentlyShownListId);
}

function updateHeaderName(listId) {
    document.querySelector('#list-display').dataset.id = '';
    document.querySelector('#header-list-name').value = getListName(listId);
    document.querySelector('#list-display').dataset.id = listId;
}

function displayTasks(listId) {
    const tasksData = getTasks(listId);
    for (task of tasksData) {
        createTaskElement(task);
    }
}
// ---