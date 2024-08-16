import { useEffect, useState } from 'react';
import './style.css';
import { taskProps } from '../../@types/tasks';

type TaskListProps = {
    tasks: taskProps[]
    onChange: (tasks: taskProps[]) => void
}

const TodoList = ({ tasks, onChange }: TaskListProps) => {

    useEffect(() => { }, [tasks])


    const concluiTodo = (idTask: number) => {
        const tmpTasks: taskProps[] = tasks.filter((task: taskProps) => task.id !== idTask)
        onChange(tmpTasks)
    }

    return (
        <div>
            <h1>Lista de Tarefas</h1>
            <ul>
                {tasks.map((value: taskProps) => (
                    <div className='listTasks'>
                        <li key={value.id}>
                            <input type="checkbox" onClick={() => concluiTodo(value.id)} />{value.title}
                        </li>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default TodoList;