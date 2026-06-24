import resObj from "../utils/mockData.js";
import RestaurantCard from "./Restaurentcard.js";
import { useState } from "react";

const Body = () => {
  const [listofRestaurents, setListofRestaurents] = useState(resObj.restaurants);



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