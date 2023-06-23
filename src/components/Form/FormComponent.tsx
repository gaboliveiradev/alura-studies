import React from 'react';
import './FormComponent.css';

import ButtonComponent from '../Button/ButtonComponent';

export default function FormComponent() {
    return (
        <form className='form'>
            <div>
                <label htmlFor='task'>Adicione uma Tarefa: </label>
                <input 
                    type='text'
                    name='task'
                    id='task'
                    required
                />
            </div>
            <div>
                <label htmlFor='time'>Defina um Tempo: </label>
                <input 
                    type='time'
                    step='1'
                    name='time'
                    id='time'
                    min='00:00:00'
                    max='01:30:00'
                    required
                />
            </div>
            <ButtonComponent />
        </form>
    )
}