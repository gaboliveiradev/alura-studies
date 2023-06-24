import React from 'react';
import './style.scss';
import ItemComponent from './Item/ItemComponent';
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
                        return <ItemComponent 
                            task={item.task}
                            time={item.time}
                            key={index}
                        />
                    })
                }
            </ul>
        </aside>
    )
}