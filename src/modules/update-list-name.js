import { checkNameAvailability, setListNameStorage, getListName } from "./create-list-storage.js";

export default function updateListName(listId, listName) {
    if(checkNameAvailability(listName)) {
        setListNameStorage(listId, listName);
        document.querySelector('#header-list-name').textContent = listName;
    } else {
        const listTabInput = document.querySelector(`#list-sidebar li[data-list-id="${listId}"] input`);
        listTabInput.setAttribute('disabled', '');
        listTabInput.value(getListName(listId));
        listTabInput.removeAttribute('disabled');
    }
};