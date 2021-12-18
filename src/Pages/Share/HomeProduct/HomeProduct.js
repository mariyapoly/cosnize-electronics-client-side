import React from 'react';
import { Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import hart from '../../../images/hart.png';
import view from '../../../images/quick view.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import useAuth from '../../../hooks/useAuth';

const HomeProduct = ({ product }) => {

    const { name, img, price, _id } = product;
    const { user } = useAuth();
    const navgation = useNavigate();

    const handleCartBtn = () => {
        navgation(`/ProductsDetails/${_id}`)
    }
    const handleViewtBtn = () => {
        navgation(`/ProductsDetails/${_id}`)
    }

    const handleWhisListBtn = () => {
        axios.post('https://cryptic-hollows-56535.herokuapp.com/wishListProduct', {
            name: name,
            img: img,
            price: price,
            email: user?.email,
        })
            .then(function (response) {
                if (response.data.insertedId) {
                    swal("Product saved to Whish List");
                }
            })
    }

    return (
        <Col lg={4} className='p-0'>
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
                    <button onClick={handleViewtBtn} className='quick-veiw-btn'><img src={view} alt="hart" /></button>
                </div>
            </div>
        </Col>
    )
};

export default HomeProduct;