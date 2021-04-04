export const FETCH_TASKS = "FETCH_TASKS";
export const FETCH_TASKS_SUCCESS = "FETCH_TASKS_SUCCESS";
export const FETCH_TASKS_FAILURE = "FETCH_TASKS_FAILURE";

export const CREATE_TASK = "CREATE_TASK";
export const CREATE_TASK_SUCCESS = "CREATE_TASK_SUCCESS";
export const CREATE_TASK_FAILURE = "CREATE_TASK_FAILURE";

export const DELETE_TASK = "DELETE_TASK";
export const DELETE_TASK_SUCCESS = "DELETE_TASK_SUCCESS";
export const DELETE_TASK_FAILURE = "DELETE_TASK_FAILURE";

export const UPDATE_TASK = "UPDATE_TASK";
export const UPDATE_TASK_SUCCESS = "UPDATE_TASK_SUCCESS ";
export const UPDATE_TASK_FAILURE = "UPDATE_TASK_FAILURE";

export const UPDATE_STATUS_TASK = "UPDATE_STATUS_TASK";
export const UPDATE_STATUS_TASK_SUCCESS = "UPDATE_STATUS_TASK_SUCCESS";
export const UPDATE_STATUS_TASK_FAILURE = "UPDATE_STATUS_TASK_FAILURE ";

export const SELECTED_TASK = "SELECTED_TASK";
export const FILTER_TASK = "FILTER_TASK";
export const SEARCH_TASK = "SEARCH_TASK";

export function fetchTasks() {
    return {
        type: FETCH_TASKS,
        payload: true,
    };
}

export function fetchTaskSuccess(tasks, message, code) {
    return {
        type: FETCH_TASKS_SUCCESS,
        payload: { tasks, message, code },
    };
}

export function fetchTaskFailure(message, code) {
    return {
        type: FETCH_TASKS_FAILURE,
        payload: { message, code },
    };
}

export function createTask(task, note) {
    return {
        type: CREATE_TASK,
        payload: { task, note },
    };
}

export function createTaskSuccess(task, message, code) {
    return {
        type: CREATE_TASK_SUCCESS,
        payload: { task, message, code },
    };
}

export function createTaskFailure(message, code) {
    return {
        type: CREATE_TASK_FAILURE,
        payload: { message, code },
    };
}

export function deleteTask(id) {
    return {
        type: DELETE_TASK,
        payload: id,
    };
}

export function deleteTaskSuccess(taskId, message, code) {
    return {
        type: DELETE_TASK_SUCCESS,
        payload: { taskId, message, code },
    };
}

export function deleteTaskFailure(message, code) {
    return {
        type: DELETE_TASK_FAILURE,
        payload: { message, code },
    };
}

export function updateTask(task) {
    return {
        type: UPDATE_TASK,
        payload: task,
    };
}

export function updateTaskSuccess(task, message, code) {
    return {
        type: UPDATE_TASK_SUCCESS,
        payload: { task, message, code },
    };
}

export function updateTaskFailure(message, code) {
    return {
        type: UPDATE_TASK_FAILURE,
        payload: { message, code },
    };
}

export function selectedTask(task) {
    return {
        type: SELECTED_TASK,
        payload: task,
    };
}

export function updateStatusTask(taskId) {
    return {
        type: UPDATE_STATUS_TASK,
        payload: taskId,
    };
}

export function updateStatusTaskSuccess(taskId, message, code) {
    return {
        type: UPDATE_STATUS_TASK_SUCCESS,
        payload: { taskId, message, code },
    };
}

export function updateStatusTaskFailure(message, code) {
    return {
        type: UPDATE_STATUS_TASK_FAILURE,
        payload: { message, code },
    };
}

export function filterTask(filter) {
    return {
        type: FILTER_TASK,
        payload: filter,
    };
}

export function searchTask(task) {
    return {
        type: SEARCH_TASK,
        payload: task,
    };
}
