import { getTaskData } from "./storage-utilities";

export { enableModificationsTask, disableModificationsTask };


function enableModificationsTask(taskId) {
    document.querySelector('#task-options').setAttribute('display', 'grid');
    document.querySelector('#task-options').setAttribute('data-task-id', taskId);
    const taskData = getTaskData(taskId);

    const taskNameInput = document.querySelector('#task-options header input');
    taskNameInput.value = taskData.name;
    taskNameInput.removeAttribute('disabled');

    const dueDateInput = document.querySelector('#duedate');
    dueDateInput.value = taskData.dueDate;
    dueDateInput.removeAttribute('disabled');

    const priorityButton = document.querySelector('#task-priority');
    if(taskData.priority) {
        priorityButton.classList.add('task-urgent');
    }

    const descriptionTextarea = document.querySelector('#task-options textarea');
    descriptionTextarea.value = taskData.description;
    descriptionTextarea.removeAttribute('disabled');
};

function disableModificationsTask() {
    document.querySelector('#task-options').setAttribute('display', 'none');
    document.querySelector('#task-options header input').setAttribute('disabled', '');
    document.querySelector('#duedate').setAttribute('disabled', '');
    document.querySelector('#task-priority').classList.remove('task-urgent');
    document.querySelector('#task-options textarea').setAttribute('disabled', '');
}