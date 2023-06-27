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

    const regressive = (time: number = 0) =>{
        // Função Recursiva, executar a função dentro dela mesmo (basicamente um do while)
        setTimeout(() => {
            if(time > 0) {
                setTime(time - 1);
                return regressive(time - 1);
            }
        }, 1000);
    }

    return (
        <div className="cronometro">
            <p className="titulo">Escolha um card e inicie o cronômetro</p>
            <div className="relogioWrapper">
                <ClockComponent time={time} />
            </div>
            <ButtonComponent type='button' onClick={() => regressive(time)}>
                Iniciar
            </ButtonComponent>
        </div>
    )
}