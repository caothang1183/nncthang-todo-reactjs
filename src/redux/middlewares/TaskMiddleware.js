import { getCurrentDate } from "../../utils/DateUtils";
import {
    createTaskFailure,
    createTaskSuccess,
    CREATE_TASK,
    deleteTaskFailure,
    deleteTaskSuccess,
    DELETE_TASK,
    fetchTaskFailure,
    fetchTaskSuccess,
    FETCH_TASKS,
    updateStatusTaskFailure,
    updateStatusTaskSuccess,
    updateTaskFailure,
    updateTaskSuccess,
    UPDATE_STATUS_TASK,
    UPDATE_TASK,
} from "../actions/TaskActions";

function taskMiddleWare(repository) {
    return ({ dispatch }) => (next) => (action) => {
        switch (action.type) {
            case FETCH_TASKS:
                _fecthtasks({ dispatch }, repository, action, next);
                break;

            case CREATE_TASK:
                _createTasks({ dispatch }, repository, action, next);
                break;

            case UPDATE_TASK:
                _updateTask({ dispatch }, repository, action, next);
                break;

            case UPDATE_STATUS_TASK:
                _updateStatusTask({ dispatch }, repository, action, next);
                break;

            case DELETE_TASK:
                _deleteTask({ dispatch }, repository, action, next);
                break;
            default:
                break;
        }
        return next(action);
    };
}

async function _fecthtasks({ dispatch }, repository, action, next) {
    try {
        repository.getTasks().then((resp) => {
            if (resp["status"] === 200) {
                dispatch(fetchTaskSuccess(resp["data"]["data"], null, resp["status"]));
            } else dispatch(fetchTaskFailure("Failed to fetch data!", resp["status"]));
        });
    } catch (error) {
        dispatch(fetchTaskFailure(error, 101));
    }

    next(action);
}

async function _createTasks({ dispatch }, repository, action, next) {
    try {
        let task = {
            task: action.payload.task,
            note: action.payload.note,
            complete: false,
            created_date: getCurrentDate(),
            deadline: "",
        };
        repository.createTask(task).then((resp) => {
            if (resp["status"] === 200) {
                dispatch(createTaskSuccess(resp["data"]["data"], "Task added successfull!", resp["status"]));
            } else dispatch(createTaskFailure("Something went wrong!", resp["status"]));
        });
    } catch (error) {
        dispatch(createTaskFailure(error, 101));
    }

    next(action);
}

async function _updateTask({ dispatch }, repository, action, next) {
    try {
        repository.updateTaskById(action.payload._id, action.payload).then((resp) => {
            if (resp["status"] === 200) {
                dispatch(updateTaskSuccess(action.payload, "Task updated successfull!", resp["status"]));
            } else dispatch(updateTaskFailure("Something went wrong!", resp["status"]));
        });
    } catch (error) {
        dispatch(updateTaskFailure(error, 101));
    }

    next(action);
}

async function _updateStatusTask({ dispatch }, repository, action, next) {
    try {
        repository.updateStatusTaskById(action.payload).then((resp) => {
            if (resp["status"] === 200) {
                dispatch(updateStatusTaskSuccess(action.payload, "Task's status updated", resp["status"]));
            } else dispatch(updateStatusTaskFailure("Something went wrong!", resp["status"]));
        });
    } catch (error) {
        dispatch(updateStatusTaskFailure(error, 101));
    }

    next(action);
}

async function _deleteTask({ dispatch }, repository, action, next) {
    try {
        repository.deleteTask(action.payload).then((resp) => {
            if (resp["status"] === 200) {
                return dispatch(deleteTaskSuccess(action.payload, "Task deleted", resp["status"]));
            } else return dispatch(deleteTaskFailure("Something went wrong!", resp["status"]));
        });
    } catch (error) {
        console.log(error);
        return dispatch(deleteTaskFailure(error, 101));
    }

    next(action);
}

const thunk = taskMiddleWare();
thunk.withExtraArgument = taskMiddleWare;

export default taskMiddleWare;
