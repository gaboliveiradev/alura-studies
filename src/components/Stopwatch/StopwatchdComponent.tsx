import timeToSeconds from "../../common/utils/date";
import ButtonComponent from "../Button/ButtonComponent";
import ClockComponent from "./Clock/ClockComponent";

import './style.scss'

export default function StopwatchComponent() {
    console.log('Convertido: ', timeToSeconds('01:30:00'));

    return (
        <div className="cronometro">
            <p className="titulo">Escolha um card e inicie o cronômetro</p>
            <div className="relogioWrapper">
                <ClockComponent />
            </div>
            <ButtonComponent type='button'>
                Iniciar
            </ButtonComponent>
        </div>
    )
}