import { useEffect, useRef, useState } from "react";
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

    const mainContainerRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        if (mainContainerRef.current) {
            mainContainerRef.current.scrollTo(0, 0)
        }
    }, [location.pathname, mainContainerRef])

    return (
        <main ref={mainContainerRef} className="w-full px-6 overflow-x-hidden h-auto pb-[60px]">
            <LoadingBar isLoading={isLoading} />
            <Outlet />
        </main>
    )
}

export default MainView;