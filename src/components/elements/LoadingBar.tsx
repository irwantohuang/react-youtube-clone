import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface LoadingBarProps {
    isLoading: boolean
}

const LoadingBar = ({ isLoading }: LoadingBarProps) => {

    const [progress, setProgress] = useState(0);

    

    useEffect(() => {
        setProgress(0)
        let interval: NodeJS.Timeout;
        if (isLoading) {
            interval = setInterval(() => {
                setProgress((prev) => {
                    const increment = Math.random() * 15;
                    return Math.min(prev + increment, 85);
                })
            }, 50)
        } else {
            setProgress(100);
            setTimeout(() => setProgress(0), 500)
        }

        return () => clearInterval(interval);
    }, [isLoading])


    if (!isLoading) return null;
    return createPortal(
        <div className="w-full h-0.5 fixed inset-0 bg-white overflow-hidden">
            <div className="absolute top-0 left-0 h-full bg-primary transition-all duration-500" style={{ width: `${progress}%`}}></div>
        </div>,
        document.body
    )
}



export default LoadingBar;