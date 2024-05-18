import { enableModificationsTask } from "./task-options-utilities.js";
import { removeTaskStorage } from "./storage-utilities.js";


// Main function
export default function createTaskElement(id, name) {
    const taskElem = document.createElement('li');
    taskElem.setAttribute('data-task-id', id);
    taskElem.appendChild(createTaskButton());
    taskElem.appendChild(createTaskInput(name));

    return taskElem;
}
// ---

// Complementary functions
function createTaskInput(name) {
    const taskName = document.createElement('span');
    taskName.textContent = name;
    taskName.addEventListener('click', (e) => {
        enableModificationsTask(e.target.closest('li').dataset.taskId);
    });
};

function createTaskButton() {
    const taskButton = document.createElement('button');
    taskButton.addEventListener('click', (e) => {
        const taskElement = e.target.closest('li');
        removeTaskStorage(taskElement.dataset.taskId);
        taskElement.remove();
    });
};
// ---