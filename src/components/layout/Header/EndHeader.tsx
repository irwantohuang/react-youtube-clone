import { Bell, Mic, MonitorUp, Search, User } from "lucide-react";
import Button from "../../elements/Button";

interface EndHeaderProps {
    showSearch: boolean,
    handleShowSearch: () => void
}

const EndHeader = ({showSearch, handleShowSearch}: EndHeaderProps) => {
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
            <Button size="icon" variant="ghost" tooltip="Notifications">
                <Bell />
            </Button>
            <Button size="icon" variant="ghost">
                <User />
            </Button>
        </div>
    )
}

export default EndHeader;