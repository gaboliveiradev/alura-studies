import ButtonComponent from "../Button/ButtonComponent";
import ClockComponent from "./Clock/ClockComponent";

import './style.scss'

export default function StopwatchComponent() {
    return (
        <div className="cronometro">
            <p className="titulo">Escolha um card e inicie o cronômetro</p>
            <div className="relogioWrapper">
                <ClockComponent />
            </div>
            <ButtonComponent>
                Iniciar
            </ButtonComponent>
        </div>
    )
}