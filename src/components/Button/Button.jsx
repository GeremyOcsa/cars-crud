import React from 'react'
import styles from './button.module.css'


function Button({ type, onClick, title }) {
    return (
        <button className={styles.button}
            type={type}
            onClick={onClick}>
            {title}
        </button>
    )
}

export default Button
