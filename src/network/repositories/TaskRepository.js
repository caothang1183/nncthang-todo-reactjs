import instance from "./Repository"
const resource = "/tasks";

const TaskRepository = {
    getTasks() {
        return instance.get(`${resource}`);
    },
    createTask(data) {
        return instance.post(`${resource}`, data);
    },
    updateTaskById(id, data) {
        return instance.post(`${resource}/${id}`, data);
    },
    deleteTask(id) {
        return instance.get(`${resource}/del/${id}`);
    },
    getTaskById(id) {
        return instance.get(`${resource}/${id}`);
    },
    updateStatusTaskById(id) {
        return instance.post(`${resource}/updateStatus/${id}`);
    },
};

export default TaskRepository;