import React from 'react';
import './style.scss';

export default function ButtonComponent(props: {children: string}) {
    return (
        <div>
            <button className='botao'>
                {props.children}
            </button>
        </div>
    )
}