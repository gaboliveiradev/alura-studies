import React from 'react';
import './style.scss';

export default function ButtonComponent(props: {children: string, type: "button" | "submit" | "reset" | undefined }) {
    return (
        <div>
            <button className='botao' type={props.type}>
                {props.children}
            </button>
        </div>
    )
}