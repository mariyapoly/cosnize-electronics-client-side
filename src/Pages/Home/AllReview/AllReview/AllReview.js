import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Review from '../Review/Review';

const AllReview = () => {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        axios.get('https://cryptic-hollows-56535.herokuapp.com/allReview')
            .then(function (response) {
                setReviews(response.data);
            })

    }, [])

    return (
        <div>
            <Container>
                <Row>
                    {
                        reviews.map(review => <Review
                            review={review}
                        ></Review>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default AllReview;