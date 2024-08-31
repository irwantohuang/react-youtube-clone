import { useEffect, useRef, useState } from "react";
import { VideoType } from "../../types/video";
import Video from "./Video";
import VideoBody from "./VideoBody";
import { handleEscKey } from "../../utils/utility";
import { useLocation } from "react-router-dom";

const VideoSuggestionCard = ({ contentDetails, channel }: VideoType) => {
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
        <Video>
            <div className="video-content-list">
                <section
                    onMouseEnter={() => setPlayVideo(true)}
                    onMouseLeave={() => setPlayVideo(false)}
                    ref={containerRef}
                    className="video-container flex w-full justify-between"
                >
                    <div className="flex items-start gap-1 lg:gap-2">
                        <div className="xl:min-w-[150px] xl:max-w-[150px] max-w-[125px] min-w-[125px] lg:max-w-[140px] lg:min-w-[140px]">
                            <Video.Thumbnail
                                videoId={contentDetails.videoId}
                                thumbnailUrl={contentDetails.thumbnailUrl}
                                title={contentDetails.title}
                                playVideo={playVideo}
                                videoDuration={contentDetails.videoDuration}
                                videoUrl={contentDetails.videoUrl} />
                        </div>

                        <Video.Body displayMode="List">
                            <VideoBody.Title title={contentDetails.title} />
                            <div className="flex flex-col items-start">
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
                        </Video.Body>
                    </div>

                    <Video.Body.Option
                        showOption={showOption}
                        setShowOption={setShowOption}
                        containerRef={containerRef}
                        type={type}
                    />
                </section>
            </div>

            <div className="mt-6 lg:mt-2"></div>

            <Video.Overlay
                isOpen={showOption}
                onClick={setShowOption}
            />
        </Video>

    )
}

export default VideoSuggestionCard;