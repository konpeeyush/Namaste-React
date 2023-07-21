import { useEffect, useState } from "react";
const useOnline = () => {

    const [onlineStatus, setOnlineStatus] = useState(true);

    useEffect(() => {
        window.addEventListener("offline", () => {
            setOnlineStatus(false);
        });
    }, [])


    return onlineStatus;
}
export default useOnline;