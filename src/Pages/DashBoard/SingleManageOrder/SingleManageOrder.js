import axios from 'axios';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import swal from 'sweetalert';
import './SingleManageOrder.css'


const SingleManageOrder = ({ product }) => {

    const { img, name, price, status, _id, email } = product;
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
    const handleUpdatetBtn = () => {
        axios.put(`https://cryptic-hollows-56535.herokuapp.com/statusProduct/${_id}`)
            .then(function (response) {
                if (response.data.modifiedCount) {
                    swal("Product Status UpDated");
                }
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