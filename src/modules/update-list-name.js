import { checkNameAvailability, setListNameStorage, getListName } from "./storage-utilities.js";

export default function updateListName(listId, listName) {
    if(checkNameAvailability(listName)) {
        setListNameStorage(listId, listName);
        const fullListHeader = document.querySelector('#header-list-name');
        if(fullListHeader.closest('section').dataset.listId === listId) {
            fullListHeader.textContent = listName;
        }
    } else {
        const listTabInput = document.querySelector(`#list-sidebar li[data-list-id="${listId}"] input`);
        listTabInput.setAttribute('disabled', '');
        listTabInput.value(getListName(listId));
        listTabInput.removeAttribute('disabled');
    }
};