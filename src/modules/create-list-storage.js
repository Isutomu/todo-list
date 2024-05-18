import { getFullLocalStorage, checkNameAvailability } from "./storage-utilities.js";

// Main function
export default function createListStorage() {
    const pageData = getFullLocalStorage();
    const listName = generateValidName(pageData);
    const listId = generateValidId(pageData);
    localStorage.setItem(listId, JSON.stringify({
        "name": listName,
        "tasks":{}
    }));

    return [listId, listName];
};
// ---

// Complementary functions
function generateValidName(pageData) {
    let count = '';
    let listName;
    while(true) {
        listName = `Untitled${count}`;
        if(checkNameAvailability(pageData, listName)) {
            return listName;
        }
        if(!count) {
            count = 1;
        } else {
            count++;
        }
    };
};

function generateValidId(pageData) {
    let listId = 1;
    while(true) {
        if(pageData[String(listId)] === undefined) {
            return String(listId);
        }
        listId++;
    }
};
// ---