export const FILTER_MAP = {
    ALL: () => true,
    COMPLETED: task => task.complete,
    INCOMPLETE: task => !task.complete,
};
;

const FILTER_NAMES = Object.keys(FILTER_MAP);


export default FILTER_NAMES;
