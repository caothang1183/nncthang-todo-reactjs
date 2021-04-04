import logo from "./logo.svg";
import "./HomePage.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../../redux/actions/TaskActions";
import { selectedTaskSelector, statusSelector } from "../../redux/selector/TaskSelector";
import CreateTask from "./components/CreateTask/CreateTask";
import HomeNavigation from "./components/HomeNavigation/HomeNavigation";
import TaskList from "./components/TaskList/TaskList";
import UpdateTask from "./components/UpdateTask/UpdateTask";
import SearchTask from "./components/SearchTask/SearchTask";
import { useIsMount } from "../../common/CommonConstants";

const HomePage = () => {
    const selectedTask = useSelector((state) => selectedTaskSelector(state));
    const status = useSelector((state) => statusSelector(state));
    const dispatch = useDispatch();
    const isMount = useIsMount();

    useEffect(() => {
        if (isMount) {
            dispatch(fetchTasks());
        } else {
            console.log("Subsequent Render");
        }
    });
    return (
        <div className="HomePage">
            <header className="HomePage-header">
                <div className="HomePage-title">
                    <img src={logo} className="HomePage-logo" alt="logo" />
                    TodoApp
                </div>
            </header>
            <SearchTask />
            {selectedTask === null ? <CreateTask /> : <UpdateTask task={selectedTask} />}
            <div className={status.code === null || status.message === null ? "d-none" : `alert alert-${status.code === 200 ? "success" : "danger"}`} role="alert">
                {status.message}
            </div>
            <HomeNavigation />
            <TaskList />
        </div>
    );
};

export default HomePage;
