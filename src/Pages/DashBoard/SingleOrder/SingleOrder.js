import axios from 'axios';
import React from 'react';
import swal from 'sweetalert';
import useAuth from '../../../hooks/useAuth';

const SingleOrder = ({ product }) => {

    const { img, name, price, status, _id, payment } = product;
    const { user } = useAuth();
    const handleDeleteBtn = () => {

        swal({
            title: "Are you sure?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axios.delete(`https://cryptic-hollows-56535.herokuapp.com/cartProduct/${_id}`)
                        .then(function (response) {
                            if (response.datadeletedCount) {
                                swal("Product Delete Successfully", {
                                    icon: "success",
                                });
                            }
                        })

                } else {
                    swal("Your Product is safe!");
                }
            });

    }
    const handleDeleteBtn2 = () => {

        swal({
            title: "Are you sure?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axios.delete(`https://cryptic-hollows-56535.herokuapp.com/wishListProduct/${_id}`)
                        .then(function (response) {
                            if (response.datadeletedCount) {
                                swal("Product Delete Successfully", {
                                    icon: "success",
                                });
                            }
                        })

                } else {
                    swal("Your Product is safe!");
                }
            });
    }
    const handleCartBtn = () => {
        axios.post('https://cryptic-hollows-56535.herokuapp.com/cartProduct', {
            name: name,
            img: img,
            price: price,
            email: user?.email,
            status: 'pending',
        })
            .then(function (response) {
                if (response.data.insertedId) {
                    swal("Product saved to order Cart");
                }
            })

        axios.delete(`https://cryptic-hollows-56535.herokuapp.com/wishListProduct/${_id}`)
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
            <td className='status'>{
                payment ? 'paid' : 'unpaid'
            }</td>
            <td className='order'><button onClick={handleCartBtn} className='cart-btn'>Add To Cart</button></td>
        </tr>
    );
};

export default SingleOrder;