import { useEffect, useRef, useState } from "react";
import { VideoType } from "../../types/video";
import Video from "./Video";

const VideoList = ({ contentDetails, channel }: VideoType) => {
    const [playVideo, setPlayVideo] = useState(false);
    const [showOption, setShowOption] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleEscKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') setShowOption(false);
        }

        document.addEventListener("keydown", handleEscKey);
        return () => document.removeEventListener("keydown", handleEscKey)
    }, [])


    return (
        <Video>
            <div className="video-content-list flex flex-col w-full gap-3">
                <Video.Header 
                    profileUrl={channel.profileUrl} 
                    channelName={channel.name} 
                />

                <section
                    onMouseEnter={() => setPlayVideo(true)}
                    onMouseLeave={() => setPlayVideo(false)}
                    ref={containerRef}
                    className="video-container flex w-full items-start gap-2"
                >
                    <div className="min-w-[200px] max-w-[200px] sm:min-w-[250px] sm:max-w-[250px]">
                        <Video.Thumbnail 
                            videoId={contentDetails.videoId}
                            thumbnailUrl={contentDetails.thumbnailUrl}
                            title={contentDetails.title}
                            playVideo={playVideo}
                            videoDuration={contentDetails.videoDuration}
                            videoUrl={contentDetails.videoUrl} />
                    </div>

                    <Video.Body displayMode="List">
                        <Video.Body.Title title={contentDetails.title} />
                        <div className="flex flex-wrap items-center gap-2">
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

                        <Video.Body.Description description={contentDetails.description} />
                    </Video.Body>

                    <Video.Body.Option 
                        showOption={showOption} 
                        setShowOption={setShowOption} 
                        containerRef={containerRef} 
                    />
                </section>
            </div>

            <hr className="mb-6 mt-4" />

            <Video.Overlay 
                showOption={showOption} 
                setShowOption={setShowOption} 
            />
        </Video>
    )
}

export default VideoList;