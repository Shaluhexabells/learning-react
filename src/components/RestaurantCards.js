import { CDN_URL } from "../utils/constant";


export const RestaurantCards = (props) => {
    const {restData } = props;

    // we have destructured the props again. "?" - this is optional chaining
    const {cloudinaryImageId , name, cuisines, avgRating, deliveryTime, costForTwo } = restData?.data;
    return (
        <div className="res-cards">
            <div className="thumbnail">
                <img src={CDN_URL + cloudinaryImageId } 
                alt="restaurant cover"/>
            </div>
            <div className="details">
                <h3 className="res-name">{name}</h3>
                <div className="cuisines">{cuisines.join(", ")}</div>
                <div className="flexHead">
                    <div className="rating">{avgRating} Star</div>
                    <div className="eta">{deliveryTime} min</div>
                    <div className="price">₹{costForTwo / 100} FOR TWO</div>
                </div>
                <div className="discount">
                    10% Off | Use code SPECIAL10
                </div>
            </div>
        </div>
    )
}
