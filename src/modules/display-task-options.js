import { getTaskInfo } from "./create-list-storage.js";


// Main function
export default function displayTaskOptions(taskId) {
    const taskOptions = document.querySelector('#task-options');
    taskOptions.setAttribute('display', 'grid');
    populateTaskOptions(taskId);
}
// ---

// Complementary function
function populateTaskOptions(taskId) {
    const taskInfo = getTaskInfo(taskId);

    document.querySelector('#task-options header input').setAttribute('disabled', '');
    document.querySelector('#task-options header input').value = taskInfo['name'];
    document.querySelector('#task-options header input').removeAttribute('disabled');

    document.querySelector('#task-options input[type="date"]').setAttribute('disabled', '');
    document.querySelector('#task-options input[type="date"]').value = taskInfo['dueDate'];
    document.querySelector('#task-options input[type="date"]').removeAttribute('disabled');

    if(taskInfo['priority']) {
        document.querySelector('#task-priority').classList.add('task-urgent');
    }

    document.querySelector('#task-options textarea').setAttribute('disabled', '');
    document.querySelector('#task-options textarea').textContent = taskInfo['description'];
    document.querySelector('#task-options textarea').removeAttribute('disabled');
};
// ---