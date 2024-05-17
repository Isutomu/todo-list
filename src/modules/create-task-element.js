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
        showTaskOptions(e.target.closest('li').dataset.id);
    });
};

function createTaskButton() {
    const taskButton = document.createElement('button');
    taskButton.addEventListener('click', (e) => {
        deleteTask(e.target.closest('li').dataset.id);
    });
};
// ---