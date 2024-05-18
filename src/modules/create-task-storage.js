import { getFullLocalStorage } from "./storage-utilities.js";


// Main function
export default function createTaskStorage(listId, name) {
    const pageData = getFullLocalStorage();
    const taskId = generateValidId(pageData, listId);
    pageData[listId].tasks[taskId] = {
        name,
        'dueDate': '',
        'priority': false,
        'description': ''
    };
    localStorage.setItem(listId, JSON.stringify(pageData[listId]));

    return taskId;
};
// ---

// Complementary function
function generateValidId(pageData, listId) {
    const taskIds = Object.keys(pageData[listId].tasks);
    const cleanTasksId = taskIds.map((fullId) => fullId.split('-')[1]);

    let id = 0;
    while(true) {
        if(!cleanTasksId.includes(String(id))) {
            return `${listId}-${id}`;
        }
        id++;
    }
}
// ---