import React from 'react';
import '../../styles/ReviewCard.css';
import BasicRating from './BasicRating';

function ReviewCard({ review }) {
    return (
        <div className='review-card'>
            <BasicRating rating={review.rating} />
            <p className='review_message'>{review.review}</p>
            <p className='reviewer_name'>{review.reviewer}</p>
        </div>
    );
}

export default ReviewCard;