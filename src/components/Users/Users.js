import React from 'react';
import './Users.css';

const Users = ({user}) => {
    // console.log('props',props)
    const {ratings,name,img,review} = user;
    return (
        
        <div className='card'>
            <div className=''>
            <img className='imgCard' src={img} alt=''/>
            </div>
           <div>
           <p className='name'>Name: {name}</p>
           <p className='review'>Review: {review}</p>
            <p className='rating'>Ratings: {ratings}</p>
           </div>
           
            
        </div>




    );
};

export default Users;