import { useEffect } from 'react';
import './style.css';
import { taskProps } from '../../@types/tasks';

type TaskListProps = {
    getTasks: taskProps[]
    setTasks: (tasks: taskProps[]) => void
}

const TodoList = ({ getTasks, setTasks }: TaskListProps) => {

    useEffect(() => { }, [getTasks])


    const concluiTodo = (idTask: number) => {
        const tmpTasks: taskProps[] = getTasks.filter((task: taskProps) => task.id !== idTask)
        setTasks(tmpTasks)
    }

    return (
        <div>
            <h1>Lista de Tarefas</h1>
            <ul>
                {getTasks.map((task: taskProps) => (
                    <div className='listTasks'>
                        <li key={task.id}>
                            <input type="checkbox" onClick={() => concluiTodo(task.id)} />{task.title}
                        </li>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default TodoList;