import React from 'react'
import './style.scss'

interface IProps {
    time: number | undefined
}

export default function ClockComponent({ time = 0 }: IProps ) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [minutesTen, minutesUnit] = String(minutes).padStart(2, '0');
    const [secondsTen, secondsUnit] = String(seconds).padStart(2, '0');

    return(
        <React.Fragment>
            <span className='relogioNumero'>{minutesTen}</span>
            <span className='relogioNumero'>{minutesUnit}</span>
            <span className='relogioDivisao'>:</span>
            <span className='relogioNumero'>{secondsTen}</span>
            <span className='relogioNumero'>{secondsUnit}</span>
        </React.Fragment>
    )
}