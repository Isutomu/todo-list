import createTaskStorage from "./create-task-storage.js";
import createTaskElement from "./create-task-element.js";


export default function createTask(listId, name) {
    const taskId = createTaskStorage(listId, name);
    return createTaskElement(taskId, name);
}