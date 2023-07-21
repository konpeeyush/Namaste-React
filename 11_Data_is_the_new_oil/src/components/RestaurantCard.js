import { cardImage } from "../utils/constants";
const RestaurantCard = ({
  restaurant_name,
  cuisine_type,
  rating,
  price_range,
  location,
}) => {
  return (
    <div className="res-card m-4 p-4 w-[20rem] bg-red-400 rounded-s-xl">
      <img
        className="res-logo"
        src={cardImage}
        alt="res-card-img"
      />
      <h3 className="font-bold py-4 text-lg">{restaurant_name}</h3>
      <p>{cuisine_type}</p>
      <p>{rating}</p>
      <p>{price_range}</p>
      <p>{location}</p>
    </div>
  );
};

export default RestaurantCard;