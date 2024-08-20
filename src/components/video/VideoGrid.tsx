import { useEffect, useRef, useState } from "react";
import { VideoType } from "../../types/video";
import Video from "./Video";
import { useLocation } from "react-router-dom";
import { handleEscKey } from "../../utils/utility";

const VideoGrid = ({ contentDetails, channel }: VideoType) => {
    const [playVideo, setPlayVideo] = useState(false);
    const [showOption, setShowOption] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null)

    const location = useLocation();
    const [type, setType] = useState("/");

    useEffect(() => {
        const pathName = location.pathname;
        if (pathName === '/subscriptions') setType("subscriptions");
        else if (pathName === "/") setType("home");
    }, [location.pathname, type])

    useEffect(() => {
        return handleEscKey(() => setShowOption(false));
    }, [])

    return (
        <section
            onMouseEnter={() => setPlayVideo(true)}
            onMouseLeave={() => setPlayVideo(false)}
            ref={containerRef} 
            className="video-container flex flex-col w-full gap-2">
            <Video>
                <Video.Thumbnail
                    videoId={contentDetails.videoId}
                    thumbnailUrl={contentDetails.thumbnailUrl}
                    title={contentDetails.title}
                    playVideo={playVideo}
                    videoDuration={contentDetails.videoDuration}
                    videoUrl={contentDetails.videoUrl}
                />
                <Video.Body displayMode="Grid">
                    <div className="flex gap-4">
                        <Video.Body.Profile
                            profileUrl={channel.profileUrl}
                            channelName={channel.name}
                        />

                        <div className="flex items-start flex-col">
                            <Video.Body.Title title={contentDetails.title} />
                            <Video.Body.Account
                                channelId={channel.id}
                                channelName={channel.name}
                                channelVerified={channel.verified}
                            />
                            <Video.Body.Footer
                                viewCount={contentDetails.viewCount}
                                publishedAt={contentDetails.publishedAt}
                            />
                        </div>
                    </div>

                    <Video.Body.Option
                        showOption={showOption}
                        setShowOption={setShowOption}
                        containerRef={containerRef}
                        type={type}
                    />
                </Video.Body>

                <Video.Overlay
                    showOption={showOption}
                    setShowOption={setShowOption}
                />
            </Video>
        </section>
    )
}

export default VideoGrid;