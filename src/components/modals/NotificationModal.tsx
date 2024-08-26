import { Settings } from "lucide-react";
import Button from "../elements/Button";
import { ReactNode } from "react";

interface NotificationModalProps {
    children: ReactNode
}

const NotificationModal = ({ children }: NotificationModalProps) => {
    return (
            <div className="bg-white rounded-md z-[1002] w-[500px] shadow-md absolute right-full">
                <div className="w-full">
                    <div className="flex items-center justify-between px-4 py-1">
                        <span className="italic">Notification</span>
                        <Button variant="ghost" size="icon" tooltip="Settings">
                            <Settings />
                        </Button>
                    </div>

                    <hr />

                <div className="overflow-y-scroll overflow-auto max-h-[500px] w-full scrollbar-hidden">
                    {children}
                </div>

                </div>
            </div>
    )
}

export default NotificationModal;