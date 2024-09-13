import React, { useContext } from "react";
import { TodoService } from "../utils/TodoService";
import { ContextoTarefas } from "../context/contextTodo";

export const useTodo = (): TodoService => {
    const context: { todoService: TodoService } | undefined = useContext(ContextoTarefas);

    if (!context) {
        throw new Error("useTodo precisa ser usado dentro de um TodoProvider");
    }

    return context.todoService;
}