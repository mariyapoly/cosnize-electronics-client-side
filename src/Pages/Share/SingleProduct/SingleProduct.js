import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import hart from '../../../images/hart.png';
import view from '../../../images/quick view.png';
import './SingleProduct.css'
import { Col } from 'react-bootstrap';

const SingleProduct = ({ product }) => {

    const { name, img, price } = product
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
                    <button className='cart-btn'>Add To Cart</button>
                    <button className='whislist-btn'><img src={hart} alt="hart" /></button>
                    <button className='quick-veiw-btn'><img src={view} alt="hart" /></button>
                </div>
            </div>
        </Col>
    );
};

export default SingleProduct;