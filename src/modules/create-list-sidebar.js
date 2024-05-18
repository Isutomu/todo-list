import displayList from './display-list.js';
import deleteList from './delete-list.js';
import { disableModificationsTask } from './task-options-utilities.js';

// Main function
export default function createListSidebar(id, name) {
    const listElement = document.createElement('li');
    listElement.setAttribute('data-list-id', id);
    listElement.appendChild(createListInput(name));
    listElement.appendChild(createListButton());

    return listElement;
};
// ---

// Complementary functions
function createListInput(name) {
    const listName = document.createElement('span');
    listName.textContent = name;
    listName.addEventListener('click', (e) => {
        disableModificationsTask();
        displayList(e.target.closest('li').dataset.listId);
    });

    return listName;
};

function createListButton() {
    const deleteListBtn = document.createElement('button');
    deleteListBtn.textContent = 'X';
    deleteListBtn.addEventListener('click', (e) =>
        deleteList(e.target.closest('li').dataset.listId)
    );

    return deleteListBtn;
};
// ---