import { ChevronDown, ChevronUp } from "lucide-react";
import { Children, ReactNode, useState } from "react";
import Button from "../../elements/Button";

interface SidebarSectionProps {
    visibleItem?: number,
    title?: string,
    children: ReactNode,
    mobileOnly?: boolean
}

const SidebarSection = ({ visibleItem = 6, title, children }: SidebarSectionProps) => {

    const [isExpanded, setIsExpanded] = useState(false)
    const items = Children.toArray(children).flat()
    const visibleItems = isExpanded ? items : items.slice(0, visibleItem);
    const ButtonIcon = isExpanded ? ChevronUp : ChevronDown

    return (
        <section className="menu-section flex flex-col mb-2 mt-2">
            {title && <span className="font-semibold block">{title}</span>}
            {visibleItems}
            {items.length > visibleItem &&
                <Button
                    onClick={() => setIsExpanded(e => !e)}
                    variant="ghost"
                    className="w-full flex items-center gap-2 px-2 rounded text-sm">
                    <ButtonIcon strokeWidth={1} />
                    {isExpanded ? 'Show less' : 'Show more'}
                </Button>
            }
        </section>
    )
}

export default SidebarSection;