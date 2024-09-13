import { taskProps } from "../@types/tasks";

export class TodoService {
    private todos: taskProps[] = []

    public get(): taskProps[] {
        return this.todos
    }

    public set(newTodo: taskProps): void {
        this.todos.push(newTodo)
    }
}