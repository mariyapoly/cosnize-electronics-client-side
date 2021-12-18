import React, { useEffect, useRef, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import headphone1 from '../../../images/headerphone-1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import hart from '../../../images/hart.png';
import view from '../../../images/quick view.png';
import pd1 from '../../../images/product-1.png';
import pd2 from '../../../images/product-2.png';
import pd3 from '../../../images/product-3.png';
import './ProductOfferSlider.css'
import { useNavigate } from 'react-router-dom';


const ProductOfferSlider = () => {

    // declear countDown state
    const [timeDays, setTimeDays] = useState('00');
    const [timeHours, setTimeHours] = useState('00');
    const [timeMinutes, setTimeMinutes] = useState('00');
    const [timeSeconds, setTimeSeconds] = useState('00');
    const navigate = useNavigate();

    let interval = useRef();
    // function for countdown 
    const startTimer = () => {
        const countDownDate = new Date('August 30, 2023 00:00:00').getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownDate - now;
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                clearInterval(interval)
            } else {
                setTimeDays(days);
                setTimeHours(hours);
                setTimeMinutes(minutes);
                setTimeSeconds(seconds)
            }
        }, 1000)
    }
    // declear useEffect for one time call startTimer function
    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval)
        }
    }, [])

    const handleCartBtn = () => {
        navigate('/Shope')
    }


    return (
        <div className='slide-product-part'>
            <Container>
                <Row>
                    <Col lg={8}>
                        <div className="product-slider">
                            <h3>DEAL OF THE DAYS PRODUCTS</h3>
                            <div className="product-container">
                                <div className="product-thumb">
                                    <img src={headphone1} alt="headphone" />
                                </div>
                                <div className="product-caption">
                                    <h5>Headphone Black</h5>
                                    <div className="rating">
                                        <FontAwesomeIcon className='rating-icon' icon={faStar} />
                                        <FontAwesomeIcon className='rating-icon' icon={faStar} />
                                        <FontAwesomeIcon className='rating-icon' icon={faStar} />
                                        <FontAwesomeIcon className='rating-icon' icon={faStar} />
                                        <FontAwesomeIcon className='rating-icon' icon={faStar} />
                                    </div>
                                    <span className="price">$165.00</span>
                                    <p>It is a long established fact that a reader will be distracted by the readable when looking at its layout. The point of using make sure</p>
                                    <div>
                                        <button onClick={handleCartBtn} className='cart-btn'>Add To Cart</button>
                                        <button onClick={handleCartBtn} className='whislist-btn'><img src={hart} alt="hart" /></button>
                                        <button onClick={handleCartBtn} className='quick-veiw-btn'><img src={view} alt="hart" /></button>
                                    </div>
                                    <div className='count-down'>
                                        <div className="single-count">
                                            <h5>{timeDays}</h5>
                                            <span>Days</span>
                                        </div>
                                        <div className="single-count">
                                            <h5>{timeHours}</h5>
                                            <span>Hrs</span>
                                        </div>
                                        <div className="single-count">
                                            <h5>{timeMinutes}</h5>
                                            <span>Min</span>
                                        </div>
                                        <div className="single-count">
                                            <h5>{timeSeconds}</h5>
                                            <span>Sec</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="best-selling-products">
                            <h5>Best Selling</h5>
                            <div className="single-selling-pd">
                                <div className="product-thumb">
                                    <img src={pd1} alt="" />
                                </div>
                                <div className="product-caption">
                                    <p>Desktop Webcam,Hd 720P Widescreen</p>
                                    <div className="rating">
                                        <FontAwesomeIcon className='rating-icon' icon={faStar} />
                                        <FontAwesomeIcon className='rating-icon' icon={faStar} />
                                        <FontAwesomeIcon className='rating-icon' icon={faStar} />
                                        <FontAwesomeIcon className='rating-icon' icon={faStar} />
                                        <FontAwesomeIcon className='rating-icon' icon={faStarHalfAlt} />
                                    </div>
                                    <span>$35.00</span>
                                </div>
                            </div>
                            <div className="single-selling-pd">
                                <div className="product-thumb">
                                    <img src={pd2} alt="" />
                                </div>
                                <div className="product-caption">
                                    <p>Headphone Black,Hd 720P Widescreen</p>
                                    <div className="rating">
                                        <FontAwesomeIcon className='rating-icon' icon={faStar} />
                                        <FontAwesomeIcon className='rating-icon' icon={faStar} />
                                        <FontAwesomeIcon className='rating-icon' icon={faStar} />
                                        <FontAwesomeIcon className='rating-icon' icon={faStar} />
                                        <FontAwesomeIcon className='rating-icon' icon={faStarHalfAlt} />
                                    </div>
                                    <span>$32.00</span>
                                </div>
                            </div>
                            <div className="single-selling-pd">
                                <div className="product-thumb">
                                    <img src={pd3} alt="" />
                                </div>
                                <div className="product-caption">
                                    <p>Smart Phone Webcam,Hd 720P Galaxy S10 Plus</p>
                                    <div className="rating">
                                        <FontAwesomeIcon className='rating-icon' icon={faStar} />
                                        <FontAwesomeIcon className='rating-icon' icon={faStar} />
                                        <FontAwesomeIcon className='rating-icon' icon={faStar} />
                                        <FontAwesomeIcon className='rating-icon' icon={faStar} />
                                        <FontAwesomeIcon className='rating-icon' icon={faStarHalfAlt} />
                                    </div>
                                    <span>$65.00</span>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ProductOfferSlider;