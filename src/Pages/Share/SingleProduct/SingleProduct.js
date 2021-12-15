import React from 'react';
import pd4 from '../../../images/product-4.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import hart from '../../../images/hart.png';
import view from '../../../images/quick view.png';
import './SingleProduct.css'

const SingleProduct = () => {
    return (
        <div className='single-product'>
            <img src={pd4} alt="" />
            <p>Headphone Black</p>
            <div className="rating">
                <FontAwesomeIcon className='rating-icon' icon={faStar} />
                <FontAwesomeIcon className='rating-icon' icon={faStar} />
                <FontAwesomeIcon className='rating-icon' icon={faStar} />
                <FontAwesomeIcon className='rating-icon' icon={faStar} />
                <FontAwesomeIcon className='rating-icon' icon={faStarHalfAlt} />
            </div>
            <span className="pricing">$218.00</span>
            <div className='product-btn'>
                <button className='cart-btn'>Add To Cart</button>
                <button className='whislist-btn'><img src={hart} alt="hart" /></button>
                <button className='quick-veiw-btn'><img src={view} alt="hart" /></button>
            </div>
        </div>
    );
};

export default SingleProduct;