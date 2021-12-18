import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import SingleProduct from '../../Share/SingleProduct/SingleProduct';
import swal from 'sweetalert';
import './ManageAllProducts.css'

const ManageAllProducts = () => {

    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get('https://cryptic-hollows-56535.herokuapp.com/allProduct')
            .then(function (response) {
                setProducts(response.data);
            })
    }, [products])

    const handleDeletePd = (id) => {


        swal({
            title: "Are you sure?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axios.delete(`https://cryptic-hollows-56535.herokuapp.com/allProduct/${id}`)
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

        // axios.delete(`https://cryptic-hollows-56535.herokuapp.com/allProduct/${id}`)
        //     .then(function (response) {
        //     })
    }

    return (
        <div className='manage-home-products'>
            <Row>
                {
                    products.map(product => <SingleProduct
                        handleDeletePd={handleDeletePd}
                        key={product._id}
                        product={product}
                    ></SingleProduct>)
                }
            </Row>

        </div>
    );
};

export default ManageAllProducts;