export const tasksSelector = (state) => state.taskState.tasks;
export const tasksSortedSelector = (state) =>
    tasksSelector(state)
        .sort((a, b) => (a.created_date > b.created_date ? 1 : -1))
        .sort((a, b) => (a.complete > b.complete ? 1 : -1));
export const selectedTaskSelector = (state) => state.taskState.selectedTask;

export const filterSelector = (state) => state.taskState.filter;
export const searchKeySelector = (state) => state.taskState.searchKey;
export const isLoadingSelector = (state) => state.taskState.isLoading;
export const statusSelector = (state) => state.taskState.status;

export const filterCompleteSelector = (state) => state.taskState.filter((task) => task.completed);

export const filterIncompleteSelector = (state) => state.taskState.filter((task) => !task.completed);
