import { useEffect, useRef } from "react";
import { formatDuration } from "../../utils/utility";
import { Link } from "react-router-dom";
import { VideoThumbnailProps } from "../../types/videoProps";


const VideoThumbnail = ({videoId, thumbnailUrl, title, playVideo, videoDuration, videoUrl}: VideoThumbnailProps) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current == null) return;

        if (playVideo) {
            videoRef.current.currentTime = 0;
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
    }, [playVideo])


    return (
        <Link to={`/watch/${videoId}`} className="relative aspect-video">
            <img src={thumbnailUrl} alt={title} className={`block w-full object-cover transition-all duration-300 ${playVideo ? 'rounded-none' : 'rounded-xl'}`} />
            <span className="bg-slate-800/50 text-slate-200 text-xs absolute bottom-1 right-1 rounded px-2">{formatDuration(videoDuration)}</span>
            <video src={videoUrl} ref={videoRef} muted playsInline className={`absolute inset-0 h-full object-cover transition-all duration-150 ${playVideo ? 'opacity-100 delay-150' : 'opacity-0'}`} />
        </Link>
    )
}

export default VideoThumbnail;