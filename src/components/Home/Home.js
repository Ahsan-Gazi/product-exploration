import React from 'react';
import { useNavigate } from 'react-router-dom';

import useReview from '../../Hooks/useReview';
import Users from '../Users/Users';
import image1 from '../../image/camera.jpg';
import './Home.css';


import './Home.css';

const Home = () => {
    const navigate = useNavigate();
    // const[review,setReview]=useReview()
    // const [review, setReviews] = useReview();
    const [users] = useReview();
    return (
        <div>

            {/* <h1>{users.length}</h1> */}
            <div className='staticImg'>
                    <div>
                         <img  src={image1} alt=''/>
                    </div>
                     <div>
                         <h2>Camera Description</h2>
                    <p>Triple:<span>40 MP, f/1.8, 27mm, 1/1.7", OIS,8 MP</span></p>
                    <p>Features:<span>	Leica optics, LED flash, HDR, panorama</span></p>
                    <p>Video:<span>2160p@30fps, 1080p@60fps, 1080p@30fps (gyro-EIS), 720p@960fps</span></p>
                    <p><span></span></p>
                     </div>
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