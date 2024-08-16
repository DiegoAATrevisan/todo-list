import './App.css';
import TodoList from './components/todolist';
import CriarTodo from './components/createTask';
import { useEffect, useState } from 'react';
import { taskProps } from './@types/tasks';

function App() {
  const [getTasks, setTasks] = useState<taskProps[]>([])

  useEffect(() => console.log({ getTasks }, [getTasks]))
  const handleTaskCreation = (title: string) => {
    const id: number = getTasks.length + 1;
    const task: taskProps = { id, title };

    const tmpTasks: taskProps[] = [...getTasks, task];
    setTasks(tmpTasks);
  }

  return (
    <div className="App">
      <CriarTodo onSubmit={(title: string) => handleTaskCreation(title)}></CriarTodo>
      <TodoList
        tasks={getTasks}
        onChange={(newTaskList: taskProps[]) => setTasks(newTaskList)}
      ></TodoList>
    </div >
  );
}

export default App;
