import { CDN_URL } from "../utilis/constants";


const RestaurantCard = (props) => {
    const {resData} = props;

const {name, cuisines, costForTwo, avgRating, cloudinaryImageId, id} = resData?.info;
const { deliveryTime } = resData?.info.sla;

    return (
            <div className="resatCard">
                    <img src={CDN_URL + cloudinaryImageId} />
                    <h3 className="mCusines">{name}</h3>
                    <h4 className="mCusines">{cuisines.join(", ")}</h4>
                    <h3>{costForTwo}</h3>
                    <h4>{deliveryTime} mins</h4>
                    <h4>{avgRating}</h4>
            </div>
    )
};

export default RestaurantCard;