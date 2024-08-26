import { useEffect, useRef, useState } from "react"
import Image from "../elements/Image";
import { Link } from "react-router-dom";
import { formatViews, handleEscKey } from "../../utils/utility";
import Video from "../video/Video";

interface ShortProps {
    id: number | string,
    contentDetails: {
        shortId: string,
        title: string,
        shortUrl: string,
        thumbnailUrl: string,
        likeCount: number,
        commentCount: number,
        viewCount: number,
    },
    channel: {
        name: string,
        id: string,
        profileUrl: string,
        subscribed: boolean
    }
}
const ShortPreview = ({ contentDetails }: ShortProps) => {
    const [playVideo, setPlayVideo] = useState(false);
    const [showOption, setShowOption] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (videoRef.current == null) return;

        if (playVideo) {
            videoRef.current.currentTime = 0;
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
    }, [playVideo])

    useEffect(() => {
        return handleEscKey(() => setShowOption(false));
    }, [])

    return (
        <div
            onMouseEnter={() => setPlayVideo(true)}
            onMouseLeave={() => setPlayVideo(false)}
            className="w-full flex flex-col flex-grow gap-2 cursor-pointer"
            ref={containerRef}
        >
            <Link to={``} className="flex-grow relative aspect-[9/16] h-full rounded-2xl overflow-hidden">
                <Image src={contentDetails.thumbnailUrl} variant="short" className="z-10" />

                <video src={contentDetails.shortUrl} ref={videoRef} muted playsInline className={`absolute inset-0 h-full object-cover transition-all duration-200 ${playVideo ? 'opacity-100 delay-300' : 'opacity-0'}`} />
            </Link>

            <div className="short-preview-footer flex-shrink flex justify-between">
                <div className="flex flex-col gap-1">
                    <span>{contentDetails.title}</span>
                    <span>{formatViews(contentDetails.viewCount)} views</span>
                </div>

                <Video.Body.Option showOption={showOption} setShowOption={setShowOption} containerRef={containerRef} type="shorts" />
            </div>

            <Video.Overlay 
                isOpen={showOption} 
                onClick={setShowOption} 
            />
        </div>
    )
}



export default ShortPreview;