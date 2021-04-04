import { useDispatch, useSelector } from "react-redux";
import { filterTask } from "../../../../redux/actions/TaskActions";
import { filterSelector } from "../../../../redux/selector/TaskSelector";
import "./FilterButton.css";

const FilterButton = ({ name }) => {
    const active = useSelector((state) => filterSelector(state));
    const dispatch = useDispatch();
    return (
        <div className="FilterButton">
            <button type="button" className={`btn btn-outline-danger ${active === name ? "active" : ""}`} onClick={() => dispatch(filterTask(name))}>
                {name}
            </button>
        </div>
    );
};

export default FilterButton;
