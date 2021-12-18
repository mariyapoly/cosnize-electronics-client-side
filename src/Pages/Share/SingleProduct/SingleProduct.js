import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import hart from '../../../images/hart.png';
import view from '../../../images/quick view.png';
import './SingleProduct.css'
import { Col } from 'react-bootstrap';
import axios from 'axios';
import useAuth from '../../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const SingleProduct = ({ product, handleDeletePd }) => {

    const { name, img, price, _id } = product

    const { user } = useAuth();
    const navgation = useNavigate();

    const handleCartBtn = () => {
        navgation(`/CameraProducts/${_id}`)
    }
    const handleViewtBtn = () => {
        navgation(`/CameraProducts/${_id}`)
    }

    const handleWhisListBtn = () => {
        axios.post('http://localhost:5000/wishListProduct', {
            name: name,
            img: img,
            price: price,
            email: user?.email,
        })
            .then(function (response) {
            })
    }

    return (
        <Col lg={3} className='p-0'>
            <div className='single-product'>
                <div className="single-pd-thumb">
                    <img src={img} alt="" />
                </div>
                <p>{name}</p>
                <div className="rating">
                    <FontAwesomeIcon className='rating-icon' icon={faStar} />
                    <FontAwesomeIcon className='rating-icon' icon={faStar} />
                    <FontAwesomeIcon className='rating-icon' icon={faStar} />
                    <FontAwesomeIcon className='rating-icon' icon={faStar} />
                    <FontAwesomeIcon className='rating-icon' icon={faStarHalfAlt} />
                </div>
                <span className="pricing">${price}</span>
                <div className='product-btn'>
                    <button onClick={handleCartBtn} className='cart-btn'>Add To Cart</button>
                    <button onClick={handleWhisListBtn} className='whislist-btn'><img src={hart} alt="hart" /></button>
                    <button onClick={handleViewtBtn} className='quick-veiw-btn'><img src={view} alt="view" /></button>
                </div>
                <button onClick={() => handleDeletePd(_id)} className='delete-pd-btn cart-btn'>Delete Product</button>
            </div>
        </Col>
    );
};

export default SingleProduct;