import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";

const data = require("../utils/MOCK_DATA.json");

const Body = () => {
  const [res, setRes] = useState(data);
  const [text, setText] = useState("Top Rated Restaurants");

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredData = data.filter((item) => item.rating > 3);
            setRes(filteredData);
          }}
        >
          {text}
        </button>
      </div>
      <div className="res-container">
        {res.map((item) => (
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

export default Body;
