import { Children, ReactNode, useEffect, useRef, useState } from "react";
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
    const [height, setHeight] = useState<string | number | undefined>("auto")

    const containerRef = useRef<HTMLDivElement>(null);

    // useEffect(() => {
    //     console.log("current ... ", containerRef.current?.clientHeight)
    //     const containers = containerRef.current
    //     if (containers == null) return;

    //     const handler = () => {
    //         // if (isExpanded) setHeight("auto")
            
    //         setHeight(containers.clientHeight + 'px')


    //         console.log("Height... -> ", height)

    //     }

    //     handler();
    //     document.addEventListener("resize", handler)
    //     return () => document.removeEventListener("resize", handler)

    // }, [isExpanded, height])


    useEffect(() => {
        const container = containerRef.current;
        if (container == null) return;

        console.log("Height before -> ", height)

        if (isExpanded) {
            container.style.height = container.scrollHeight + "px";
        } else {
            container.style.height = height + "px";
        }


        setHeight(container.scrollHeight);
        console.log("Heihgt After ..." , height)
    }, [isExpanded, height])


    return (
        <div className={`w-full mb-36 bg-red-200`}
        >
            <div ref={containerRef} className="grid grid-cols-[repeat(auto-fill,minmax(215px,1fr))] gap-x-4 gap-y-8 transition-all duration-100 bg-green-300">
                {visibleItems}
            </div>


            <div className="relative mt-8 h-8 w-full flex items-center justify-center">
                <div className="absolute top-1/2 -translate-y-1/2 w-full z-0">
                    <hr className="border border-secondary-border" />
                </div>

                <Button 
                    onClick={() => setIsExpanded(e => !e)}
                    variant="ghost" 
                    className="px-36 rounded-full border border-secondary-border text-sm bg-white z-10 flex gap-1 items-center">
                    Show more 
                    <ButtonIcon />
                </Button>
            </div>


        </div>
    )
}

export default ShortLayout;