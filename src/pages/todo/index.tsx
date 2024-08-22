import React, { useEffect, useState } from "react";
import CriarTodo from "../../components/createTask";
import TodoList from "../../components/todolist";
import { taskProps } from "../../@types/tasks";
import './styles.css';


const Todo = () => {
    const [getTasks, setTasks] = useState<taskProps[]>([])

    useEffect(() => console.log({ getTasks }, [getTasks]))
    const handleTaskCreation = (title: string) => {
        const id: number = getTasks.length + 1;
        const task: taskProps = { id, title };

        const tmpTasks: taskProps[] = [...getTasks, task];
        setTasks(tmpTasks);
    }

    return (
        <div>
            <CriarTodo onSubmit={(newTask: taskProps) => {
                const id: number = getTasks.length + 1
                newTask.id = id
                const tmpTasks: taskProps[] = [...getTasks, newTask]
                setTasks(tmpTasks)
            }} />
            <TodoList
                getTasks={getTasks}
                setTasks={(newTaskList: taskProps[]) => setTasks(newTaskList)}
            />

        </div>

    )

}

export default Todo;