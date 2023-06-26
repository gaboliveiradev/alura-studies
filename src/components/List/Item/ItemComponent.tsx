import { ITask } from "../../../types/ITask";

interface IProps extends ITask {
    selectTask: (taskSelected: ITask) => void
}

export default function ItemComponent({task, time, selected, finished, id, selectTask}: IProps) {
    console.log('Item Atual: ', {task, time, selected, finished, id});

    return (
        <li 
            className='item' 
            onClick={() => selectTask({
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
        </li>
    )
}