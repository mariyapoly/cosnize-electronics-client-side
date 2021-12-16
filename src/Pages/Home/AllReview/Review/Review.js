import React from 'react';

const Review = ({ review }) => {

    const { name, des, images } = review;

    return (
        <div>
            <img src={`data:image/png;base64,${images}`} alt="" />
            <h5>{name}</h5>
            <p>{des}</p>
        </div>
    );
};

export default Review;