import TaskRepository from "./TaskRepository";

const repositories = {
    tasks: TaskRepository,
}

export const RepositoryFactory = {
    get: name => repositories[name]
}