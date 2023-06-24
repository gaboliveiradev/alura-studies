export default function ItemComponent(props: {task: string, time: string}) {
    return (
        <li className='item'>
            <h3>
                {props.task}
            </h3>
            <span>
                {props.time}
            </span>
        </li>
    )
}