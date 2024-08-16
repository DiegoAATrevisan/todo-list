import React, { useState } from 'react';
import './styles.css';


type createtaskProps = {
    onSubmit: (tituloTarefa: string) => void;
}

const CriarTodo = ({ onSubmit }: createtaskProps) => {
    const [getTitulo, setTitulo] = useState<string>('');

    return (
        <div>
            <h1>Inserir Tarefa</h1>
            <input type="text"
                placeholder='Inserir tarefa'
                onChange={(event) => {
                    setTitulo(event.target.value);                    
                }}
            />
            <h3>{getTitulo}</h3>
            <button className='ComicBtn' onClick={() => onSubmit(getTitulo)}>Enviar</button>
        </div>
    )
}

export default CriarTodo;