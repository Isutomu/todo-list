import createListStorage from "./modules/create-list-storage.js";

const newListBtn = document.querySelector('#add-list');
newListBtn.addEventListener('click', () => {
    document.querySelector('#list-sidebar ul').appendChild(
        createListSidebar(...createListStorage())
    );
});