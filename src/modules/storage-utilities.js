export function getFullLocalStorage() {
    const localObject = {...localStorage};
    const pageData = {};
    Object.keys(localObject).forEach((key) => {
        pageData[key] = JSON.parse(localObject[key]);
    });
    return pageData;
}

export function checkNameAvailability(pageData, listName) {
    return (
        Object.keys(pageData).find(
            (key) => pageData[key].name === listName) === undefined
    );
};

export function removeListStorage(listId) {
    localStorage.remove(listId);
};

export function getListName(listId) {
    const pageData = getFullLocalStorage();
    return pageData[listId].name;
};

export function getTasks(listId) {
    const pageData = getFullLocalStorage();
    return pageData[listId].tasks;
};

export function getTaskData(taskId) {
    const pageData = getFullLocalStorage();
    return pageData[extractListId(taskId)].tasks[taskId];
};

export function updateTaskData(taskId, field, fieldValue) {
    const listId = taskId.split('-')[0];
    const listData = getListData(listId);
    listData.tasks[taskId][field] = fieldValue;
    updateListData(listId, listData);
};

export function getListData(listId) {
    return JSON.parse(localStorage.getItem(listId));
}

export function removeTaskStorage(taskId) {
    const pageData = getFullLocalStorage();
    const listId = extractListId(taskId);
    delete pageData[listId].tasks[taskId];
    localStorage.setItem(listId, JSON.stringify(pageData[listId]));
};

export function updateListData(listId, listData) {
    localStorage.setItem(listId, JSON.stringify(listData));
}

export function setListNameStorage(listId, listName) {
    const pageData = getFullLocalStorage();
    pageData[listId].name = listName;
    localStorage.setItem(listId, JSON.stringify(pageData[listId]));
};

export function extractListId(taskId) {
    return taskId.split('-')[0];
}
// ---