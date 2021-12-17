import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './MakeAdmin.css'

const MakeAdmin = () => {

    const { register, handleSubmit, } = useForm();
    const onSubmit = data => {
        axios.put(`http://localhost:5000/makeAdmin/${data.email}`)
            .then(function (response) {
            })
    };


    return (
        <div className='make-admin product-table' >
            <h4>Make Admin</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="email">Username or email  *</label>
                <input required id='email' {...register("email")} />
                <input className='submit-btn' type="submit" value="Make Addmin" />
            </form>
        </div>
    );
};

export default MakeAdmin;