import { useEffect, useState } from "react"

const useReview=()=>{
    const[users,setUsers]=useState([])
    useEffect( () =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setUsers(data));
    }, []);
    return [users, setUsers];
}
export default useReview;