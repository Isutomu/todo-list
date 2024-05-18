import { checkNameAvailability, setListNameStorage, getListName,getFullLocalStorage } from "./storage-utilities.js";

export default function updateListName(listId, listName) {
    if(checkNameAvailability(getFullLocalStorage(), listName)) {
        setListNameStorage(listId, listName);
        const listSidebarElem = document.querySelector(`#lists-list li[data-list-id="${listId}"] span`);
        listSidebarElem.textContent = listName;
    } else {
        const listTabInput = document.querySelector("#header-list-name input");
        listTabInput.setAttribute('disabled', '');
        listTabInput.value = getListName(listId);
        listTabInput.removeAttribute('disabled');
    }
};