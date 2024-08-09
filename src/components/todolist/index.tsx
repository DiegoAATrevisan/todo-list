import { useEffect, useState } from 'react';
import './style.css';

type TodoProps = {
    id: number,
    titulo: string
}

const TodoList = () => {
    const [getTodos, setTodos] = useState<TodoProps[]>([
        {
            id: 1,
            titulo: "tarefa 1"
        },
        {
            id: 2,
            titulo: "tarefa 2"
        },
        {
            id: 3,
            titulo: "tarefa 3"
        },
        {
            id: 4,
            titulo: "tarefa 4"
        },
        {
            id: 5,
            titulo: "tarefa 5"
        },
        {
            id: 6,
            titulo: "tarefa 6"
        }
    ])

    useEffect(() => { }, [getTodos])


    const concluiTodo = (idTodo: number) => {
        const tmpTodos: TodoProps[] = getTodos.filter((todo: TodoProps) => todo.id !== idTodo)
        setTodos(tmpTodos)
    }

    return (
        <div>
            <h1>Lista de Tarefas</h1>
            <ul>
                {getTodos.map((valor: TodoProps) => (
                    <li key={valor.id}>
                        <input type="checkbox" onClick={() => concluiTodo(valor.id)} />{valor.titulo}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList;