import axios from 'axios';
import React from 'react';
import useAuth from '../../../hooks/useAuth';

const SingleOrder = ({ product }) => {

    const { img, name, price, status, _id } = product;
    const { user } = useAuth();
    const handleDeleteBtn = () => {
        axios.delete(`http://localhost:5000/cartProduct/${_id}`)
            .then(function (response) {
            })
    }
    const handleDeleteBtn2 = () => {
        axios.delete(`http://localhost:5000/wishListProduct/${_id}`)
            .then(function (response) {
            })
    }
    const handleCartBtn = () => {
        axios.post('http://localhost:5000/cartProduct', {
            name: name,
            img: img,
            price: price,
            email: user?.email,
            status: 'pending',
        })
            .then(function (response) {
            })

        axios.delete(`http://localhost:5000/wishListProduct/${_id}`)
            .then(function (response) {
            })
    }

    return (
        <tr>
            <td className='btn1'> <button onClick={handleDeleteBtn} className='delete-btn'>X</button> </td>
            <td className='btn2'> <button onClick={handleDeleteBtn2} className='delete-btn'>X</button> </td>
            <td><img src={img} alt="" /></td>
            <td>{name}</td>
            <td>${price}</td>
            <td className='status'>{status}</td>
            <td className='order'><button onClick={handleCartBtn} className='cart-btn'>Add To Cart</button></td>
        </tr>
    );
};

export default SingleOrder;