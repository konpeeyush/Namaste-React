import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://pluspng.com/img-png/restaurant-png-hd-fast-food-restaurant-logos-1024.png"
          alt="Not available"
        />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const data = require("./Assets/MOCK_DATA.json");

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
        src="https://b.zmtcdn.com/data/pictures/chains/9/18438909/8ac67f799c14cd3b586e18e48eaa00f7_o2_featured_v2.jpg?output-format=webp"
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

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input type="text" placeholder="Search for restaurants" />
      </div>
      <div className="res-container">
        {data.map((item) => (
          <RestaurantCard
            key={item.id}
            restaurant_name={item.restaurant_name}
            cuisine_type={item.cuisine_type}
            rating={item.rating}
            price_range={item.price_range}
            location={item.location}
          />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
