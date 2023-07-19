import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const data = require("../utils/MOCK_DATA.json");

const Body = () => {
  const [res, setRes] = useState(data);
  const [text, setText] = useState("Top Rated Restaurants");
  const [searchText, setSearchText] = useState("");
  const[filteredRes, setFilteredRes] = useState(res);

  console.log("Body Rendered")

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    // console.log(data[0]);
  };

  return res.length === 0 ? (
    res.map((item) => (
      <Shimmer key={item.id} />
    ))
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e)=>setSearchText(e.target.value)} />

          <button
            className="search-btn"
            onClick={() => {
              console.log(searchText);
              const filteredData = data.filter((item) =>
                item.restaurant_name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRes(filteredData);
            }}>
            Search
          </button>

        </div>
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
        {filteredRes.map((item) => (
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
