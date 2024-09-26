import { createContext } from "react";
import { taskProps } from "../@types/tasks";
import { TodoService } from "../utils/TodoService";

export const ContextTasks = createContext<{ todoService: TodoService } | undefined>(undefined)

