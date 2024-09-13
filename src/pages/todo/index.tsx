import { useContext, useEffect, useState } from "react";
import CriarTodo from "../../components/createTask";
import TodoList from "../../components/todolist";
import { taskProps } from "../../@types/tasks";
import './styles.css';
import { ContextoTarefas } from "../../context/contextTodo";

enum TaskPages {
    'createTask' = 'createTask',
    'todoList' = 'todoList'
}

const Todo = () => {
    const tasks = useContext(ContextoTarefas)
    const [getTasks, setTasks] = useState<taskProps[]>(tasks)

    const [getActualPage, setActualPage] = useState<TaskPages>(TaskPages.todoList)

    useEffect(() => console.log({ getTasks }, [getTasks]))
    const handleTaskCreation = (title: string) => {
        const id: number = getTasks.length + 1;
        const task: taskProps = { id, title };

        const tmpTasks: taskProps[] = [...getTasks, task];
        setTasks(tmpTasks);
    }

    const renderPage = () => {
        switch (getActualPage) {
            case TaskPages.createTask:
                return (
                    <CriarTodo onSubmit={(newTask: taskProps) => {
                        const id: number = getTasks.length + 1
                        newTask.id = id
                        const tmpTasks: taskProps[] = [...getTasks, newTask]
                        setTasks(tmpTasks)
                        
                        // setActualPage(TaskPages.todoList)
                    }} />
                )
                break;
            case TaskPages.todoList:
                return (
                    <TodoList
                        getTasks={getTasks}
                        setTasks={(newTaskList: taskProps[]) => setTasks(newTaskList)}
                    />
                )
                break;
            default:
                return (
                    <TodoList
                        getTasks={getTasks}
                        setTasks={(newTaskList: taskProps[]) => setTasks(newTaskList)}
                    />
                )
        }
    }

    const renderButtons = () => {
        return (
            <div className='buttons'>
                <button onClick={() => setActualPage(TaskPages.createTask)}>Criar Tarefa</button>
                <button onClick={() => setActualPage(TaskPages.todoList)}>Listar Tarefas</button>
            </div>
        )
    }


    return (
        <div>
            {renderButtons()}
            {renderPage()}
        </div>
    )

}

export default Todo;