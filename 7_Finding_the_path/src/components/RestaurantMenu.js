import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);

    const { resId } = useParams();

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await res.json();
        console.log(data)
        setResInfo(data);
    };
    return resInfo === null ? (
        <Shimmer />
    ) : (
        <div className="menu">
            <h1>Name of the Restaurant</h1>
            <h2>Menu</h2>
            <ul>
                <li>Biryani</li>
                <li>Burgers</li>
                <li>Diet Coke</li>
            </ul>
            <h2>ResID-{resId}</h2>
        </div>
    );
}

export default RestaurantMenu;