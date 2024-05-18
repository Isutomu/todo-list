import createListStorage from "./create-list-storage.js";
import createListSidebar from "./create-list-sidebar.js";


export default function createList() {
    let listId, listName;
    [listId, listName] = createListStorage();
    return createListSidebar(listId, listName);
}