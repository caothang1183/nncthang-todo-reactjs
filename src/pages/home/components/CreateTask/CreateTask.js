import { useDispatch } from "react-redux";
import { useState } from "react";
import { createTask } from "../../../../redux/actions/TaskActions";
import "./CreateTask.css";

const CreateTask = () => {
    const [task, setTask] = useState("");
    const [note, setNote] = useState("");

    const dispatch = useDispatch();

    const hanldeSubmit = (e) => {
        e.preventDefault();
        if (task.trim() !== "") {
            dispatch(createTask(task, note));
            setTask("");
            setNote("");
        }
    };

    return (
        <div className="CreateTask">
            <form onSubmit={(event) => hanldeSubmit(event)}>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control input-lg"
                        id="inputTask"
                        placeholder="Add New Task"
                        value={task}
                        aria-describedby="basic-addon2"
                        onChange={(event) => setTask(event.target.value)}
                    />
                    <div className="input-group-append">
                        <button className="btn btn-sm btn-primary" type="submit" onClick={(event) => hanldeSubmit(event)}>
                            Add
                        </button>
                        <button className="btn btn-sm btn-secondary" type="button" onClick={() => setTask("")}>
                            Cancel
                        </button>
                    </div>
                </div>
                <div className="input-group mb-3">
                    <textarea
                        type="text"
                        className="form-control input-lg"
                        id="inputNote"
                        placeholder="Note"
                        value={note}
                        aria-describedby="basic-addon2"
                        onChange={(event) => setNote(event.target.value)}
                    />
                </div>
            </form>
        </div>
    );
};

export default CreateTask;
