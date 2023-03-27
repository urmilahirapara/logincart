import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../contants";
const useRestaurant = (resId) => {
  const [restaurants, setRestaurants] = useState(null);
  useEffect(() => {
    getRestaurantsIntfo();
  }, []);
  async function getRestaurantsIntfo() {
    const data = await fetch(
        FETCH_MENU_URL+
        resId
    );
    const json = await data.json();

    setRestaurants(json?.data);
  }
  return restaurants;
};

export default useRestaurant;
