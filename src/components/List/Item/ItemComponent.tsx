import { ITask } from "../../../types/ITask";
import './style.scss';

interface IProps extends ITask {
    selectTask: (taskSelected: ITask) => void
}

export default function ItemComponent({task, time, selected, finished, id, selectTask}: IProps) {
    return (
        <li 
            className={`item ${selected ? 'itemSelecionado' : ''} ${finished ? 'itemCompletado' : ''}`} 
            onClick={() => !finished && selectTask({
                id,
                task,
                time,
                selected,
                finished
            })}
        >
            <h3>
                {task}
            </h3>
            <span>
                {time}
            </span>
            {finished && <span className="concluido" aria-label="task completed"></span>}
        </li>
    )
}