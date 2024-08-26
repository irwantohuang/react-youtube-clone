import { Settings } from "lucide-react";
import Button from "../elements/Button";
import { ReactNode } from "react";

interface NotificationModalProps {
    children: ReactNode
}

const NotificationModal = ({ children }: NotificationModalProps) => {
    return (
            <div className="bg-white rounded-md z-[1002] w-[350px] sm:w-[400px] md:w-[500px] shadow-md absolute right-0">
                <div className="w-full">
                    <div className="flex items-center justify-between px-4 py-1">
                        <span className="italic">Notification</span>
                        <Button variant="ghost" size="icon" tooltip="Settings">
                            <Settings />
                        </Button>
                    </div>

                    <hr />

                <div className="overflow-y-auto overflow-x-hidden max-h-[500px] w-full scrollbar-hidden">
                    {children}
                </div>

                </div>
            </div>
    )
}

export default NotificationModal;