import { useDispatch } from "react-redux";
import { deleteTask, selectedTask, updateStatusTask } from "../../../../redux/actions/TaskActions";
import moment from "moment";
import "./TaskItem.css";

const TaskItem = ({ task }) => {
    const dispatch = useDispatch();
    const date = moment(task.created_date).format('DD MMM, YYYY')
    return (
        <tr className="TaskItem">
            <td className="td-checkbox">
                <label className="container">
                    <input type="checkbox" checked={task.complete} onChange={() => dispatch(updateStatusTask(task._id))} />
                    <span className="checkmark"></span>
                </label>
            </td>
            <td width="100%" id="detail">
                <p className={!task.complete ? "item" : "item completed"}>{task.task}</p>
                <span className={!task.complete ? "note" : "note highlight"}>{task.note}</span>
                <br></br>
                <span className={!task.complete ? "item-date" : "item-date highlight"}>{date}</span>
            </td>
            <td className="td-btn">
                <div className="btn-group">
                    <button type="button" className="btn btn-sm btn-secondary" onClick={() => dispatch(selectedTask(task))}>
                        edit
                    </button>
                    <button type="button" className="btn btn-sm btn-danger" onClick={() => dispatch(deleteTask(task._id))}>
                        delete
                    </button>
                </div>
            </td>
        </tr>
    );
};

export default TaskItem;
