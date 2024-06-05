import React from 'react'
import styles from './fields.module.css'

function Fields({label, type, value, onChange, name}) {
    return (
        <div className={styles.container}>
            <label className={styles.label} htmlFor={label}>{label}</label>
            <input className={styles.input} id={label} name={name} type={type} value={value} onChange={onChange} />
        </div>
    )
}

export default Fields