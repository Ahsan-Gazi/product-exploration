import React from 'react';
import useReview from '../../Hooks/useReview';
import Users from '../Users/Users';

const Home = () => {
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
               
            </div>
        </div>
    );
};

export default Home;