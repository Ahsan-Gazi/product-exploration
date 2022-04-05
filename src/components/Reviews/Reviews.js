import React from 'react';
import useReview from '../../Hooks/useReview';
import Users from '../Users/Users';

const Reviews = () => {
const[users]=useReview()
    return (
        <div className="review-container">
      {users.map(user=><Users key={user.id} user={user}></Users>)}
    </div>
    );
};

export default Reviews;