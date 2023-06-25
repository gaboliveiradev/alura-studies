import './style.scss';
import ItemComponent from './Item/ItemComponent';
import { ITask } from './../../types/ITask';

export default function ListComponent({tasks}: {tasks: ITask[]} ) {

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