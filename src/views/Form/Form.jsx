import React, { useState } from 'react'
import Fields from '../../components/Fields/Fields'
import Button from '../../components/Button/Button'
import Select from '../../components/Select/Select'
import Navbar from '../../components/Navbar/Navbar';
import styles from './form.module.css'
import axios from 'axios';

function Form() {
    const [formData, setFormData] = useState({
        brand: '',
        model: '',
        fuel_name:'',
        power: '',
        color: '',
        release_year: '',
        uri: ''
    })

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'file' ? files[0] : value
        }));
    };

    const handleSelectChange = (e) => {
        const { value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            fuel_name: value
        }));
    };

    const handleSubmit = async () => {
        const data = new FormData();
        data.append('brand', formData.brand);
        data.append('model', formData.model);
        data.append('fuel_name', formData.fuel_name);
        data.append('power', formData.power);
        data.append('color', formData.color);
        data.append('release_year', formData.release_year);
        data.append('uri', formData.uri);
        if (formData.uri) {
            data.append('uri', formData.uri);
        }

        try {
            const response = await axios.post('http://26.101.183.188:3000/api/vehicle/insertVehicle64', data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log('Success:', response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <>
            <Navbar></Navbar>
            <div className={styles.formStyle}>
                <Fields label='marca' type='text' name='brand' value={formData.brand} onChange={handleChange}></Fields>
                <Fields label='model' type='text' name='model' value={formData.model} onChange={handleChange}></Fields>
                <div className={styles.rowStyle}>
                    <Select
                    name='fuel_name'
                    value={formData.fuel_name}
                    onChange={handleSelectChange}>                      
                    </Select>
                </div>
                <Fields label='poder' type='text' name='power' value={formData.power} onChange={handleChange}></Fields>
                <Fields label='color' type='text' name='color' value={formData.color} onChange={handleChange}></Fields>
                <Fields label='año de Lanzamiento' name='release_year' value={formData.release_year} onChange={handleChange}></Fields>
                <div className={styles.rowStyle}>
                    <Fields label='foto' type='file' name='uri' onChange={handleChange}></Fields>
                </div>
                <Button type='button' title='Guardar' onClick={handleSubmit}></Button>
            </div>
        </>
    )
}

export default Form