import { useEffect, useRef } from "react";
import { formatDuration } from "../../utils/utility";
import { Link } from "react-router-dom";
import { VideoThumbnailProps } from "../../types/videoProps";
import Image from "../elements/Image";


const VideoThumbnail = ({videoId, thumbnailUrl, title, playVideo, videoDuration, videoUrl}: VideoThumbnailProps) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const videoEl = videoRef.current;
        if (videoEl == null) return; 

        const handlePlay = async () => {
            try {
                if (playVideo) {
                    videoEl.currentTime = 0;
                    await videoEl.play();
                } else {
                    videoEl.pause();
                }
            } catch(error) {
                console.error("Error playing video... -> ", error)
            }
        }

        handlePlay();
        return () => {
            if (playVideo) videoEl.pause();
        }
    }, [playVideo])


    return (
        <Link to={`/watch?v=${videoId}`} className={`relative aspect-video overflow-hidden transition-all duration-300 ${playVideo ? 'rounded-none' : 'rounded-sm lg:rounded-xl'}`}>
            <Image src={thumbnailUrl} alt={title} variant="thumbnail" className={`${playVideo ? 'rounded-none' : 'rounded-md  lg:rounded-xl'}`} />
            <span className="bg-slate-800/50 text-slate-200 text-xs absolute bottom-1 right-1 rounded px-2">{formatDuration(videoDuration)}</span>
            <video src={videoUrl} ref={videoRef} muted playsInline className={`absolute inset-0 h-full object-cover transition-all duration-150 ${playVideo ? 'opacity-100 delay-150' : 'opacity-0'}`} />
        </Link>
    )
}

export default VideoThumbnail;