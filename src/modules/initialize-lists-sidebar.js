import createListSidebar from "./create-list-sidebar.js";
import { getFullLocalStorage } from "./storage-utilities.js";


export default function initializeListsSidebar() {
    const pageData = getFullLocalStorage();
    const containerListsSidebar = document.querySelector("#lists-list");
    for(let listId in pageData) {
        if(listId !== '0') {
            containerListsSidebar.appendChild(createListSidebar(listId, pageData[listId].name));
    
        }
    }
}