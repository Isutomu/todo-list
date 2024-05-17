import displayList from './display-list.js';
import deleteList from './delete-list.js';

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
    listName.setAttribute('value', name);

    listName.addEventListener('click', (e) => {
        e.target.preventDefault();
        displayList(e.target.closest('li').dataset.id);
    });
    listName.addEventListener('dblclick', (e) => e.target.focus());

    return listName;
};

function createListButton() {
    const deleteListBtn = document.createElement('button');
    deleteListBtn.textContent = 'X';
    deleteListBtn.addEventListener('click', (e) =>
        deleteList(e.target.closest('li').dataset.id)
    );

    return deleteListBtn;
};
// ---