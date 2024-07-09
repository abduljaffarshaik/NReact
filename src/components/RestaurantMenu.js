import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import constants from "../utilis/constants";
import { Menu_API } from "../utilis/constants";
const RestaurantMenu = () => {

const [resInfo, setResInfo] = useState(null);
const {resId} = useParams();
useEffect(() => {
    fetchMenu();
}, []);

const fetchMenu = async () => {
    const data = await fetch(Menu_API + resId);
    
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
 
};

if(resInfo === null) return <Shimmer/>

const { name, cuisines, costForTwoMessage,avgRating} = resInfo?.cards[2]?.card?.card?.info;

const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
console.log(itemCards);

    return  (
        <div>
            <div>
            <h1>Menu</h1>
            <h2>{name}</h2>
            <h2>{cuisines.join(", ")}</h2>
            <ul>
                {itemCards.map((item) => (
                    <li key={item.card.info.id}>
                        {item.card.info.name} - {"Rs."} {item.card.info.price / 100 || item.card.info.finalPrice / 100 || item.card.info.defaultPrice / 100}
                         </li>
                ))}
            </ul>
            <h2>{costForTwoMessage}</h2>
            <h2>{avgRating}</h2>
            </div>
        </div>
    );
};

export default RestaurantMenu;