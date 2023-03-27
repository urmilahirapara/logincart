import { useState, useEffect } from "react";
import {FETCH_ALL_DATA} from "../contants";
const useAllRestaurant=()=>{
    const [allRestaurants, setRestaurants] = useState([]);
    
    useEffect(() => {
        getRestaurants();
      }, []);
    
      async function getRestaurants() {
        const data = await fetch(FETCH_ALL_DATA);
        const json = await data.json();
        
        setRestaurants(json?.data?.cards[2]?.data?.data?.cards);
      }
      return allRestaurants;
}
export default useAllRestaurant;