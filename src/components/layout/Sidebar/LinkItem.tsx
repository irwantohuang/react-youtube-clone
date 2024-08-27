import { ElementType } from "react";
import { Link, useLocation } from "react-router-dom";

interface LinkItemProps {
    title: string,
    url: string,
    Icon: ElementType,
    mobileView?: boolean,
}

const LinkItem = ({ title, url, Icon, mobileView }: LinkItemProps) => {
    const path = useLocation();
    return (
        <Link to={url} className={`flex transition-colors hover:bg-neutral-100 duration-100 text-sm rounded whitespace-nowrap text-ellipsis ${mobileView ? 'gap-1 text-[10px] font-light py-2 flex-col items-center' : 'gap-4 flex-row px-2 py-3 items-center'} ${path.pathname === url ? 'bg-secondary hover:bg-secondary-hover' : ''}`}>
            <Icon strokeWidth={1} className="w-4 h-4 lg:w-5 lg:h-5" />
            { title }
        </Link>
    )
}

export default LinkItem;