import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useOnline } from "../utils";

const data = require("../utils/MOCK_DATA.json");

const Body = () => {
  const [res, setRes] = useState(data);
  const [text, setText] = useState("Top Rated Restaurants");
  const [searchText, setSearchText] = useState("");
  const [filteredRes, setFilteredRes] = useState(res);

  console.log("Body Rendered")

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    // console.log(data[0]);
  };

  const onlineStatus = useOnline();

  if (onlineStatus === false) return <h1>Look's like you are offline</h1>


  return res.length === 0 ? (
    res.map((item) => (
      <Shimmer key={item.id} />
    ))
  ) : (
    <div className="body">
      <div className="flex items-center justify-center flex-col">
        <div className="p-4 m-4">
          <input
            type="text"
            className="border border-solid border-gray-700 "
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          <button
            className="px-4 bg-green-100 m-4 border rounded-lg"
            onClick={() => {
              const filteredData = data.filter((item) =>
                item.restaurant_name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRes(filteredData);
            }}
          >
            Search
          </button>

        </div>
        <button
          className="p-2 bg-yellow-400 border rounded-lg mb-4 text-center "
          onClick={() => {
            const filteredData = data.filter((item) => item.rating > 3);
            setRes(filteredData);
          }}
        >
          {text}
        </button>
      </div>
      <div className="res-container flex flex-wrap justify-between items-center border m-2 bg-orange-300 rounded-lg">
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
