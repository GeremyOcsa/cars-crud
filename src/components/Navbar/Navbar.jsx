import React from 'react'
import styles from './navbar.module.css'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <ul className={styles.navbarStyle}>
                <li>
                    <Link to="/form">Registro</Link>
                </li>
                <li>
                    <Link to="/inventario">Inventario</Link>
                </li>
            </ul>
        </> 
    )
}

export default Navbar