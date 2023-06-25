import React, { useState } from 'react';

import ButtonComponent from '../Button/ButtonComponent';
import './style.scss';
import { ITask } from '../../types/ITask';
import { v4 as uuidV4} from 'uuid';

export default function FormComponent(props: {setTask: React.Dispatch<React.SetStateAction<ITask[]>>}) {
    const [task, setTask] = useState('');
    const [time, setTime] = useState('00:00');

    const addTask = (e: React.FormEvent) => {
        e.preventDefault()
        props.setTask((oldTask) => 
        [...oldTask, 
            {
                id: uuidV4(),
                task: task, 
                time: time,
                selected: false,
                finished: false
            }
        ])

        setTask('');
        setTime('00:00');
    }

    return (
        <form className='novaTarefa' onSubmit={addTask}>
            <div className='inputContainer'>
                <label htmlFor='task'>Adicione uma Tarefa: </label>
                <input 
                    type='text'
                    name='task'
                    id='task'
                    required
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
            </div>
            <div className='inputContainer'>
                <label htmlFor='time'>Defina um Tempo: </label>
                <input 
                    type='time'
                    step='1'
                    name='time'
                    id='time'
                    min='00:00:00'
                    max='01:30:00'
                    required
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                />
            </div>
            <ButtonComponent type="submit">
                Adicionar
            </ButtonComponent>
        </form>
    )
}