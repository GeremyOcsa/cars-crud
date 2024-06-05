import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button'
import styles from './home.module.css'; 

function Home() {
    return (
        <div className={styles.container}>
            <h1>Bienvenido</h1>
            <Link to="/form">
                <Button type='button' title='Iniciar'></Button>
            </Link> 
        </div>
    )
}

export default Home
