import { useSelector } from "react-redux";
import { FILTER_MAP } from "../../../../common/FilterConstants";
import { filterSelector, tasksSortedSelector, searchKeySelector, isLoadingSelector } from "../../../../redux/selector/TaskSelector";
import TaskItem from "../TaskItem/TaskItem";
import "./TaskList.css";

const TaskList = () => {
    const loading = useSelector((state) => isLoadingSelector(state));
    const tasks = useSelector((state) => tasksSortedSelector(state));
    const active = useSelector((state) => filterSelector(state));
    const searchKey = useSelector((state) => searchKeySelector(state));

    return (
        <table className="TaskList">
            <tbody>
                {loading ? (
                    <tr>
                        <td colSpan={3} className="loading">
                            Loading...
                        </td>
                    </tr>
                ) : (
                    tasks
                        .filter((task) => task.task.toLowerCase().includes(searchKey.toLowerCase()))
                        .filter(FILTER_MAP[active])
                        .map((task, index) => <TaskItem task={task} key={index} />)
                )}
            </tbody>
        </table>
    );
};

export default TaskList;
