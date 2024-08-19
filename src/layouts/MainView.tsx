import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom"
import LoadingBar from "../components/elements/LoadingBar";

const MainView = () => {
    const [isLoading, setIsloading] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const page = () => {
            setIsloading(true);
            setTimeout(() => setIsloading(false), 1000)
        }

        page();
    }, [location.pathname])

    return (
        <main className="w-full px-6 overflow-x-hidden h-auto">
            <LoadingBar isLoading={isLoading} />
            <Outlet />
        </main>
    )
}

export default MainView;