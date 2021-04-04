import { applyMiddleware, createStore } from "redux";
import { logger } from "redux-logger";
import thunk from "redux-thunk";
import { RepositoryFactory } from "../../network/repositories/RepositoryFactory";
import taskMiddleWare from "../middlewares/TaskMiddleware";
import rootReducer from "../reducers/RootReducer";

const taskRepository = RepositoryFactory.get("tasks");

const appStore = createStore(rootReducer, {}, 
    applyMiddleware(logger , thunk,taskMiddleWare(taskRepository)));
appStore.subscribe(() => {
    console.log("Store Updated: " + appStore.getState());
});

export default appStore;
