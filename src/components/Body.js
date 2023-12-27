import {RestaurantCards} from "./RestaurantCards";
import restaurantList from "../utils/mockData";
import { useState } from "react";



// // Normal JS Variable
// let listOfRestaurants = [];



let listOfRestaurantsJS = [
    {
        data: {
          id: "74453",
          name: "Domino's Pizza",
          cloudinaryImageId: "bz9zkh2aqywjhpankb07",
          cuisines: ["Pizzas"],
          costForTwo: 40000,
          deliveryTime: 45,
          avgRating: "3.5",
        },
      },
      {
        data: {
          id: "74454",
          name: "The Brooklyn Creamery - Healthy Ice Cream",
          cloudinaryImageId: "ldtibwymvzehvmdwl8la",
          cuisines: ["Desserts", "Ice Cream", "Healthy Food"],
          costForTwo: 20000,
          deliveryTime: 31,
          avgRating: "4.4",
        },
      }, 
]



  const Body = () => {

    // Local State Varibale = super powerful react variable
    let [listOfRestaurants, setRestaurants] = useState(restaurantList);

    const Search = () => {
        return (
            <div className="search-div">
                {/* <form>
                    <input type="search" placeholder="Search"/>
                    <button className="btn" onClick={() => {
                        console.log("Btn clicked");
                    }}>Go</button>
                </form> */}
                <button className="btn" onClick={() => {
                        // console.log("Btn clicked");
                        setRestaurants(listOfRestaurants = listOfRestaurants.filter((res) => res.data.avgRating > 4));
                        
                        console.log(listOfRestaurants);
                    }}>Top Rated Restaurant</button>
            </div>
        )
    }
    
    return (
        <div className="res-container">
             <div className="custom-container ">
                  <Search />
                  <div className="res-wrapper flex">
                  {listOfRestaurants.map((restaurant) => (
                    <RestaurantCards key={restaurant.data.id} restData={restaurant}/> 
                  ))}
                      {/* <RestaurantCards restData={restaurantList[0]} /> */}
                  </div>
             </div>
        </div>
    )
}

export default Body;