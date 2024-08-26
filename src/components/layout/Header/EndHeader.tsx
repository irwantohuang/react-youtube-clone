import { Bell, Mic, MonitorUp, Search, User } from "lucide-react";
import Button from "../../elements/Button";
import NotificationModal from "../../modals/NotificationModal";
import { useState } from "react";
import Overlay from "../../modals/Overlay";
import { notifications } from "../../../data/notifications";
import NotificationCard from "../../notification";

interface EndHeaderProps {
    showSearch: boolean,
    handleShowSearch: () => void
}

const EndHeader = ({ showSearch, handleShowSearch }: EndHeaderProps) => {

    const [showNotification, setShowNotification] = useState(false);

    return (
        <div className={`flex-shrink-0 items-center md:gap-2 ${showSearch ? 'hidden' : 'flex'}`}>
            <Button size="icon" variant="ghost" tooltip="Search" type="button" onClick={handleShowSearch} className="md:hidden">
                <Search />
            </Button>
            <Button size="icon" variant="ghost" tooltip="Search with your voice" className="md:hidden">
                <Mic />
            </Button>
            <Button size="icon" variant="ghost" tooltip="Create">
                <MonitorUp />
            </Button>
            <div className="relative">
                <Button size="icon" variant="ghost" tooltip="Notifications" notification={10} onClick={() => setShowNotification(!showNotification)}>
                    <Bell />
                </Button>
                {showNotification &&
                    <NotificationModal>
                        {notifications.map((notification) => (
                            <NotificationCard key={notification.id} {...notification} />
                        ))}
                    </NotificationModal>
                }
                <Overlay isOpen={showNotification} onClick={setShowNotification} />
            </div>
            <Button size="icon" variant="ghost">
                <User />
            </Button>
        </div>
    )
}

export default EndHeader;