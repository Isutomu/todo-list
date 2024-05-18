import displayList from './display-list.js';
import deleteList from './delete-list.js';
import updateListName from './update-list-name.js';

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
    const listName = document.createElement('input');
    listName.value = name;

    listName.addEventListener('click', (e) => {
        e.target.preventDefault();
        displayList(e.target.closest('li').dataset.listId);
    });
    listName.addEventListener('dblclick', (e) => e.target.focus());
    listName.addEventListener('change', (e) => 
        updateListName(e.target.closest('li').dataset.listId, e.target.value)
    );

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