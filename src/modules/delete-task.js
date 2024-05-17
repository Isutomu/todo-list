import { removeTaskStorage } from "./create-list-storage.js";

export default function deleteTask(taskId) {
    document.querySelector(`li[data-set-id="${taskId}"]`).remove();
    removeTaskStorage(taskId);
}