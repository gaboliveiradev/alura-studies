import React from 'react'
import './style.scss'

export default function ClockComponent() {
    return(
        <React.Fragment>
            <span className='relogioNumero'>0</span>
            <span className='relogioNumero'>0</span>
            <span className='relogioDivisao'>:</span>
            <span className='relogioNumero'>0</span>
            <span className='relogioNumero'>0</span>
        </React.Fragment>
    )
}