import React from 'react';
import { useNavigate } from 'react-router-dom';

import useReview from '../../Hooks/useReview';
import Users from '../Users/Users';


import './Home.css';

const Home = () => {
    const navigate = useNavigate();
    // const[review,setReview]=useReview()
    // const [review, setReviews] = useReview();
    const [users] = useReview();
    return (
        <div>

            {/* <h1>{users.length}</h1> */}
            <div>

            </div>
            <div>
                <h1>Customer review:{users.slice(0,3).length}</h1>
                {users.slice(0,3).map((user)=><Users key={user.id} user={user}></Users>)}
                {/* <button className='seeAllPage'>See all reviews</button> */}
                <button className='seeAllPage' onClick={() => navigate("/reviews")}>See all reviews.. </button>
               
            </div>
        </div>
    );
};

export default Home;