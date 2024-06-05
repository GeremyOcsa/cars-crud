import React, { useEffect, useState } from 'react'
import styles from './inventory.module.css'
import Navbar from '../../components/Navbar/Navbar'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function Inventory() {

    const[vehicles, setVehicles] = useState([])

    useEffect(()=>{
        axios.get('http://26.101.183.188:3000/api/vehicle/allVehicle')
        .then(response => {
            setVehicles(response.data)
        })
        .catch(error =>{
            console.error('Hubo un error', error);
        })
    }, [])

    const handleDelete = (index) =>{
        const newImages = [...vehicles]
        newImages.splice(index, 1)
        setVehicles(newImages)
    }

    // const handleDelete = (id, index) => {
    //     axios.delete(`http://26.101.183.188:3000/api/vehicle/delete/${id}`)
    //         .then(response => {
    //             if (response.status === 200) {
    //                 const newVehicles = [...vehicles];
    //                 newVehicles.splice(index, 1);
    //                 setVehicles(newVehicles);
    //             }
    //         })
    //         .catch(error => {
    //             console.error('There was an error deleting the vehicle!', error);
    //         });
    // };

    return (
        <>
            <Navbar />
            <div className={styles.container}>
                {vehicles.map((vehicle, index) => (
                    <div key={index} className={styles.card}>
                        <img className={styles.image} src={vehicle.vehicle_photos} alt={`Vehiculo ${index + 1}`} />
                        <h4>{vehicle.model}</h4>
                        <p>{vehicle.brand}</p>
                        <p>{vehicle.fuels.name}</p>
                        <p>{vehicle.power}</p>
                        <p>{vehicle.color}</p>
                        <p>{vehicle.release_year}</p>
                        <button href="#"><FontAwesomeIcon icon={faPenToSquare} /></button>
                        <button onClick={() => handleDelete(index)}><FontAwesomeIcon icon={faTrash} /></button>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Inventory