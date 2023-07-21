import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import {useRestaurantMenu} from "../utils";

const RestaurantMenu = () => {
    const { resId } = useParams();

    const resInfo = useRestaurantMenu();

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