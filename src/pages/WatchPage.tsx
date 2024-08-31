import { useSearchParams } from "react-router-dom"
import { useSidebarContext } from "../contexts/SidebarContext";
import { useEffect, useState } from "react";
import { videoCategories } from "../data/category";
import Category from "../components/pages/home/Category";
import VideoLayout from "../components/video/VideoLayout";
import { videos } from "../data/videos";
import VideoSuggestionCard from "../components/video/VideoSuggestionCard";
import ChannelDetail from "../components/channel/ChannelDetails";
import { VideoType } from "../types/video";
import VideoActions from "../components/watch/VideoActions";
import Description from "../components/watch/Description";
import { comments, CommentType } from "../data/comments";
import CommentContainer from "../components/comment/CommentContainer";

const WatchPage = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchParams] = useSearchParams();
    const videoId = searchParams.get('v');
    const { setIsWatchPage } = useSidebarContext();

    const [video, setVideo] = useState<VideoType>();
    const [comment, setComments] = useState<CommentType>()

    useEffect(() => {
        setVideo(videos.find((v) => v.contentDetails.videoId === videoId));
        setComments(comments.find((v) => v.videoId[1]));

    }, [videoId])

    useEffect(() => {
        setIsWatchPage(true);

        return () => setIsWatchPage(false);
    }, [setIsWatchPage]);


    return (
        <div className="w-full lg:px-10 max-w-[1680px] mx-auto overflow-hidden 2xl:px-0 mt-6">
            <div className="w-full gap-4 flex flex-col lg:grid lg:grid-cols-[auto,1fr] flex-grow">
                <div className="w-full flex flex-col gap-2 lg:max-w-3xl xl:min-w-[896px] xl:max-w-4xl 2xl:min-w-[1152px] 2xl:max-w-6xl">
                    <video src="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" className="aspect-video w-full rounded-xl" autoPlay controls muted />

                    <span className="font-semibold text-xl mt-2">{video?.contentDetails.title}</span>
                    
                    <div className="flex items-center justify-between">
                        <ChannelDetail id={video?.channel.id} />
                        <VideoActions like={video?.contentDetails.likeCount} isLiked={video?.contentDetails.isLiked} />
                    </div> 

                    <Description viewCount={video?.contentDetails.viewCount} publishedAt={video?.contentDetails.publishedAt} description={video?.contentDetails.description} />

                    <div className="hidden lg:flex">
                        <CommentContainer commentCount={video?.contentDetails.commentCount} comment={comment} />
                    </div>
                </div>


                <div className="overflow-hidden w-full">
                    <Category
                        categories={videoCategories}
                        selected={selectedCategory}
                        onSelect={setSelectedCategory}
                    />
                    <VideoLayout displayMode="List">
                        {videos.map((video) => <VideoSuggestionCard key={video.id} {...video} />)}
                    </VideoLayout>
                </div>

                <div className="flex lg:hidden">
                        <CommentContainer commentCount={video?.contentDetails.commentCount} comment={comment} />
                </div>



            </div>
        </div>
    )
}

export default WatchPage