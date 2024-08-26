import { categories } from "../data/category";
import { videos } from "../data/videos";
import Category from "../components/pages/home/Category";
import { useEffect, useState } from "react";
import VideoLayout from "../components/video/VideoLayout";
import VideoGrid from "../components/video/VideoGrid";
import { calculateVisibleItems } from "../utils/utility";
import { Repeat, X } from "lucide-react";
import Button from "../components/elements/Button";
import ShortLayout from "../components/short/ShortLayout";
import { shorts } from "../data/shorts";
import ShortPreview from "../components/short/ShortPreview";

const HomePage = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [videoVisibleItem, setVideoVisibleItem] = useState(9);
    const [shortVisibleItem, setShortVisibleItem] = useState(2);

    useEffect(() => {
        const handler = () => {
            const w = window.innerWidth

            // video items
            if (w < 640) setVideoVisibleItem(1)
            else if (w < 768) setVideoVisibleItem(3)
            else if (w >= 768) setVideoVisibleItem(calculateVisibleItems(311, 2, "video"));

            // short items
            setShortVisibleItem(calculateVisibleItems(225, 1, "short"))
        }

        handler();
        window.addEventListener("resize", handler);
        return () => window.removeEventListener("resize", handler)
    })

    return (
        <div className="sm:ps-[48px] ps-0 md:ps-0 overflow-hidden h-auto pb-6">
            <Category
                categories={categories}
                selected={selectedCategory}
                onSelect={setSelectedCategory}
            />

            <section className="video-section py-6">
                <VideoLayout visibleItem={videoVisibleItem} displayMode="Grid">
                    {videos.map((video) => <VideoGrid key={video.id} {...video} />)}
                </VideoLayout>
            </section>


            <section className="short-section py-6 w-full">
                <header className="short-header flex items-center justify-between px-4 mb-4">
                    <div className="flex items-center gap-4">
                        <Repeat className="text-primary"/>
                        <span className="text-lg font-medium"> Shorts</span>
                    </div>

                    <Button variant="ghost" size="icon" className="p-1">
                        <X className="w-8 h-8"/>
                    </Button>
                </header>

                <ShortLayout visibleItem={shortVisibleItem}>
                    { shorts.map((short) => <ShortPreview key={short.id} {...short} />)}
                </ShortLayout>
            </section>

            <section className="video-section py-6">
                <VideoLayout visibleItem={videoVisibleItem} displayMode="Grid">
                    {videos.map((video) => <VideoGrid key={video.id} {...video} />)}
                </VideoLayout>
            </section>
        </div>
    );
}

export default HomePage;
