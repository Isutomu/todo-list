import { removeListStorage } from "./storage-utilities.js";
import displayList from './display-list.js';

export default function deleteList(listId) {
    removeListStorage(listId);
    document.querySelector(`#list-display li[data-list-id=${listId}]`).remove();

    if(listId === document.querySelector('#list-display').dataset.id) {
        displayList('0');
    }
};