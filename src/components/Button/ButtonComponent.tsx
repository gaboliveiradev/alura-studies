import React from 'react';
import './style.scss';

export default function ButtonComponent(props: {children: string, type: "button" | "submit" | "reset" | undefined, onClick?: () => void}) {
    return (
        <div>
            <button onClick={props.onClick} className='botao' type={props.type}>
                {props.children}
            </button>
        </div>
    )
}