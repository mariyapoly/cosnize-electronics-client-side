
import React from 'react';
import { Table } from 'react-bootstrap';
import useOrder from '../../../hooks/useOrder';
import SingleOrder from '../SingleOrder/SingleOrder';
import './WishList.css'

const WishList = () => {

    const { wishProducts } = useOrder();


    return (
        <div className='wishList-part product-table'>
            <h4>My Wishlist</h4>
            <Table bordered responsive>
                <thead>
                    <tr>
                        <th>Delete</th>
                        <th>Image</th>
                        <th>Product Name</th>
                        <th>Unit Price</th>
                        <th>Cart Product</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        wishProducts.map(product => <SingleOrder
                            key={product._id}
                            product={product}
                        ></SingleOrder>
                        )
                    }

                </tbody>
            </Table>

        </div >
    );
};

export default WishList;