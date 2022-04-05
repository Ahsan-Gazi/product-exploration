import React from 'react';

const Users = ({user}) => {
    // console.log('props',props)
    const {ratings,name,img,review} = user;
    return (
        <div>
            <div className=''>
            <img src={img} alt=''/>
            </div>
           <div>
           <h2>Name: {name}</h2>
           <h2>Review: {review}</h2>
            <h2>Ratings: {ratings}</h2>
           </div>
           
            
        </div>
    );
};

export default Users;