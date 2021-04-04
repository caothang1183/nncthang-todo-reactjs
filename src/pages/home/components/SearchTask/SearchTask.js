import { useDispatch } from "react-redux";
import { useState } from "react";
import { searchTask } from "../../../../redux/actions/TaskActions";
import "./SearchTask.css";

const SearchTask = () => {
    const [taskSearched, setTaskSearched] = useState("");

   const dispatch = useDispatch();

    const hanldeOnChange = (e) => {
        e.preventDefault();
        setTaskSearched(e.target.value);
        dispatch(searchTask(taskSearched));
    };

    return (
        <div className="SearchTask">
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control input-lg"
                    id="inputTask1"
                    placeholder="Search Task"
                    value={taskSearched}
                    aria-describedby="basic-addon2"
                    onChange={(event) => hanldeOnChange(event)}
                />
                <div className="input-group-append">
                    <button className="btn btn-sm btn-secondary" type="button" onClick={() => {
                         setTaskSearched("")
                         dispatch(searchTask(""));
                    }}>
                        Clear
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SearchTask;
