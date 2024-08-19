import { useEffect, useState } from "react";
import CenterHeader from "./CenterHeader";
import EndHeader from "./EndHeader";
import StartHeader from "./StartHeader";

const Header = () => {
    const [showSearch, setShowSearch] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    
    const handleShowSearch = () => {
        setShowSearch(true)
        setIsFocused(true)
    }

    useEffect(() => {
        const handler = () => {
            setIsFocused(false)
            setShowSearch(false)
        }

        window.addEventListener("resize", handler);

        return () => {
            window.addEventListener("resize", handler)
        }
    }, [])

    return (
        <header className="w-full flex items-center justify-between px-4 gap-6 h-[56px] py-2">
            <StartHeader showSearch={showSearch} />
            <CenterHeader 
                showSearch={showSearch} 
                isFocused={isFocused} 
                setShowSearch={setShowSearch}
                setIsFocused={setIsFocused} />

            <EndHeader showSearch={showSearch} handleShowSearch={handleShowSearch} />
        </header>
    )
}

export default Header;