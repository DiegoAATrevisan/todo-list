import { useState } from 'react';
import './styles.css';
import { taskProps } from '../../@types/tasks';


type createTaskProps = {
    onSubmit: (tituloTarefa: taskProps) => void;
}

const CriarTodo = ({ onSubmit }: createTaskProps) => {
    const [getTitulo, setTitulo] = useState<taskProps>({ id: 0, title: "" });

    return (
        <div>
            <h1>Inserir Tarefa</h1>
            <input type="text"
                placeholder='Inserir tarefa'
                onChange={(event) => {
                    setTitulo({ ...getTitulo, title: event.target.value })
                }}
            />
            <button className='ComicBtn' onClick={() => onSubmit(getTitulo)}>Enviar</button>
        </div>
    )
}

export default CriarTodo;