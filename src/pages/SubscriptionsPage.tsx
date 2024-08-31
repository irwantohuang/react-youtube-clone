import { useEffect, useRef, useState } from "react";
import VideoLayout from "../components/video/VideoLayout";
import { videos } from "../data/videos";
import VideoGrid from "../components/video/VideoGrid";
import VideoList from "../components/video/VideoList";
import { useSearchParams } from "react-router-dom";
import { calculateVisibleItems } from "../utils/utility";
import { Repeat } from "lucide-react";
import Button from "../components/elements/Button";
import ShortLayout from "../components/short/ShortLayout";
import ShortPreview from "../components/short/ShortPreview";
import { shorts } from "../data/shorts";

const SubscriptionsPage = () => {
    const [searchParams] = useSearchParams();
    const [displayMode, setDisplayMode] = useState("Grid");
    const [visibleItem, setVisibleItem] = useState(9);
    const sectionRef = useRef<HTMLDivElement>(null);
    const [shortVisibleItem, setShortVisibleItem] = useState(2);

    useEffect(() => {
        const handler = () => {
            const w = window.innerWidth
            if (w < 640) setVisibleItem(4)
            if (w >= 640) setVisibleItem(calculateVisibleItems(311, 2, "video"))
            if (displayMode === 'List') setVisibleItem(2);

            // short items
            if (sectionRef?.current) {
                if (displayMode === 'List') setShortVisibleItem(calculateVisibleItems(212, 1, "short", sectionRef.current.clientWidth))
                else setShortVisibleItem(calculateVisibleItems(225, 1, "short"))
            }
        }
        handler();
        window.addEventListener("resize", handler);
        return () => window.removeEventListener("resize", handler)
    })

    useEffect(() => {
        const flow = searchParams.get("flow");

        if (flow) {
            const flowNumber = Number(flow);
            if (flowNumber === 1) setDisplayMode("Grid")
            else if (flowNumber === 2) setDisplayMode("List")
        }
    }, [searchParams])

    return (
        <div className="overflow-hidden py-2">
            <VideoLayout title="Latest" displayMode={displayMode} visibleItem={visibleItem}>
                {videos.map((video) => (
                    displayMode === 'Grid' ?
                        <VideoGrid key={video.id} {...video} />
                    : displayMode === 'List' ?
                        <VideoList key={video.id} {...video} />
                    : null
                ))}
            </VideoLayout>

            <section ref={sectionRef} className={`short-section py-6 ${displayMode === 'Grid' ? 'w-full' : 'max-w-screen-xl mx-auto'}`}>
                <header className="short-header flex items-center justify-between px-4 mb-4">
                    <div className="flex items-center gap-4">
                        <Repeat className="text-primary"/>
                        <span className="text-lg font-medium"> Shorts</span>
                    </div>

                    <Button variant="ghost" className="text-blue-500 font-bold text-sm rounded-full hover:bg-blue-100 px-4">View All</Button>
                </header>

                <ShortLayout visibleItem={shortVisibleItem}>
                    { shorts.map((short) => <ShortPreview key={short.id} {...short} />)}
                </ShortLayout>
            </section>

            <VideoLayout displayMode={displayMode}>
                {videos.slice(visibleItem).map((video) => (
                    displayMode === 'Grid' ?
                        <VideoGrid key={video.id} {...video} />
                    : displayMode === 'List' ?
                        <VideoList key={video.id} {...video} />
                    : null
                ))}
            </VideoLayout>

        </div>
    )
}

export default SubscriptionsPage;