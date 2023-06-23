import React from 'react';

import './ListComponent.css';

export default function ListComponent() {

    const tasks = [{
        task: 'Estudar Reac',
        time: '01:30:00'
    }, {
        task: 'Trabalhar',
        time: '04:00:00'
    }]

    return (
        <aside className='aside'>
            <h2>Tarefas</h2>
            <ul>
                {
                    tasks.map((item, index) => {
                        return (
                            <li key={index}>
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