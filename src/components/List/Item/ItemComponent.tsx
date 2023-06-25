import { ITask } from "../../../types/ITask";

export default function ItemComponent({task, time, selected, finished, id}: ITask) {
    console.log('Item Atual: ', {task, time, selected, finished, id});

    return (
        <li className='item'>
            <h3>
                {task}
            </h3>
            <span>
                {time}
            </span>
        </li>
    )
}