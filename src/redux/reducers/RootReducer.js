import { combineReducers } from "redux";
import taskReducer from "./TaskReducer"
const rootReducer = combineReducers({
    taskState: taskReducer,
});

export default rootReducer;
