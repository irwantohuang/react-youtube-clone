import { categories } from "../data/category";
import { videos } from "../data/videos";
import Category from "../components/pages/home/Category";
import { useEffect, useState } from "react";
import VideoSection from "../components/video/VideoSection";
import VideoGrid from "../components/video/VideoGrid";

const HomePage = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [visibleItem, setVisibleItem] = useState(9);

    useEffect(() => {
        const handler = () => {
            const w = window.innerWidth
            if (w < 640) setVisibleItem(1)
            else if (w < 768) setVisibleItem(3)
            else if (w < 1024) setVisibleItem(5)
            else if (w < 1280) setVisibleItem(7)
            else if (w >= 1280) setVisibleItem(9)
        }

        handler();
        window.addEventListener("resize", handler);
        return () => window.removeEventListener("resize", handler)
    })

    return (
        <div className="sm:ps-[48px] ps-0 md:ps-0 overflow-hidden">
            <Category
                categories={categories}
                selected={selectedCategory}
                onSelect={setSelectedCategory}
            />

            <section className="py-6">
                <VideoSection visibleItem={visibleItem} displayMode="Grid">
                    {videos.map((video) => <VideoGrid key={video.id} {...video} />)}
                </VideoSection>
            </section>
        </div>
    );
}

export default HomePage;
