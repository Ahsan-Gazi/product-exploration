import React from 'react';

const Users = ({user}) => {
    // console.log('props',props)
    const {ratings,name,img} = user;
    return (
        <div>
            <div className=''>
            <img src={img} alt=''/>
            </div>
           <div>
           <h2>{name}</h2>
            <h2>{ratings}</h2>
           </div>
           
            
        </div>
    );
};

export default Users;