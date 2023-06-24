import React from 'react';

import ButtonComponent from '../Button/ButtonComponent';

import './style.scss';

export default function FormComponent() {
    return (
        <form className='novaTarefa'>
            <div className='inputContainer'>
                <label htmlFor='task'>Adicione uma Tarefa: </label>
                <input 
                    type='text'
                    name='task'
                    id='task'
                    required
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
                />
            </div>
            <ButtonComponent>
                Cadastrar
            </ButtonComponent>
        </form>
    )
}