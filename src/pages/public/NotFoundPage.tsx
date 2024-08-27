import { CircleAlert } from "lucide-react";

const NotFoundPage = () => {
    return (
        <div className="w-full flex py-10 px-8">
            <div className="py-6 px-8 rounded-md bg-secondary items-start hover:bg-secondary-hover transition-colors duration-100">
                <span className="flex items-center gap-4 text-7xl font-bold mb-4">
                    <CircleAlert size={60} className="text-primary"/>
                    404 Page Not Found
                </span>
                <span className="text-2xl font-semibold">Something went wrong</span>
            </div>
        </div>
    )
}

export default NotFoundPage;