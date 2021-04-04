import {
    CREATE_TASK,
    CREATE_TASK_SUCCESS,
    CREATE_TASK_FAILURE,
    DELETE_TASK,
    DELETE_TASK_SUCCESS,
    DELETE_TASK_FAILURE,
    UPDATE_STATUS_TASK,
    UPDATE_STATUS_TASK_SUCCESS,
    UPDATE_STATUS_TASK_FAILURE,
    SELECTED_TASK,
    UPDATE_TASK,
    FILTER_TASK,
    SEARCH_TASK,
    FETCH_TASKS_SUCCESS,
    FETCH_TASKS_FAILURE,
    FETCH_TASKS,
    UPDATE_TASK_SUCCESS,
    UPDATE_TASK_FAILURE,
} from "../actions/TaskActions";

let initialState = {
    tasks: [],
    selectedTask: null,
    filter: "ALL",
    searchKey: "",
    isLoading: false,
    status: {
        message: "",
        code: null,
    },
};

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TASKS:
            state = {
                ...state,
                isLoading: action.payload,
            };
            return state;

        case FETCH_TASKS_SUCCESS:
            state = {
                ...state,
                tasks: action.payload.tasks,
                isLoading: false,
                status: {
                    ...state.status,
                    message: action.payload.message,
                    code: action.payload.code,
                },
            };
            return state;

        case FETCH_TASKS_FAILURE:
            state = {
                ...state,
                isLoading: false,
                status: {
                    message: action.payload.message,
                    code: action.payload.code,
                },
            };
            return state;

        case CREATE_TASK:
            state = {
                ...state,
                isLoading: true,
            };
            return state;

        case CREATE_TASK_SUCCESS:
            state = {
                ...state,
                tasks: [...state.tasks, action.payload.task],
                isLoading: false,
                status: {
                    message: action.payload.message,
                    code: action.payload.code,
                },
            };
            return state;

        case CREATE_TASK_FAILURE:
            state = {
                ...state,
                status: {
                    message: action.payload.message,
                    code: action.payload.code,
                },
                isLoading: false,
            };
            return state;

        case DELETE_TASK:
            return state;

        case DELETE_TASK_SUCCESS:
            state = {
                ...state,
                tasks: [...state.tasks.filter((task) => task._id !== action.payload.taskId)],
                isLoading: false,
                status: {
                    message: action.payload.message,
                    code: action.payload.code,
                },
            };
            return state;

        case DELETE_TASK_FAILURE:
            state = {
                ...state,
                status: {
                    message: action.payload.message,
                    code: action.payload.code,
                },
                isLoading: false,
            };
            return state;

        case SELECTED_TASK:
            state = {
                ...state,
                selectedTask: action.payload,
            };
            return state;

        case UPDATE_TASK:
            state = {
                ...state,
                isLoading: true,
            };
            return state;

        case UPDATE_TASK_SUCCESS:
            state = {
                ...state,
                tasks: [
                    ...state.tasks.map((task) => {
                        if (task._id === action.payload.task._id) {
                            return action.payload.task;
                        }
                        return task;
                    }),
                ],
                isLoading: false,
            };
            return state;

        case UPDATE_TASK_FAILURE:
            state = {
                ...state,
                status: {
                    message: action.payload.message,
                    code: action.payload.code,
                },
                isLoading: false,
            };
            return state;

        case UPDATE_STATUS_TASK:
            state = {
                ...state,
                isLoading: true,
            };
            return state;

        case UPDATE_STATUS_TASK_SUCCESS:
            state = {
                ...state,
                tasks: [
                    ...state.tasks.map((task) => {
                        if (task._id === action.payload.id) {
                            task.complete = !task.complete;
                            return task;
                        }
                        return task;
                    }),
                ],
                isLoading: false,
                status: {
                    message: action.payload.message,
                    code: action.payload.code,
                },
            };
            return state;

        case UPDATE_STATUS_TASK_FAILURE:
            state = {
                ...state,
                status: {
                    message: action.payload.message,
                    code: action.payload.code,
                },
                isLoading: false,
            };
            return state;

        case FILTER_TASK:
            state = {
                ...state,
                tasks: [...state.tasks],
                filter: action.payload,
            };
            return state;

        case SEARCH_TASK:
            state = {
                ...state,
                searchKey: action.payload,
            };
            return state;

        default:
            break;
    }
    return state;
};

export default taskReducer;
