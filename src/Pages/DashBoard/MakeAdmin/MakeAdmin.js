import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import './MakeAdmin.css'

const MakeAdmin = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.put(`https://cryptic-hollows-56535.herokuapp.com/addAdmin/${data.email}`)
            .then(function (response) {
                console.log(response)
                if (response.data.modifiedCount) {
                    swal("Make Admin Successfully");
                    reset();
                }
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