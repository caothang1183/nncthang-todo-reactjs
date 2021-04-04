import FILTER_NAMES from "../../../../common/FilterConstants";
import FilterButton from "../FilterButton/FilterButton";
import "./HomeNavigation.css";

const HomeNavigation = () => {

    return (
        <div className="HomeNavigation">
            {FILTER_NAMES.map((name) => (
                <FilterButton key={name} name={name} />
            ))}
        </div>
    );
};

export default HomeNavigation;
