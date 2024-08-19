import { Children } from "react";
import Button from "../elements/Button";
import { LayoutGrid, List } from "lucide-react";
import { VideoSectionProps } from "../../types/videoProps";
import { Link } from "react-router-dom";

const displayModes = [
    { name: "Grid", icon: LayoutGrid, path: "/subscriptions?flow=1" },
    { name: "List", icon: List, path: "/subscriptions?flow=2" },
];

const VideoSection = ({ title, children, visibleItem, displayMode }: VideoSectionProps) => {

    const items = Children.toArray(children).flat();
    const visibleItems = items.slice(0, visibleItem);

    return (
        <section className={`video-section relative w-full flex flex-col items-start gap-2 ${displayMode === 'Grid' ? '' : 'container mx-auto max-w-screen-xl'}`}>
            {title && !displayMode && <span>{title}</span>}

            {title && displayMode &&
                <div className={`flex items-center w-full ${displayMode === 'List' ? 'justify-end absolute' : 'justify-between h-14'}`}>
                    {displayMode === 'Grid' && <span className="font-bold text-lg">{title}</span>}

                    <div className="flex gap-1 items-center">
                        <Button variant="ghost" className="text-blue-500 font-bold text-sm rounded-full hover:bg-blue-100 px-4">Manage</Button>
                        {displayModes.map((mode) => (
                            <Link key={mode.name} to={mode.path}>
                                <Button variant="ghost" size="icon" className="p-1" tooltip={mode.name}>
                                    <mode.icon className="w-5 h-5" fill={`${displayMode === mode.name ? 'black' : 'none'}`} />
                                </Button>
                            </Link>
                        ))}
                    </div>
                </div>
            }


            <div className={
                `video-content-grid ${displayMode === 'Grid' ? 'w-full grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-x-4 gap-y-10' : 'w-full'}`
            }>
                {visibleItems}
            </div>
        </section>
    )
}

export default VideoSection;