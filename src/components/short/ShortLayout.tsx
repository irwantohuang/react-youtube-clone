import { Children, ReactNode, useState } from "react";
import Button from "../elements/Button";
import { ChevronDown, ChevronUp } from "lucide-react";


interface ShortLayoutProps {
    children: ReactNode,
    visibleItem?: number,
}

const ShortLayout = ({ children, visibleItem }: ShortLayoutProps) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const items = Children.toArray(children).flat();
    const visibleItems = isExpanded ? items.slice(0, 12) : items.slice(0, visibleItem);
    const ButtonIcon = isExpanded ? ChevronUp : ChevronDown;

    return (
        <div className="w-full"
        >
            <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-x-4 gap-y-8 transition-all duration-100 w-full" >
                {visibleItems} 
            </div>
            <div className="relative mt-8 h-8 w-full flex items-center justify-center">
                <div className="absolute top-1/2 -translate-y-1/2 w-full z-0">
                    <hr className="border border-secondary-border" />
                </div>

                <Button 
                    onClick={() => setIsExpanded(e => !e)}
                    variant="ghost" 
                    className="px-36 py-1 rounded-full border border-secondary-border text-sm bg-white z-10 flex gap-1 items-center">
                    Show more 
                    <ButtonIcon />
                </Button>
            </div>
        </div>
    )
}

export default ShortLayout;