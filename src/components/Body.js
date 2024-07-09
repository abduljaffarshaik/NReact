import resList from "../utilis/mockdata";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
// import RestaurantMenu from "./RestaurantMenu";
import { Link } from "react-router-dom";
import { Menu_API } from "../utilis/constants";

const Body = () => {
const [listOfRestaurants, setListOfRestaurants] = useState([]);
const [filterRestaurant, setFilterRestaurant] = useState([]);
const [searchText, setsearchText] = useState("");

console.log("Body Rendered");
useEffect(() => {
        fetchData();
}, [])

const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();
        setListOfRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setFilterRestaurant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
};

// if(listOfRestaurants.length == 0) {
//         return <Shimmer/>

// };

    return (listOfRestaurants.length == 0) ? (<Shimmer/>) : ( 
            <div className="bodySec"> 
            <div className="filter_btnSec">
            <div className="filter_sec">
                <input type="text" className="input_search" value={searchText} onChange={(e) => setsearchText(e.target.value)}/>
                <button className="filter_btn"onClick={() => {
                 const filteredRestaurant =   listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLocaleLowerCase()));
                 setFilterRestaurant(filteredRestaurant);
                }}>Search</button>
            </div>
            <div className="filter_sec">
                    <button className="filter_btn" onClick={() => {
                      const filterList = listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4.5
                    );
                    setListOfRestaurants(filterList);
                    }}
                    >
                    Top Rated Restaurants</button>
            </div>
            </div>
            <div className="restaCards">
                    {
                            filterRestaurant.map((restaurant) =>
                                <Link key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id}> <RestaurantCard  resData={restaurant}/></Link>)
                    }
            {/* <RestaurantCard resData={resList[0]}/> */}
            {/* <RestaurantCard resData={resList[1]}/>
            <RestaurantCard resData={resList[2]}/>
            <RestaurantCard resData={resList[3]}/>
            <RestaurantCard resData={resList[4]}/>
            <RestaurantCard resData={resList[5]}/>
            <RestaurantCard resData={resList[6]}/>
            <RestaurantCard resData={resList[7]}/>
            <RestaurantCard resData={resList[8]}/>
            <RestaurantCard resData={resList[9]}/> */}

            </div>
           
            </div>
    );
};

export default Body;