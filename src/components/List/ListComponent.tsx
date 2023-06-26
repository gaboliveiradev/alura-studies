import './style.scss';
import ItemComponent from './Item/ItemComponent';
import { ITask } from './../../types/ITask';

interface IProps {
    tasks: ITask[],
    selectTask: (taskSelected: ITask) => void
}

export default function ListComponent({tasks, selectTask}: IProps) {

    return (
        <aside className='listaTarefas'>
            <h2>Tarefas</h2>
            <ul>
                {
                    tasks.map((item) => {
                        return <ItemComponent 
                            selectTask={selectTask}
                            task={item.task}
                            time={item.time}
                            key={item.id} 
                            id={item.id} 
                            selected={item.selected} 
                            finished={item.finished}                        
                        />
                    })
                }
            </ul>
        </aside>
    )
}