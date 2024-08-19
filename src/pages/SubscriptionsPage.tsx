import { useEffect, useState } from "react";
import VideoSection from "../components/video/VideoSection";
import { videos } from "../data/videos";
import VideoGrid from "../components/video/VideoGrid";
import VideoList from "../components/video/VideoList";
import { useSearchParams } from "react-router-dom";
import { sortArray } from "../utils/utility";

const SubscriptionsPage = () => {
    const [searchParams] = useSearchParams();
    const [displayMode, setDisplayMode] = useState("Grid");
    const [visibleItem, setVisibleItem] = useState(9);

    useEffect(() => {
        const handler = () => {
            const w = window.innerWidth
            if (w < 640) setVisibleItem(4)
            else if (w < 1536) setVisibleItem(6)
            else if (w < 1900) setVisibleItem(8)
            else if (w >= 1900) setVisibleItem(10)
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
            <VideoSection title="Latest" displayMode={displayMode} visibleItem={visibleItem}>
                {sortArray(videos, 'desc', 'name').map((video) => (
                    displayMode === 'Grid' ?
                        <VideoGrid key={video.id} {...video} />
                    : displayMode === 'List' ?
                        <VideoList key={video.id} {...video} />
                    : null
                ))}
            </VideoSection>
        </div>
    )
}

export default SubscriptionsPage;