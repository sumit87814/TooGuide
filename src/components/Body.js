import resObj from "../utils/mockData.js";
import RestaurantCard from "./Restaurentcard.js";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.js";

const Body = () => {
  const [listofRestaurents, setListofRestaurents] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

const fetchData = async () => {
  const data = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
  );

  const json = await data.json();

  const restaurants =
    json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

  setListofRestaurents(restaurants || []);

};
//conditional rendering
  if (listofRestaurents.length === 0) {
    return <Shimmer/>;
  }

    return(
      <div className="body">
            <div className="filter">
          <button className="filter-btn" onClick={() => {
            const filterList = listofRestaurents.filter((r) => r.info.avgRating > 4.3);
            setListofRestaurents(filterList);
          }
          }>Filter Top Rated</button>
        </div>
        <div className="res-container">
        {listofRestaurents.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))}
        </div>
      </div>
    );
}
export default Body;