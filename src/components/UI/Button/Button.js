import React from 'react'
import classes from './Button.module.css'

const Button = props => {
    console.log(props)
    const cls = [
        classes.Button,
        classes[props.type]
    ]
    return (
        <button
            onClick={props.onClick}
            className={cls.join(' ')}
            disables={props.disabled}
        >
            {props.children}
        </button>
    )
}

export default Button