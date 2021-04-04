import { useState } from "react";
import { useDispatch } from "react-redux";
import { selectedTask, updateTask } from "../../../../redux/actions/TaskActions";
import "./UpdateTask.css";

const UpdateTask = ({ task }) => {
    const [taskTitle, setTaskTitle] = useState("");
    const [taskNote, setTaskNote] = useState("");
    const dispatch = useDispatch();
    const handleSubmit = (event) => {
        event.preventDefault();
        var taskUpdated = {
            ...task,
            task: taskTitle !== "" ? taskTitle : task.task,
            note: taskNote !== "" ? taskNote : task.note,
        };
        dispatch(updateTask(taskUpdated));
        dispatch(selectedTask(null));
    };

    return (
        <div className="UpdateTask">
            <form onSubmit={(event) => handleSubmit(event)}>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        name="taskTitle"
                        className="form-control"
                        aria-describedby="basic-addon2"
                        value={taskTitle !== "" ? taskTitle : task.task}
                        onChange={(event) => setTaskTitle(event.target.value)}
                    />
                    <div className="input-group-append">
                        <button className="btn btn-sm btn-primary" type="submit" onClick={(event) => handleSubmit(event)}>
                            Edit
                        </button>
                        <button className="btn btn-sm btn-secondary" type="button" onClick={() => dispatch(selectedTask(null))}>
                            Cancel
                        </button>
                    </div>
                </div>
                <div className="input-group mb-3">
                    <textarea
                        type="text"
                        className="form-control input-lg"
                        name="taskTitle"
                        placeholder="Note"
                        value={taskNote !== "" ? taskNote : task.note}
                        aria-describedby="basic-addon2"
                        onChange={(event) => setTaskNote(event.target.value)}
                    />
                </div>
            </form>
        </div>
    );
};

export default UpdateTask;
