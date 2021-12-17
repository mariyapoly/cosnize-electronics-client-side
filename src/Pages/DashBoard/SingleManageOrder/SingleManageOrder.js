import axios from 'axios';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import './SingleManageOrder.css'


const SingleManageOrder = ({ product }) => {

    const { img, name, price, status, _id, email } = product;
    const handleDeleteBtn = () => {
        axios.delete(`http://localhost:5000/cartProduct/${_id}`)
            .then(function (response) {
            })
    }
    const handleUpdatetBtn = () => {
        axios.put(`http://localhost:5000/cartProduct/${_id}`)
            .then(function (response) {
            })
    }

    return (
        <tr>
            <td> <button onClick={handleDeleteBtn} className='delete-btn'><FontAwesomeIcon icon={faTimes} /></button> </td>
            <td><img src={img} alt="" /></td>
            <td>{name}</td>
            <td>{email}</td>
            <td>${price}</td>
            <td className='status'>{status}</td>
            <td className='order'><button onClick={handleUpdatetBtn} className='update-btn'><FontAwesomeIcon icon={faCheck} /></button></td>
        </tr>
    );
};

export default SingleManageOrder;