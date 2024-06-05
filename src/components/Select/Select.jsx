import React, { useEffect, useState } from 'react'
import styles from './select.module.css'
import axios from 'axios'

function Select({name, value, onChange}) {

    const [fuels, setFuels] = useState([])

    useEffect(() => {
        axios.get('http://26.101.183.188:3000/api/fuel/allFuel')
            .then(response => {
                setFuels(response.data)
            })
            .catch(error => {
                console.error('There was an error fetching the fuel data!', error);
            })
    }, [])

    return (
        <div className={styles.container}>
            <label htmlFor='fuentePoder'>Fuente de Poder</label>
            <select className={styles.select} name={name} value={value} onChange={onChange}>
                {fuels.map((fuel) => (
                    <option key={fuel.id} value={fuel.name}>
                        {fuel.name}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default Select
