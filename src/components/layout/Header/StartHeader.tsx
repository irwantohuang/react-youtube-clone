import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../../elements/Button";
import youtube from '../../../assets/youtube.png'
import { useSidebarContext } from "../../../contexts/SidebarContext";


interface StartHeaderProps {
    showSearch?: boolean
}

const StartHeader = ({ showSearch }: StartHeaderProps) => {
    // const { toggle } = useContext(SidebarContext);
    const { toggle } = useSidebarContext();

    return (
        <div className={`flex-shrink-0 items-center gap-4 ${showSearch ? 'hidden' : 'flex'}`}>
            <Button size="icon" variant="ghost" onClick={toggle}>
                <Menu />
            </Button>
            <Link to="/" className="w-24">
                <img src={youtube} alt="Youtube Logo" className="object-cover w-full h-full" />
            </Link>
        </div>
    )
}

export default StartHeader;