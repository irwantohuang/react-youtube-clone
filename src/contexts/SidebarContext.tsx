import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface SidebarProviderProps {
    children: ReactNode
}

interface SidebarContextType {
    isMobileOpen: boolean,
    isLargeOpen: boolean,
    toggle: () => void
}

const SidebarContext = createContext<SidebarContextType | null>(null);

// eslint-disable-next-line react-refresh/only-export-components
export const useSidebarContext = () => {
    const value = useContext(SidebarContext);
    if (value == null) throw Error("Error Sidebar Provider")

    return value;
}

export const SidebarProvider = ({children}: SidebarProviderProps) => {
    const [isLargeOpen, setIsLargeOpen] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const isMobileScreen = () => {
        return window.innerWidth < 1024;
    }

    const toggle = () => {
        if (isMobileScreen()) {
            setIsMobileOpen(e => !e)
        } else {
            setIsLargeOpen(e => !e)
        }
    }

    useEffect(() => {
        const handleResize = () => {
            if (isMobileScreen()) setIsMobileOpen(false);
            setIsLargeOpen(false)
        }

        window.addEventListener("resize", handleResize)

        return () => window.addEventListener("resize", handleResize);
    })

    
    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (isMobileScreen() && event.key === 'Escape') setIsMobileOpen(false)
        }

        window.addEventListener("keydown", handleEscape)
        return () => removeEventListener("keydown", handleEscape)
    })

    return <SidebarContext.Provider value={{isLargeOpen, isMobileOpen, toggle}}>
        {children}
    </SidebarContext.Provider>
}

