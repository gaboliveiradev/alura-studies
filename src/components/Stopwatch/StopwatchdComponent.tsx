import { useState, useEffect } from 'react';
import { ITask } from "../../types/ITask";
import ButtonComponent from "../Button/ButtonComponent";
import ClockComponent from "./Clock/ClockComponent";
import './style.scss'
import timeToSeconds from '../../common/utils/time';

interface IProps {
    selected: ITask | undefined
}

export default function StopwatchComponent({selected}: IProps) {
    const [time, setTime] = useState<number>();

    useEffect(() => {
        if(selected?.time) {
            setTime(timeToSeconds(selected.time));
        }
    }, [selected]); 

    return (
        <div className="cronometro">
            <p className="titulo">Escolha um card e inicie o cronômetro</p>
            Tempo: {time}
            <div className="relogioWrapper">
                <ClockComponent />
            </div>
            <ButtonComponent type='button'>
                Iniciar
            </ButtonComponent>
        </div>
    )
}