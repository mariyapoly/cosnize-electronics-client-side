import axios from 'axios';
import React from 'react';

const SingleOrder = ({ product }) => {

    const { img, name, price, status, _id } = product;

    const handleDeleteBtn = () => {
        axios.delete(`http://localhost:5000/cartProduct/${_id}`)
            .then(function (response) {
            })
    }

    return (
        <tr>
            <td > <button onClick={handleDeleteBtn} className='delete-btn'>X</button> </td>
            <td><img src={img} alt="" /></td>
            <td>{name}</td>
            <td>${price}</td>
            <td>{status}</td>
        </tr>
    );
};

export default SingleOrder;