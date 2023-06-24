import React from 'react';
import './style.scss';
export default function ListComponent() {

    const tasks = [{
        task: 'Estudar React',
        time: '01:30:00'
    }, {
        task: 'Trabalhar',
        time: '04:00:00'
    }]

    return (
        <aside className='listaTarefas'>
            <h2>Tarefas</h2>
            <ul>
                {
                    tasks.map((item, index) => {
                        return (
                            <li key={index} className='item'>
                                <h3>
                                    {item.task}
                                </h3>
                                <span>
                                    {item.time}
                                </span>
                            </li>
                        )
                    })
                }
            </ul>
        </aside>
    )
}