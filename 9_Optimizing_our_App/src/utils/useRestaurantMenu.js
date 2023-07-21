import { useEffect, useState } from "react";

const useRestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);

    const fetchData = async () => {
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/todos");
            const data = await res.json();
            console.log(data[0]);
            setResInfo(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []); 

    return resInfo;
};

export default useRestaurantMenu;
