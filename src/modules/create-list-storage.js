export { createListStorage, removeListStorage, getListName, getTasks, checkNameAvailability, setListNameStorage, getTaskInfo };


// Main function
function createListStorage() {
    const pageData = getFullLocalStorage();
    const listName = generateValidName(pageData);
    const listId = generateValidId(pageData);
    localStorage.setItem(listId, `"name":"${listName}","tasks":{}`);

    return [listId, listName];
};
// ---

// Complementary functions
function generateValidName(pageData) {
    let count = 0;
    let listName;
    while(true) {
        listName = `Untitled(${count})`;
        if(checkNameAvailability(listName)) {
            return listName;
        }
        count++;
    };
};

function generateValidId(pageData) {
    let listId = 1;
    while(true) {
        if(pageData[String(listId)] === undefined) {
            return String(listId);
        }
        listId++;
    };
};
// ---

// Utility functions
function getFullLocalStorage() {
    const localObject = {...localStorage};
    const pageData = {};
    Object.keys(localObject).forEach((key) => {
        pageData[key] = JSON.parse(localObject[key]);
    });
    return pageData;
}

function checkNameAvailability(listName) {
    const pageData = getFullLocalStorage();
    return (
        Object.keys(pageData).find(
            (key) => pageData[key].name === listName) === undefined
    );
};

function removeListStorage(listId) {
    localStorage.remove(listId);
};

function getListName(listId) {
    const pageData = getFullLocalStorage();
    return pageData[listId].name;
};

function getTasks(listId) {
    const pageData = getFullLocalStorage();
    return pageData[listId].tasks;
};

function getTaskInfo(taskId) {
    const pageData = getFullLocalStorage();
    return pageData[taskId.split('-')[0]].tasks[taskId];
}

function setListNameStorage(listId, listName) {
    const pageData = getFullLocalStorage();
    pageData[listId].name = listName;
    localStorage.setItem(listId, JSON.stringify(pageData[listId]));
};
// ---