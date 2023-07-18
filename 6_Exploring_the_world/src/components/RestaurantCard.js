import { cardImage } from "../utils/constants";
const RestaurantCard = ({
  restaurant_name,
  cuisine_type,
  rating,
  price_range,
  location,
}) => {
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={cardImage}
        alt="res-card-img"
      />
      <h3>{restaurant_name}</h3>
      <p>{cuisine_type}</p>
      <p>{rating}</p>
      <p>{price_range}</p>
      <p>{location}</p>
    </div>
  );
};

export default RestaurantCard;